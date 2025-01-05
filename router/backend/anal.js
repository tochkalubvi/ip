function range(start, end) {
    var result = []; 
    for (var i = start; i <= end; i++) {result.push(i);}
    return result;
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
        let seller = this.all_tables_sorted[0]["seller"].trim().split(" ").filter((e) => e != "-.").join(" ").trim()
        let seller_hash = btoa(unescape(encodeURIComponent(seller)))
        if (Object.keys((this.cfg["enames"])).includes(seller_hash)) seller = decodeURIComponent(escape(atob(this.cfg["enames"][seller_hash])))
        if (this.def[0]["name"]) {this.vp[this.def[1]["name"]] = seller} // имя продавца
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
    // ГРУППА АНАЛИЗА РАБОТАЮЩАЯ
    // С ПРОДАННЫМИ ТОВАРАМИ
    // ОДНА ИЗ САМЫХ ЗАЕБИСТЫХ
    items_group(temp) {
        // ПОЛУЧАЕМ СПИСОК ТОВАРОВ
        let items = this.all_tables_sorted[2]
        // ЕСЛИ ОН БОЛЬШЕ НУЛЯ
        if (Object.keys(items).length > 0) {
            // ПОДГОТВАЛИВАЕМ ПЕРЕМЕННЫЕ
            let desc = []
            let arts = []
            let count = 0
            // КАЖДЫЙ ПРОДАННЫЙ ПРЕДМЕТ
            items.forEach(e => {
                // ПРОВЕРЯЕМ ШАБЛОН
                if (temp[3] == 1) {
                    // ПРОВЕРЯЕМ СТОП ЛИСТ
                    if (!(this.cfg["stop"].includes(e.art)) || (e.art == 0 & e.name == "Клиентский заказ")) {
                        desc.push(e.name); 
                        if (e.art != 0) {arts.push(e.art);}; 
                        if (e.is_good || e.name == "Клиентский заказ") {count+=Number(e.count);}
                    }
                // ЕСЛИ ШАБЛОН НЕ ДАЛ ДОБРО
                } else if (temp[3] == -1) {
                    desc.push(e.name); arts.push(e.art); if (e.is_good || e.name == "Клиентский заказ") {count+=Number(e.count)};
                }
            }); 
            // ОПИСАНИЕ
            if (temp[1] != 1) {desc = []}
            // РАЗБИРАЕМ РАНЕЕ РАЗОБРАННЫЕ КОМЕНТАРИИ
            let cobj = this.all_tables_sorted[0]["comment"]
            let comment = cobj["full"]
            let c = document.createElement("div")
            c.innerHTML += comment
            comment = c.innerText
            // ПРОВЕРКА НА ПУСТОЙ КОММЕНТАРИЙ
            if ((temp[4] == 1) & !(["Не задан", ""].includes(comment))) {desc.push(comment)}
            // ПРОВЕРКА НА МАРКЕТПЛЕЙС
            if (this.type_of_page[0] == "market" || this.type_of_page[0] == "mobile") {
                cobj["courierComment"] = cobj["courierComment"] ? cobj["courierComment"] : ""
                this.vp[this.pt["comments"]]     =  cobj["carrierType"].filter(item => typeof item === 'string').map(item => `[${item}]`).join('') + " " + cobj["courierComment"]
                this.vp[this.pt["order_number"]] = cobj["orderNumber"].join(" ");
                this.vp[this.pt["articles"]]  =  arts.join(";  ") 
            // В ЛЮБОМ ДРУГОМ СЛУЧАЕ
            } else {
                this.vp[this.pt["comments"]]  =  desc.join(",  ")
                this.vp[this.pt["articles"]]  =  arts.join(";  ") 
            }
            // КОСТЫЛЬ
            this.refuse_count = true
            // ПО ШАБЛОНУ СМОТРИМ ВЫСТАВЛЯЕМ ЛИ ПОКУПКИ ИЛИ КОЛИЧЕСТВО ТОВАРОВ
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
        
        let if_money = (this.pt["money"]["pay"][this.type_of_page[0]] && this.pt["money"]["return"][this.type_of_page[0]])
        let t_m = {}; let mi = false; let mmp = false
        if (this.return_type != false) {

            mi  = this.pt["money"]["pay"][this.return_type.type[0]][0]
            mmp = this.pt["money"]["return"][this.return_type.type[0]][0]

        } else {

            if (if_money) {

                mi  = this.pt["money"]["pay"][this.type_of_page[0]][0]
                mmp = this.pt["money"]["return"][this.type_of_page[0]][0]
        
            } else {

                mi  = this.pt["money"]["pay"]["buyer"][0]
                mmp = this.pt["money"]["return"]["buyer"][0]
                
            }
    
        }

        t_m[mmp[0]] = ['-1', '-1']
        t_m[mmp[1]] = ['-1', '-1']

        
        this.money_object = ((temp.length == 1) & (temp[0] == -1)) ?  t_m: false

        // обычная оплата 
        if (temp[0] === 1 & !this.money_object) {
            this.money_object = {}
            range(0, 2).forEach(i => {
                this.vp[mi[i]] = cash_nocash_sbp[0][i]; 
                this.money_object[mi[i]] = cnc[0][i]}
            );
        // оплата заказа
        } else if (temp[1] === 1) {
            this.money_object = {}
            range(0, 1).forEach(i => {
                this.vp[mi[i]]    = cash_nocash[0][i]; 
                this.money_object[mi[i]]  = cnc[0][i];
            });
        // возврат заказа
        } else if (this.return_type != false & (temp[2] === 1)) {
            if (this.return_type.type[0] != false) {
                this.money_object = {}
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
