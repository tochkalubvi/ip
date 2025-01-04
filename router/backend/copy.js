class CopyConnect {
    constructor() {
        this.location = window.location.href
    }
    async run(args) {
        this.traffic  = args["traffic"]
        this.comment  = args["comment"]
        this.reasons  = args["reasons"]
        this.all_list = args["templates"]["all_list"]
        this.html     = args["html"]
        this.all_tables_sorted = args["tables"]
        this.interface         = args["interface"]
        this.analis            = args["analis"]
        this.pt               = this.analis.pt
        this.money = this.analis.money_object
        this.return_obj = this.analis.copy_massive
        this.temp = args["templates"]
        this.cat = this.temp["icons"]
        this.buttons       = this.interface
        this.copyButton    = this.buttons[0]
        this.checksButtons = this.buttons[1]
        this.cat_button    = this.buttons[2]
        this.deny = args["deny"]
        this.key_buffer     = []
        this.hot_keys()
        this.type = this.analis.type_of_page[0]
        this.vp   = this.analis.vp
        let bill_url = this.analis.type_of_page_object.vars["return_link"]
        this.connect_click()
        let need = this.temp["need"]
        this.need_traffic =  (!need["traffic"].includes(this.type)  &  this.deny.includes(this.traffic)) 
        this.need_comment =  (need["comment"].includes(this.type)   &  this.deny.includes(this.comment))
        this.need_reasons =  (need["reasons"].includes(this.type)   &  this.deny.includes(this.reasons)) 
        this.need_returns = false
        if (this.return_obj[0] != false) {
            let vars = this.return_obj[0].vars
            let traffic = vars["traffic"]
            let comment = vars["comment"]
            let reasons = vars["reasons"]
            let type = this.return_obj[0].type[0]
            let need_traffic =  (!need["traffic"].includes(type)  &  this.deny.includes(traffic)) 
            let need_comment =  (need["comment"].includes(type)   &  this.deny.includes(comment))
            let need_reasons =  (need["reasons"].includes(type)   &  this.deny.includes(reasons)) 
            this.need_returns = (need_reasons || need_comment || need_traffic)
            if (this.need_returns) {
                let result = confirm("Исходный чек не корректен!\nПерейти к проблемному чеку?");
                if (result) {window.location.replace(bill_url)} 
            }
        }
        this.not_allow = (this.need_reasons || this.need_comment || this.need_traffic || this.need_returns)
        if (this.not_allow) {this.cat_button.innerHTML = this.cat[1]} else {
            this.cat_button.innerHTML = this.cat[0][0]
            this.cat_button.addEventListener("mouseover", () => {
                this.cat_button.innerHTML       =  this.cat[0][1]; 
                this.cat_button.style.fontSize  = "1cqh"; 
            })
            this.cat_button.addEventListener("mouseout", () => {
                this.cat_button.innerHTML       =  this.cat[0][0]; 
                this.cat_button.style.fontSize  = "2cqh";
            })
        } this.checks(false);
    }
    format_uv(table) { return table.map((e) => ((e == -1) ? "" : e)).join("\t") }
    checked(btn) {return btn.classList.contains("checked")}
    checks(no_start = true) {
        // console.log(this.location, window.location.href)
        if (this.location != window.location.href) {
            reinstallClass()
        }
    let template = {
            "returns": ["У вас проблемный чек!", [17], this.need_returns, false],
            "traffic": ["Введите трафик!", [19], this.need_traffic, false],
            "orderNumber": ["В комментарии нет номера заказа!", [21], this.need_orderNu, false],
            "comment": [{return: "Введите комментарий, опишите причину возврата чека!", 
                         market: "Введите комментарий с номером заказа!", 
                         no_item: "Опишите непокупку (обстоятельства, причина)"
            }, [21], this.need_comment, true],
            "reasons": ["Введите причину не покупки!", [20], this.need_reasons, false]
        }
        for (let i in template) {
            let msg = template[i][0]
            let num = template[i][1]
            let che = template[i][2]
            let tra = template[i][3]
            if (che) {
                if (tra) { msg = msg[this.type] }
                if (no_start) alert(msg); num = num.map((n) => {return this.html.querySelector(`.detail-view.table tr:nth-child(${n})`)});
                num.map((x) => {[x.querySelector("th"), x.querySelector("td")].map((e) => {e.style.background="#C44536"; e.style.color="white"})})
            }
        } 
        if (!this.not_allow) {
            if (this.checked(this.checksButtons[1]) & this.type == "buyer") { this.vp[this.pt["dc"]] = 1
                if (this.checked(this.checksButtons[2]) & this.type == "buyer") { this.vp[this.pt["dc"]] = 0
                } else { this.vp[this.pt["dc"]] = 1 }
            } else {this.vp[this.pt["dc"]] = -1}
            if (this.analis.refuse_count) {
                if (this.checked(this.checksButtons[2]) & this.type == "buyer") {
                    if (!!((this.vp[this.pt["enter"]] == 1) & (this.vp[this.all_list[this.traffic]] == 1))) {
                        this.vp[this.all_list[this.traffic]] = 0; this.vp[this.pt["enter"]] = 0;
                        if (this.vp[this.pt["dc"]] != -1) {this.vp[this.pt["dc"]] = 0}
                        if ((this.vp[this.pt["buys"]] != -1) & (this.vp[this.pt["buys"]] == 1)) {this.vp[this.pt["buys"]] = 0}
                    };
                } else if (!this.checked(this.checksButtons[2]) & this.type == "buyer") {
                    if (!!((this.vp[this.pt["enter"]] == 0) & (this.vp[this.all_list[this.traffic]] == 0))) {
                        this.vp[this.all_list[this.traffic]] = 1; this.vp[this.pt["enter"]] = 1;
                        if (this.vp[this.pt["dc"]] != -1) {this.vp[this.pt["dc"]] = 1}
                        if (this.vp[this.pt["buys"]] != -1 & (this.vp[this.pt["buys"]] == 0)) {this.vp[this.pt["buys"]] = 1}
                    };
                }
            }
            if (Object.keys(this.money).length == 3) {
                let num_object = {}
                num_object[this.pt["money"]["pay"][this.type][0][1]] = false
                num_object[this.pt["money"]["pay"][this.type][0][2]] = true
                let num = Object.keys(num_object)
                
                num.map(e => {
                    
                    if (this.money[e][0] == "-1" & this.checked(this.checksButtons[0]) == num_object[e]) {
                        let another = num[(e == num[0]) ? 1:0]
                        this.money[e] = this.money[another]
                        this.money[another] = ["-1", "-1"]
                    }
                })
            }
            let check_cut = this.checked(this.checksButtons[3])
            let check_cut_number    = (check_cut == true) ? 1:0
            
            if (this.return_obj[0] != false) {
                if      (this.return_obj[0].type[0] == "mobile") {for (let i in this.money) {let it = this.money[i][check_cut_number]; this.vp[i] = (it == "-1") ? "":"-" + it}} 
                else if (this.return_obj[0].type[0] == "buyer") {for (let i in this.money) {this.vp[i] = this.money[i][check_cut_number]}}
                else if (this.return_obj[0].type[0] == "market") {for (let i in this.money) {this.vp[i] = "-1"}}
            } else { for (let i in this.money) {this.vp[i] = this.money[i][check_cut_number]} }
        } else {return [false, this.vp]} return [true, this.vp];
    } 
    key(k) {return(this.key_buffer.includes(k))}
    clipText(msg, hot=false) {
        
        if (this.checks(true)[0] == true) {
            navigator.clipboard.writeText(this.format_uv(msg))
                .then(() => {console.log(`Успешно скопировано в буфер обмена! (Alt+S)`)})
                .catch(err => {console.log("Ошибка", err)}); 
            if (hot) this.key_buffer.pop("AltLeft")
        }
    }
    hot_keys() {
        document.onkeydown = (e) => {
            if (!this.key_buffer.includes(e.code)) {
                this.key_buffer.push(e.code)
            }
        }
        document.onkeyup = (e) => {
            if (this.key_buffer.includes(e.code)) {
                if (this.key("AltLeft") && this.key("KeyS")) { this.clipText(this.vp, true)}
                let template = {"A": 0, "Q": 1, "W": 2}
                for (let i in template) {
                    if (this.key("AltLeft") && this.key(`Key${i}`)) {
                        this.interface.ToggleCheck(this.checksButtons[template[i]])
                        this.key_buffer.pop("AltLeft")
                    }
                }
                this.key_buffer.pop(e.code)
            }
        }
    } 
    connect_click() {
        this.copyButton.addEventListener("click", (e) => {
                this.copyButton.style.background = "white"
                this.clipText(this.vp, false)
    })}
}    
