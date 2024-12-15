function range(start, end) {
    var result = []; 
    for (var i = start; i <= end; i++) {result.push(i);}
    return result;
}

function extractOrderComment(comment) {
    // Убираем лишние пробелы и двоеточие
    comment = comment.replace(/:/g, ' ').trim();
    
    // Разделяем строку на слова
    const words = comment.split(/\s+/);
    
    let orderNumber = '';
    let courierComment = '';

    // Итерируем по словам и находим номер заказа
    for (const word of words) {
    
        console.log(word, /^\d+$/.test(word), word.length, (word.length > 7))
        // Проверяем, является ли слово числом и длина больше 7
        if (/^\d+$/.test(word) && word.length > 6) {
            orderNumber = orderNumber + " " + word; // Сохраняем номер заказа
        } else {
            // Если это не номер заказа, добавляем к комментарию
            courierComment += word + ' ';
        }
    }

    // Убираем лишние пробелы в комментарии
    courierComment = courierComment.trim();
    orderNumber = orderNumber.trim()

    return {
        orderNumber: orderNumber,
        courierComment: courierComment
    };
}

class AnalIs {

    async run(args) {

        this.ready = true

        this.html              = args["html"]
        this.cfg               = args["config"]
        this.all_tables_sorted = args["tables"]
        this.traffic           = this.all_tables_sorted[0]["traffic"]
        
        this.temp = this.cfg["type_settings"] 
        this.vp   =  Array(this.cfg["main"]["size"]).fill(-1)
        this.pt   =  this.cfg["passive_template"]
        this.def  =  this.cfg["default"]
        
        this.temps    = args["templates"]
        this.all_list = args["templates"]["all_list"]
        this.deny     = args["deny"]

        this.tm  =  args["datetime"]
        this.ts  =  {}

        this.refuse_count = false

        Object.keys(this.temp).forEach(element => {this.ts["t" + element.replace("_", "")] = this.temp[element]});

        this.type_of_page_object = new Type(this.html, this.cfg, this.temp, this.all_tables_sorted[0]["return"])
        this.type_of_page = this.type_of_page_object.type
        this.return_type = false

        if (this.type_of_page[0] == "return") {

            let page = await this.get_return_bill()
            this.return_type = new Type(page, this.cfg, this.temp, true)

            this.vars = this.return_type.vars
        }

        this.copy_massive = [this.return_type, this.vars]
        this.current_temp = this.temp[this.type_of_page[0]][0]

        for (let i = 1; i < this.current_temp.length; i++) {
            let e = this.current_temp[i]
            if (e.length == 1 & e[0] == false) {
                this.current_temp[i] = Array(this.def[2][i]).fill(-1)
            }
        }

        this.uv_turn = Object.keys(this.temps["uv_off"]).includes(this.traffic) 

        this.Scan(this.current_temp) 
        return [this.type_of_page, this.vp]
    }

    async get_return_bill(url) {
        let bill = this.html.querySelector("#detail-view tr:nth-child(17) a")
        let bill_url = bill.getAttribute("href")
        let page = await get_page(bill_url)
        let html = document.createElement("div")
        html.innerHTML = page
        return html
    } 

    default_group(temp) {

        let day  = this.type_of_page[1][2]

        for (let i=0; i<temp.length; i++) {if (temp[i] == false) {temp[i] = Array(this.def[2][i]).fill(-1)}}

        if ((temp.length == 1) & (temp[0] == "default"))  {temp = Array(this.def[2][0]).fill(true)}   
        if (temp[0] & !day & this.tm[0]) {this.vp[this.def[1]["shift"]]="д"} 
        else {this.vp[this.def[1]["shift"]]="н"}
        if (temp[0] & day) {this.vp[this.def[1]["shift"]]="д"}

        if (this.def[0]["date"]) {this.vp[this.def[1]["date"]] = this.tm[1]} // дата   
        if (this.def[0]["time"]) {this.vp[this.def[1]["time"]] = this.tm[2]} // время 

        let seller = this.all_tables_sorted[0]["seller"].trim().split(" ").filter((e) => !e.includes("-")).join(" ")
        let seller_hash = btoa(unescape(encodeURIComponent(seller)))

        

        if (Object.keys((this.cfg["enames"])).includes(seller_hash)) seller = decodeURIComponent(escape(atob(this.cfg["enames"][seller_hash])))
        if (this.def[0]["name"]) {this.vp[this.def[1]["name"]] = seller} // имя продавца

        console.log(this.def[1]["name"], seller)
        console.log(this.vp)

    }

    standart(temp, otemp) {
        if (!this.uv_turn) {this.vp[this.all_list[this.traffic]]                             =  temp[1]} // ув (5 - 16)
        if (Object.keys(this.all_tables_sorted[2]).includes("636")) {this.vp[this.pt["six"]] =  temp[2]} // 636 проверка наличия
        if (this.uv_turn) {this.vp[this.pt["order"]]                                         = otemp[0]} // учет заказов
        if (this.uv_turn) {this.vp[this.all_list[this.traffic]]                              = otemp[0]} // заказы 22-23 самовывоз приложение
    }

    enter_group(temp, otemp) {
        this.vp[this.pt["enter"]] = temp[0]  // вход 
        this.vp[this.pt["nc"]] = temp[3]  // не клиент 
        this.standart(temp, otemp)
    }

