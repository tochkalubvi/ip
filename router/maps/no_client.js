// КЛАСС НЕКЛИЕНТА ОДНО ИЗ САМЫХ НЕОБЫЧНЫХ НОВОВВЕДЕНИЙ.
// В ЭТОМ КЛАССЕ ИСПОЛЬЗУЕТСЯ МИНИМИЗИРОВАННЫЙ 
// БАЗОВЫЙ ШАБЛОН (ПУСТОЙ ИМЯ И ДАТА С СМЕНОЙ)
// И ИНФОРМАЦИЯ О ВРЕМЕНИ И КОММЕНТАРИЙ К НЕКЛИЕНТУ УТОЧНЯЕТСЯ
// У САМОГО ПОЛЬЗОВАТЕЛЯ
class no_client {

    // ПОДГОТОВКА ПЕРЕМЕНЫХ
    constructor(args) {
        this.args = args
        this.cfg = args["config"]
        this.table = args["table"]
        this.shop = this.table[0]["shop"]
        this.day = this.cfg["points"][this.shop]
    }

    // ПОДКЛЮЧЕНИЕ К КНОПКЕ ВОЗМОЖНОСТИ ДЕЛАТЬ НЕКЛИЕНТА
    // ПРОИСХОДИТ ЗДЕСЬ ПОТОМУ ЧТО НА МОМЕНТ СОЗДАНИЯ ИНТЕРФЕЙСА
    // МЫ НЕ ОБЛАДАЕМ ИЗНАЧАЛЬНО ДОЛЖНОЙ ИНФОРМАЦИЕЙ ДЛЯ СОЗДАНИЯ
    // ШАБЛОНА НЕКЛИЕНТА
    async connect(button) {
        button.addEventListener("click", async () => {
            await this.fu({
                "config":   this.args["config"], 
                "table":    this.args["table"], 
                "day":      this.args["config"]["points"][this.args["table"][0]["shop"]]
            })
        })
    }

    // ФУНКЦИЯ ФОРМАТИРОВАНИЯ В ИТОГОВЫЙ ВАРИАНТ ШАБЛОНА ДЛЯ ОТПРАВКИ  УВ
    format_uv(table) { return table.map((e) => ((e == -1) ? "" : e)).join("\t") }

    // НЕКАЯ ФУНКЦИЯ ФУ
    async fu(args) {

        // ПОДГОТОВЛЕННЫ ПЕРЕМЕННЫЕ
        let cfg     = args["config"]
        let table   = args["table"]
        let day     = args["day"]

        // УТОЧНЯЕТСЯ ПРОБЛЕМА
        let problem = prompt("Что случилось?");

        // ПРОБЛЕМА УХОДИТ В ЦИКЛ И В ИТОГЕ  ЦИКЛА КОПИРУЕТСЯ
        // В БУФЕР ОБМЕНА
        if (problem) {

            problem = problem.replace(/[\r\n\t]+/g, " ").replace("  ", " ")

            let vp = Array(cfg["main"]["size"]).fill(-1)
            let def = cfg["default"]
            let temp = "default"
            let tm = await this.get_now()

            vp[26] = problem

            for (let i=0; i<temp.length; i++) {if (temp[i] == false) {temp[i] = Array(def[2][i]).fill(-1)}}
            if (temp == "default")  {temp = Array(def[2][0]).fill(true)}  
            if (temp[0] & !day & tm[0]) {vp[def[1]["shift"]]="д"} else {vp[def[1]["shift"]]="н"}
            if (temp[0] & day) {vp[def[1]["shift"]]="д"}

            if (def[0]["date"]) {vp[def[1]["date"]] = tm[1]} // дата   
            if (def[0]["time"]) {vp[def[1]["time"]] = tm[2]} // время 
            vp[4] = 0
            
            let seller = table[0]["seller"].trim().split(" ").filter((e) => e != "-.").join(" ")
            let seller_hash = btoa(unescape(encodeURIComponent(seller)))

            if (Object.keys((cfg["enames"])).includes(seller_hash)) seller = decodeURIComponent(escape(atob(cfg["enames"][seller_hash])))
            if (def[0]["name"]) {vp[def[1]["name"]] = seller} // имя продавца

            navigator.clipboard.writeText(this.format_uv(vp))
                .then(() => {alert(`Успешно скопировано! (Не клиент)`)})
                .catch(err => {
                    console.log("Ошибка", err)
                    navigator.clipboard.writeText(this.format_uv(vp))
                        .then(() => {alert(`Успешно скопировано! (Не клиент)`)})
                        .catch(err => {
                            console.log("Ошибка", err)
                        }); 
                }); 
        } 
    }

    // ФУНКЦИЯ ПОЛУЧЕНИЯ ВРЕМЕНИ НА МОМЕНТ НАПИСАНИЯ НЕКЛИЕНТА
    async get_now() {

        // ИЗ ВНЕ ЗНАКОМАЯ НАМ ФУНКЦИЯ ДЛЯ ПРОВЕРКИ НА ""
        function two(number) {
            let n = number.toString().split("")
            if (n.length == 1) {return "0"+n[0]} else {return number.toString()}
        }

        // СОЗДАНИЕ ОБЪЕКТА
        let now = new Date();

        // ФОРМАТИРОВАНИЕ
        let time_obj = [
            `${two(now.getDate())}.${two(now.getMonth()+1)}.${now.getFullYear()}`, 
            `${now.getHours()}:${two(now.getMinutes())}:${two(now.getSeconds())}`
        ]

        // ПИХАЕМ В РАНЕЕ СОЗДАННЫЙ КЛАСС VPTIME
        let datetime = new VpTime()
        datetime = await datetime.run(time_obj)

        return datetime
    }
}