    items_group(temp) {

        let items = this.all_tables_sorted[2]

        if (Object.keys(items).length > 0) {

            let desc = []
            let arts = []
            let count = 0

            items.forEach(e => {
                if (temp[3] == 1) {
                    if (!(this.cfg["stop"].includes(e.art)) || (e.art == 0 & e.name == "Клиентский заказ")) {
                        desc.push(e.name); 
                        if (e.art != 0) {arts.push(e.art);}; 
                        if (e.is_good || e.name == "Клиентский заказ") {count+=Number(e.count);}
                    }
                } else if (temp[3] == -1) {
                    desc.push(e.name); arts.push(e.art); if (e.is_good || e.name == "Клиентский заказ") {count+=Number(e.count)};
                }
            }); 
            
            if (temp[1] != 1) {desc = []}

            let comment_245 = this.all_tables_sorted[0]["comment"].replace(/[\r\n\t]+/g, " ")
            let c = document.createElement("div")

            c.innerHTML += comment_245
            comment_245 = c.innerText

            if ((temp[4] == 1) & !(["Не задан", ""].includes(comment_245))) {
                desc.push(comment_245.replace(":", " "))
            }

            if (this.type_of_page[0] == "market" || this.type_of_page[0] == "mobile") {
                let res = extractOrderComment(comment_245)
                this.vp[this.pt["comments"]]  =  res.courierComment
                this.vp[this.pt["order_number"]] = res.orderNumber
                this.vp[this.pt["articles"]]  =  arts.join(";  ") 
            } else {
                this.vp[this.pt["comments"]]  =  desc.join(",  ")
                this.vp[this.pt["articles"]]  =  arts.join(";  ") 
            }

            this.refuse_count = true

            if (temp[2] == -1) {this.vp[this.pt["articles"]] = temp[2]}
            if (temp[0] != 1) { this.vp[this.pt["buys"]] = temp[0]; this.vp[this.pt["items_count"]] = temp[0] } 

            else { 

                if (count > 0) { this.vp[this.pt["buys"]] = 1; this.vp[this.pt["items_count"]] = count; this.refuse_count = true;
                } else { 

                    this.refuse_count = false; 

                    this.vp[this.pt["buys"]] = 0; this.vp[this.pt["items_count"]] = 0 
                    this.vp[this.all_list[this.traffic]] = 0; this.vp[this.pt["enter"]] = 0;

                }
            }
        }
    }

    money_group(temp) {    
        
        function cd(n) {
            let num = n.split(".")
            if (num[1] == "00") {return num[0]} 
            else { if (num[1][1] == "0") {num[1] = num[1][0]}; return num.join("."); }
        }

        let m = [Number(cd((this.all_tables_sorted[1]["cash"]))), 
                 Number(cd((this.all_tables_sorted[1]["no_cash"]))), 
                 Number(cd((this.all_tables_sorted[1]["sbp"])))]

        let cnc = [[m[0], m[1], m[2]], [m[0], m[1] + m[2]]]

        cnc.forEach(e => {e.forEach(elem => {
            if (elem == 0) {elem = -1}
        })});

        function isInteger(num) {
            return (num ^ 0) === num;
        }

        for (let i = 0; i < cnc.length; i++) {
            for (let j = 0; j < cnc[i].length; j++) {
                if (cnc[i][j] == 0 || !this.refuse_count) {cnc[i][j] = ["-1", "-1"]} 
                else {
                    if (!isInteger(cnc[i][j])) {
                        cnc[i][j] = [cnc[i][j].toString().trim().split(".").join(","), Math.round(cnc[i][j]).toString().trim()]
                    } else {
                        cnc[i][j] = [cnc[i][j].toString().trim(), cnc[i][j].toString().trim()]
                    }
                }
            }
        }
        
        let cash_nocash = cnc[1]
        let cash_nocash_sbp = cnc[0]
       
        
        let mi = this.pt["money"][0]
        let mmp = this.pt["money"][1]
        let t_m = {}
        t_m[mmp[0]] = ['-1', '-1']
        t_m[mmp[1]] = ['-1', '-1']
        this.money_object = ((temp.length == 1) & (temp[0] == -1)) ?  t_m: false
        console.log(temp, this.money_object)
        // обычная оплата 
        if (temp[0] === 1 & !this.money_object) {

            this.money_object = {}
            range(0, 2).forEach(i => {
                this.vp[mi[i]] = cash_nocash_sbp[0][i]; 
                this.money_object[mi[i]] = cnc[0][i]}
            );

        // оплата заказа
        } else if (temp[1] === 1) {

            console.log(this.money_object)

            range(0, 1).forEach(i => {
                this.vp[mi[i]]    = cash_nocash[0][i]; 
                this.money_object[mi[i]]  = cnc[0][i];
            });

        // возврат заказа
        } else if (this.return_type != false & (temp[2] === 1)) {
            if (this.return_type.type[0] != false) {
                if (this.return_type.type[0] == "mobile") {
                    range(0, 1).forEach(i => {
                        this.vp[mi[i]]    = cash_nocash[0][i]; 
                        this.money_object[mi[i]]  = cnc[0][i];
                    });
                } else if (this.return_type.type[0] == "buyer") {
                    
                    range(0, 1).forEach(i => {
                        this.vp[mmp[i]]    = cash_nocash[0][i]; 
                        this.money_object[mmp[i]]  = cnc[0][i];
                    });

                } else {
                    range(0, 1).forEach(i => {
                        this.vp[mmp[i]]    = cash_nocash[0][i]; 
                        this.money_object[mmp[i]]  = cnc[0][i];
                    });
                }      
            }
        } 
    }

    Scan(temp) {

        this.default_group(temp[0])
        this.enter_group(temp[1], temp[2])
        this.items_group(temp[3])
        this.money_group(temp[4])
        return this.vp

    } 
}

