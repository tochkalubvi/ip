console.groupCollapsed('VPutillityLog') 
// ФАЙЛ КОНФИГУРАЦИИ ПРИЛОЖЕНИЯ
const configure = {"main":{"size":42},"passive_template":{"no_client":4,"six":27,"order":18,"enter":3,"nc":4,"comments":29,"articles":32,"buys":30,"items_count":31,"dc":25,"order_number":36,"money":{"pay":{"open":false,"empty":false,"no_item":false,"client_order":[[33,34,35],1],"buyer":[[33,34,35],1],"mobile":[[38,39],1],"market":false},"return":{"open":false,"empty":false,"no_item":false,"client_order":[[33,34,35],1],"buyer":[[40,41],1],"mobile":[[40,41],-1],"market":false}}},"default":[{"shift":true,"date":true,"time":true,"name":true},{"shift":0,"date":1,"time":2,"name":37},[4,1,5,3]],"stop":["0","26702","47586","47586","26795","47650","48263","47660","48568","48568","48457","48567","48263","48261","48491","48495","26279","26280","26795","47177","48168","48327","48570","995","996","997","26713","26284","26348","26694","26702","26711","26743","26745"],"selectors":{"tables":{"main":"table#detail-view","mone":"table#price-detail-view","sale":"#yw2","item":"#receipt-items table.items.table tbody tr","coun":"div#receipt-items div.summary","money":[34,33,35]}},"enames":{"0KbQsNC+INCnLg==":"0KbQsNC+INCn0LbRjdC90Ywt0KXQsNC+"},"points":{"Автозаводская":false,"Белорусская":false,"Боровское":false,"Бульвар Дмитрия Донского":false,"Тульская":true,"Химки Мельникова":false},"details":{"shop":[1,"a",true],"seller":[2,"a",true],"datetime":[3,"td",true],"traffic":[19,"td",true],"reason":[20,"td",true],"dc":[15,"td *",true],"buyer":[16,"td *",true],"return":[17,"",false],"comment":[21,"td",true]},"interface":{"buttons":[],"boxes":[],"templates":{}},"type_settings":{"return":[[["default"],[0,0,-1,-1],[0],[0,1,1,1,1],[0,0,1]],[3,[0,"return","cssDisplayNone"]]],"no_item":[[["default"],[1,1,-1,-1],[-1],[0,1,-1,-1,1],[false]],[2,"Нетовар"]],"client_order":[[["default"],[1,1,1,-1],[-1],[1,1,1,1,1],[1,-1,-1]],[2,"Клиентский заказ"]],"open":[[["default"],[false],[false],[false],[false]],[2,"открытие смены"]],"empty":[["default"],[false],[0],[false],[false]],"buyer":[[["default"],[1,1,1,-1],[-1],[1,1,1,1,1],[1,-1,-1]],[1,false],{"":-1,"Не задан":-1,"Сайт":5,"Вывеска-пеш":6,"Вывески-очень":6,"Вывеска-авто":7,"Постоянный":8,"Соседи":10,"СМИ":11,"Партнеры":9,"Яндекс":13,"Гугл":12,"2ГИЗ":14,"По рекомендации":15,"Прочее":16}],"market":[[["default"],[0,-1,-1,-1],[1],[0,-1,1,-1,1],[false]],[1,false],{"Яндекс Маркет":21,"Яндекс Еда (Деливери)":23,"ОЗОН":22,"Сбер":24}],"mobile":[[["default"],[0,0,-1,-1],[1],[0,-1,1,1,1],[-1,1,-1]],[1,false],{"Приложение":19,"Сайт Страсть":19}],"takeup":[[["default"],[0,0,-1,-1],[1],[0,1,1,1,1],[-1,1,-1]],[1,false],{"Самовывоз":20}]},"order":["market","shop","takeup"],"no_buyer":["empty","open","client_order","no_item","return"],"enter":["","Не задан","Сайт","Вывеска-пеш","Вывески-очень","Вывеска-авто","Постоянный","Соседи","СМИ","Партнеры","Яндекс","Гугл","2ГИЗ","По рекомендации","Прочее","Самовывоз"]}
// УСТАРЕВШАЯ ФУНКЦИЯ ЗАТЫЧКА, РАНЕЕ ВЫПОЛНЯЛА ФУНКЦИЮ ПОМОЩИ С ОШИБКАМИ
// СЕЙЧАС ДЛЯ ЭТОГО РЕКОМЕЕНДУЕТСЯ ИСПОЛЬЗОВАТЬ ТОЛЬКО ГРУППУ ПРИЛОЖЕНИЯ
// ВО ПЕРВЫХ КНОПКА ЗАНИМАЛА МЕСТО НА ЭКРАНЕ КАК НИ КРУТИ
// ВО ВТОРЫХ КАК МЫ МОЖЕМ ЗАМЕТИТЬ В КОДЕ РАНЬШЕ ИСПОЛЬЗОВАЛСЯ ТОКЕН
// ТАК КАК ЭТО ПРИЛОЖЕНИЕ БЫЛО МЕЖДУ СВОИМИ, ИСПОЛЬЗОВАНИЕ ТОКЕНА ИМЕЛО МИНИМУМ РИСКОВ
// СЕЙЧАС ТОКЕН ОТКЛЮЧЕН, ТАК КАК ПОЛЬЗОВАТЕЛЕЙ СТАЛО БОЛЬШЕ И ФУНКЦИЯ ОСТАЛАСЬ
// ПРОСТО ПЕРЕЖИТКОМ ПРОШЛОЙ ВЕРСИИ
function sendMessage(message) {
    const xhr = new XMLHttpRequest();
    const url = "https://api.telegram.org/botXXXXXXXXX/sendMessage"; // замените на ваш URL
    const chatId = "123456789"; // замените на ваш chat_id
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    const data = JSON.stringify({
        chat_id: chatId,
        text: message,
        silent: true
    });
    xhr.send(data);
}; async function get_page(url) {return fetch(url).then(data => {return data.text()}).catch(error => console.error('Error fetching data:', error));}
console.debug(configure)
// КЛАСС ИНТЕРФЕЙСА, САМЫЙ ЛАЙТОВЫЙ КЛАСС
// ПРОСТОР ДЛЯ ФАНТИАЗИИ
class Interface {
    async run(html) {
        // СОДЕРЖИМОЕ СТРАНИЦЫ ДЛЯ РЕДАКТИРОВАНИЯ
        this.html = html
        // ЦВЕТА ПРИЛОЖЕНИЯ
        const text_color = "#616161"
        const background_color = "white"
        const border_color = "#b3b1b1"
        const border_second_color = "#0088cc"
        // СТИЛИ ПРИЛОЖЕНИЯ
        const styles = {
            appwrapper: {
                height: "8vh",
                width: "auto",
                right: "0",
                bottom: "3vh",
                position: "fixed",
                zIndex: "100",
                display: "flex",
                gridTemplateColumns: "repeat(8, 20vh)"
              },
            spans: {
              position: "relative",
              height: "100%",
              width: "7vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: text_color,
              background: background_color,
              border: "solid 1px" + border_color,
              paddingInline: "1vh",
              fontSize: "1.5cqh",
              lineHeight: "2cqh",
              fontWeight: "100",
              fontFamily: "Verdana, Roboto, 'Open Sans'",
              cursor: "pointer",
              userSelect: "none",
              textAlign: "center"
            }
          }
          // СОЗДАНИЕ СКЕЛЕТА ПРИЛОЖЕНИЯ
          let wrapper = document.createElement("div")
          wrapper.classList.add("wrapper")
          Object.assign(wrapper.style, styles["appwrapper"])
          // НАСТРОЙКИ КНОПОК ПРИЛОЖЕНИЯ
          const bst = {
            "app_icon": [`ฅ^•⩊•^ฅ`, {
              fontWeight: "100",
              fontSize: "13px",
              transition: "transform 0.1s ease-in-out, color 0.2s ease-in-out"
            }],
            "app_copy_button": ["Копировать</br>Alt+S",  {}],
            "app_sbp": ["Сбп</br>Alt+A", {}],
            "app_dop": ["Допродажа</br>Alt+W", {}],
            "app_dc": ["Дк</br>Alt+Q", {}],
            "app_no_client": ["Не клиент", {}],
            "app_cut": ["Убрать копейки", {}],
            "app_telegram": ["Новости", {}]
          } // "app_error": ["Отчет об ошибке", {}]
          let buttons_list = {}
          // ПООЧЕРЕДНАЯ ПОДГРУЗКА КНОПОК
          for (let btn in bst) {
            let cls = btn
            let inner = bst[btn][0]
            let style = bst[btn][1]
            let elem = document.createElement("span")
            elem.classList.add(cls)
            elem.innerHTML += inner
            Object.assign(elem.style, Object.assign({}, styles["spans"], style))
            buttons_list[cls] = elem    
          }
          // СПИСКИ ПРИЛОЖЕНИЯ С РАЗНЫМ ФУНКЦИОНАЛОМ
          let mass = [buttons_list["app_dc"], buttons_list["app_sbp"], buttons_list["app_dop"], buttons_list["app_cut"]]
          let all = [
             buttons_list["app_icon"],  buttons_list["app_copy_button"], buttons_list["app_dop"], 
             buttons_list["app_sbp"], buttons_list["app_dc"], buttons_list["app_cut"], buttons_list["app_no_client"], buttons_list["app_telegram"]
          ]  
          let disp_el = [
            buttons_list["app_copy_button"], buttons_list["app_dop"], 
            buttons_list["app_sbp"], buttons_list["app_dc"], buttons_list["app_cut"], buttons_list["app_no_client"],  buttons_list["app_telegram"]
         ]  
          // ДОБАВЛЕНИЯ ФУНКЦИОНАЛА КНОПКАМ
          buttons_list["app_icon"].classList.add("open")
          function toggle_elements(is) {
            if (is) {disp_el.forEach((el) => {el.style.display = "flex"})} 
            else {disp_el.forEach((el) => {el.style.display = "none"})}
          }
          buttons_list["app_icon"].addEventListener("click", () => {
            buttons_list["app_icon"].classList.toggle("open")
            toggle_elements(buttons_list["app_icon"].classList.contains("open"))
          })
          all[0].style.borderTopLeftRadius    = "20px"
          all[0].style.borderBottomLeftRadius = "20px"
          mass.forEach((e) => {e.addEventListener("click", () => {
            this.ToggleCheck(e, [border_color, border_second_color])
            if (!this.check(e)) e.style.borderBottom = "solid 3px " + border_second_color
          })});
          [["mouseover", border_second_color, border_second_color],
           ["mouseout",  border_color,        text_color]].forEach(el => {
            mass.forEach((e) => {e.addEventListener(el[0], () => {
              if (!this.check(e)) e.style.borderBottom = "solid 3px " + el[1]
              e.style.color = el[2]
            })});
          })
          all.forEach(e => {wrapper.appendChild(e)});
          document.body.appendChild(wrapper)
          this.wrapper = wrapper
          buttons_list["app_telegram"].addEventListener("click", ()=> {
            window.open('https://t.me/+WBv4WSieLmwwMjZi');
          })
          let second_mass = ["app_copy_button", "app_telegram", "app_no_client"].map(i => {return buttons_list[i]})
          let move = [["mouseover", border_second_color], ["mouseout",  text_color]]
          move.forEach(el => {second_mass.forEach((e) => {e.addEventListener(el[0], () => {e.style.color = el[1]})});})
          return [
            buttons_list["app_copy_button"], 
            [buttons_list["app_sbp"], buttons_list["app_dc"], buttons_list["app_dop"], buttons_list["app_cut"]], 
            buttons_list["app_icon"], buttons_list["app_no_client"]
          ]
    }
    remove() {this.wrapper.remove()}
    // ВКЛЮЧЕНИЕ - ОТКЛЮЧЕНИЕ КЛАССА 
    ToggleCheck(el, colors, cls="checked") {
        console.clear()
        el.classList.toggle(cls)
        if (this.check(el)) {el.style.borderBottom = "solid 4px" + colors[1]} 
        else {el.style.borderBottom = "solid 4px" + colors[0]}
    }
    // ПРОВЕРКА КЛАССА
    check(el, cls="checked") {return (el.classList.contains(cls))}
}

// НЕКЛИЕНТ ОДИН ИЗ САМЫХ ПРИЯТНЫХ КЛАССОВ НА ДАННЫЙ МОМЕНТ ПОСЛЕ ИНТЕРФЕЙСА
// ВЫПОЛНЯЕТ ФУНКЦИЮ ПОДКЛЮЧЕНИЯ КНОПКИ К ГЕНЕРАЦИИ НЕКЛИЕНТА
// В ДАННЫЙ ПРОМЕЖУТОК ВРЕМЕНИ КОГДА БЫЛА НАЖАТА КНОПКА
class no_client {

    // ПОДГОТОВКА ПЕРЕМЕННЫХ
    constructor(args) {
        this.args = args
        this.cfg = args["config"]
        this.table = args["table"]
        this.shop = this.table[0]["shop"]
        this.day = this.cfg["points"][this.shop]
    }

    // ФУНКЦИЯ ПОДКЛЮЧЕНИЯ К КНОПКЕ ОСНОВНОЙ ФУНКЦИИ ГЕНЕРАЦИИ НЕКЛИЕНТА
    async connect(button) {
        button.addEventListener("click", async () => {
            await this.fu({
                "config":   this.args["config"], 
                "table":    this.args["table"], 
                "day":      this.args["config"]["points"][this.args["table"][0]["shop"]]
            })
        })
    }

    // ИТОГОВОЕ ФОРМАТИРОВАНИЕ ДЛЯ ПОДКЛЮЧЕННОЙ КНОПКИ И КОПИРОВАНИЯ
    format_uv(table) { return table.map((e) => ((e == -1) ? "" : e)).join("\t") }

    // НЕПОСРЕДСТВЕННО САМА ГЕНЕРАЦИЯ
    async fu(args) {

        // ПЕРЕМЕННЫЕ 
        let cfg     = args["config"]
        let table   = args["table"]
        let day     = args["day"]

        // ВЫЯВЛЯЕМ ПОТРЕБНОСТЬ
        let problem = prompt("Что случилось?");

        // ЕСЛИ ПОТРЕБНОСТЬ ВЫЯВЛЕННА ПРАВИЛЬНО
        if (problem) {

            // ОЧИЩАЕМ ОТ ЛИШНИХ ЗНАКОВ
            problem = problem.replace(/[\r\n\t]+/g, " ").replace("  ", " ")

            // ПОДГОТАВЛИВАЕМ ВП ПО ШАБЛОНУ
            let vp = Array(cfg["main"]["size"]).fill(-1)
            let def = cfg["default"]
            let pt = cfg["passive_template"]
            let temp = "default"

            // ПОЛУЧАЕМ ДАННОЕ ВРЕМЯ 
            let tm = await this.get_now()

            // В КОММЕНТАРИЙ ВСТАВЛЯЕМ НЕКЛИЕНТА
            vp[pt["comments"]] = "Неклиент, " + problem

            // ВСТАВЛЯЕМ БАЗОВЫЕ СТОЛБЦЫ
            for (let i=0; i<temp.length; i++) {if (temp[i] == false) {temp[i] = Array(def[2][i]).fill(-1)}}
            if (temp == "default")  {temp = Array(def[2][0]).fill(true)}  
            if (temp[0] & !day & tm[0]) {vp[def[1]["shift"]]="д"} else {vp[def[1]["shift"]]="н"}
            if (temp[0] & day) {vp[def[1]["shift"]]="д"}     // cмена
            if (def[0]["date"]) {vp[def[1]["date"]] = tm[1]} // дата   
            if (def[0]["time"]) {vp[def[1]["time"]] = tm[2]} // время 

            // НЕКЛИЕНТ 0
            vp[pt["no_client"]] = 0

            // ПОДГОТОВКА ИМЕННИ К ЗАГРУЗКЕ
            let seller = table[0]["seller"].trim().split(" ").filter((e) => e != "-.").join(" ").replace(/\s+/g, ' ').trim()
            let seller_hash = btoa(unescape(encodeURIComponent(seller)))
            if (Object.keys((cfg["enames"])).includes(seller_hash)) seller = decodeURIComponent(escape(atob(cfg["enames"][seller_hash])))
            if (def[0]["name"]) {vp[def[1]["name"]] = seller} // имя продавца

            // КОПИРУЕМ В БУФЕР ОБМЕНА
            navigator.clipboard.writeText(this.format_uv(vp))
                .then(() => {alert(`Успешно скопировано! (Не клиент)`)})
                .catch(err => {
                    console.debug("Ошибка", err)
                    navigator.clipboard.writeText(this.format_uv(vp))
                        .then(() => {alert(`Успешно скопировано! (Не клиент)`);})
                        .catch(err => {
                            console.debug("Ошибка", err)
                        }); 
                }); 
        } 
    }

    // ФУНКЦИЯ ПОЛУЧЕНИЯ ВРЕМЕНИ В ДАННЫЙ МОМЕНТ
    async get_now() {

        // ПРОВЕРКА НА ДВА ЧИСЛА В ДАТЕ
        function two(number) {
            let n = number.toString().split("")
            if (n.length == 1) {return "0"+n[0]} else {return number.toString()}
        }

        // ПОЛУЧЕНИЕ ОБЪЕКТА ВРЕМЕНИ В ДАННЫЙ ПЕРИОД ВРЕМЕНИ
        let now = new Date();

        // ПОДГОТОВКА ОБЪЕКТА ДАТЫ ВРЕМЕНИ К ИСПОЛЬЗОВАНИЮ В ПРОГРАММЕ
        let time_obj = [
            `${two(now.getDate())}.${two(now.getMonth()+1)}.${now.getFullYear()}`, 
            `${now.getHours()}:${two(now.getMinutes())}:${two(now.getSeconds())}`
        ]

        // ЗАГОТОВЛЕННЫЙ ШАБЛОН ВСТАВЛЯЕМ В КЛАСС VpTime В КОТОРОМ ИТОГОВЫЙ РЕЗУЛЬТАТ 
        // ТИП СМЕНЫ И ДАТА 
        let datetime = new VpTime()
        datetime = await datetime.run(time_obj)
        
        // ВЫВОД ИЗ ФУНКЦИИ 
        return datetime
    }
}

// КЛАСС ВРЕМЕНИ
class VpTime {

    // НА ВХОД ПРИХОДИТ ЗАГОТОВЛЕННЫЙ ОБЪЕКТ ВРЕМЕНИ И ПРОМЕЖУТОК СУТОЧНОЙ СМЕНЫ
    async run(time_obj=false, interval=[10, 22]) {

        // ПОДГОТОВКА ПЕРЕМЕННЫХ
        this.datetime_list =   time_obj
        this.start =        interval[0]
        this.end =          interval[1]

        // ФОРМАТИРОВАНИЕ ПОЛУЧЕННОГО ОБЪЕКТА
        this.date = this.datetime_list[0].split(".")
        this.time = this.datetime_list[1].split(":")

        // ОТПРАВЛЯЕМ В ОБЪЕКТ ДАТЫ ДЛЯ ПОДСЧЕТА СМЕНЫ
        this.object = new Date(`${this.date[1]}.${this.date[0]}.${this.date[2]}`)

        // ПЕРЕВОД ВРЕМЕНИ В СЕКУНДЫ
        this.sec_time   =   this.time[0]*60*60 + this.time[1]*60 + this.time[2]*1
        this.sec_end    =   60*60*this.end 
        this.sec_start  =   60*60*this.start
        this.day_time   =   24*60*60

        this.type_of_shift = -1 // проверочное число

        // ПОЛУЧЕНИЕ ТИПА СМЕНЫ
        this.getTypeShift()

        // ОБРАТНОЕ ФОРМАТИРОВАНИЕ
        this.year    =  this.object.getFullYear()
        this.month   =  this.object.getMonth()+1
        this.day     =  this.object.getDate()

        // ОБЪЕКТ ДЛЯ ВСТАВКИ В УВ
        this.time_to_send = this.getTime()
        this.date_to_send = `${this.two(this.day)}.${this.two(this.month)}.${this.year}`
        return [this.type_of_shift, this.date_to_send, this.time_to_send]
    }

    // ПРОВЕРКА НА ДВА ЧИСЛА В ДАТЕ ИЛИ ВРЕМЕНИ
    two(number) {
        let n = number.toString().split("")
        if (n.length == 1) {return "0"+n[0]} else {return number.toString()}
    }

    // ПОДСЧЕТ ПО УСЛОВИЯМ ТИПА СМЕНЫ
    getTypeShift() {
        let first_night_part = !!((this.sec_time > this.sec_end) & (this.sec_time > this.sec_start))
        let second_night_part = !!((this.sec_time < this.sec_end) & (this.sec_time < this.sec_start)) 
            if (first_night_part || second_night_part) {
            // ночная смена вроде не понятно зачем здесь эта функция
            this.type_of_shift = false
            // но мы делаем дату на 1 день меньше так как это все еще твоя смена брат
            if (second_night_part) {this.object.setDate(this.object.getDate() - 1) }
        } else if ((this.sec_time < this.sec_end) & (this.sec_time >= this.sec_start)) {
           this.type_of_shift = true // дневная смена радуйся проценту как и твой писюн)
        }
    }

    // ФОРМАТИРОВАНИЕ ВРЕМЕНИ
    getTime() {
         // проверка на размер числа
        if ((this.time[0].length != 1) & (this.time[0][0] == "0")) {this.time[0] = Number(time[0][1])}
        else if (this.time[0].length == 1) {this.time[0] = Number(this.time[0][0])}
        else {this.time[0] = Number(this.time[0])}
        if (this.time[1][0] == "0") {this.time[1] = Number(this.time[1][1])}
        if (this.time[2][0] == "0") {this.time[2] = Number(this.time[2][1])}
        // итоговое форматирование
        return `${this.two(this.time[0])}:${this.two(this.time[1])}`   
    }
}

// ФУНКЦИЯ ОПРЕДЕЛЯЕТ ТИП ЧЕКА [market, mobile, buyer, no_return, client_order....]
class Type {

    // СБОР ИНФОРМАЦИИ, ПОДГОТОВКА ПЕРЕМЕННЫХ
    constructor(html, config, temp, back) {

        //ПОДГОТОВКА ПЕРЕМЕННЫХ
        this.html       = html
        this.config     = config
        this.temp       = temp
        this.cluv       = {}
        this.back       = back
        this.vars = {traffic: [19, true], reasons: [20, true], comment: [21, true], shop: [1, true], return_link: [17, false]}
        
        // КОСТЫЛЬ ПОЛУЧЕНИЕ АКТУАЛЬНОЙ ИНФОРМАЦИИ СТРАНИЦЫ
        for (let v in this.vars) {
            let temp = this.vars[v]
            this.vars[v] = this.html.querySelector(`#detail-view tr:nth-child(${(temp[1])?`${temp[0]}) td`:`${temp[0]}) td a`}`)
            this.vars[v] = (temp[1]) ? this.vars[v].innerText.trim(): (this.vars[v] == null) ? false: this.vars[v].getAttribute("href")
        }

        // ПОЛУЧЕНИЕ ТИПА
        this.type = this.get_type()
    }

    // ЕСЛИ У ТОВАРА НЕТ АРТИКУЛА И ОН ОДИН ТО ЭТО ЛИБО НЕТОВАР, ЛИБО КЛИЕНТСКИЙ ЛИБО ЛИБО...
    one_check(name) {
        let item_table = this.html.querySelectorAll("#receipt-items .items.table tbody tr")
        let item_table_size = item_table.length
        if (item_table_size == 1) {
            let item_name = item_table[0].querySelector("td:nth-child(2)").innerText
            return (item_name === name)
        } return false
    }

    // ПРОВЕРКА ЧТО ЖЕ ЭТО ЗА ЗВЕРЬ
    check(arg) {
        if (arg["type"] == 1) {return (Object.keys(arg["template"][arg["part"]][2]).includes(this.vars["traffic"]))}
        if (arg["type"] == 2) {return this.one_check(arg["argument"])}
        if (arg["type"] == 3) {return (!arg["return"])}
    } 

    // ИЗ ПОЛУЧЕННОЙ ИНФОРМАЦИИ ПОЛУЧАЕМ РЕЗУЛЬТАТ АНАЛИЗА И УЗНАЕМ ЧТО ЖЕ ЗА ЧЕК
    get_type() {

        // ПРОХОДИМ ПО ШАБЛОНУ И СМОТРИМ НА ЧТО ЭТО ПОХОЖЕ
        Object.keys(this.temp).forEach(element => {
            let cfg = this.temp[element][1]
            let send = {
                "type":       cfg[0], 
                "argument":   cfg[1], 
                "part":       element, 
                "template":   this.temp,
                "return":     this.back
            }   
            this.cluv[element] = this.check(send)
        }); this.cluv["empty"] = false

        // ПОДГОТАВЛИВАЕМ ВРЕМЕННЫЕ ПЕРЕМЕННЫЕ ДЛЯ ЛОКАЛЬНОГО АНАЛИЗА
        let enter = this.config["enter"].includes(this.vars["traffic"])
        let dc = false
        let send = [enter, dc, this.config["points"][this.vars["shop"]]]
        let end_r = (el) => {if (this.cluv[el]) {return [el, send]} else return false}
        let all_temps =     Object.keys(this.temp)
        let no_buyer  =     this.config["no_buyer"]
        let result = false

        // ПОЛУЧЕННЫЙ ШАБЛОН ТАК ЖЕ ПРОГОНЯЕМ
        all_temps.filter(x => !no_buyer.includes(x)).forEach(x => {let s = end_r(x); if (s) {result = s}});
        no_buyer.forEach(x => {let s = end_r(x); if (s) {result = s}});
        if (!result) {result = "empty"}

        // РЕЗУЛЬТАТ ВЫВОДИМ
        return result
    }
}
// КЛАСС TABLES ПРЕДНАЗНАЧЕН ДЛЯ ФОРМИРОВАНИЯ МАССИВА ДАННЫХ ИЗ ТАБЛИЦ
class Tables {
    // ПОДГОТОВКА ПЕРЕМЕННЫХ К ЭКСПЛОУТАЦИИ
    constructor(settings, html) {
        this.cfg   =   settings
        this.sel   =   this.cfg["selectors"]["tables"]
        this.html  =   html
        this.count_of_items_on_one_page = 10 // предметов на странице
        this.count_of_items = 1 // КОЛИЧЕСТВО ПРЕДМЕТОВ (ПО-УМОЛЧАНИЮ)
        this.count_of_pages = 1 // КОЛИЧЕСТВО СТРАНИЦ   (ПО-УМОЛЧАНИЮ)
    }
    // ПОЛУЧЕНИЕ ТАБЛИЦЫ ПО СЕЛЕКТОРУ
    async set_table(name, findall=false) { 
        if (findall) {
            // ПОПЫТКА ПОЛУЧЕНИЯ ВСЕХ СТРАНИЦ С ТОВАРАМИ
            try {
                let count = await this.set_table("coun")
                this.count_of_items = count.innerHTML.trim().split(" ")[3].replace(".", '') 
                this.count_of_pages = Math.ceil(this.count_of_items / this.count_of_items_on_one_page)
            } catch { this.count_of_pages = 1 }
            // ЕСЛИ СТРАНИЦ БОЛЬШЕ 1 СОЗДАЕМ БУФЕР ОБЪЕДЕНЯЕМ ТОВАРЫ В ОДИН ЭЛЕМЕНТ И ПРОВОДИМ ПОИСК ПО СЕЛЕКТОРУ
            // ИНАЧЕ ПРОСТО ПРОВОДИМ ПОИСК ПО СЕЛЕКТОРУ
            if (this.count_of_pages > 1) {
                let buffer = []
                for (let i = this.count_of_pages; i >= 1; i--) {
                    let bill_id = window.location.href.split("/")
                    bill_id = bill_id[bill_id.length - 1]
                    let url = `https://tl.myvirtualpos.ru/console/sales/view/ajax/receipt-items/id/${bill_id}/page/${i}`
                    let page = await get_page(url)
                    let temp = document.createElement("div")
                    temp.innerHTML = page
                    buffer.push(temp.querySelectorAll(this.sel[name]));
                }
                let result = document.createElement("div")
                buffer.forEach((page) => {
                    page.forEach((e)=> {
                        result.appendChild(e)
                    })
                }) 
                return result.querySelectorAll("div > *")
            } else {return this.html.querySelectorAll(this.sel[name])}
        } else {return this.html.querySelector(this.sel[name])}
    }
    // ПОЛУЧЕНИЕ ВСЕХ ТАБЛИЦ ПО СЕЛЕКТОРУ И ИХ СОРТИРОВКА
    async get_all() {
        this.mbase  =  this.set_table("main")
        this.money  =  this.set_table("mone")
        this.sales  =  this.set_table("sale")
        this.items  =  this.set_table("item", true)
        let b  = new  Base(this.mbase, this.cfg)
        let m  = new Money(this.money, this.cfg)
        let it = new Items(this.items, this.cfg)
        return this.ClassVariables([
            await b.run(), 
            await m.run(),  
            await it.run()
        ])
    }
    // ОБРАБОТКА СТРОК В ОБЪЕКТЫ ДЛЯ ДАЛЬНЕЙШЕЙ РАБОТЫ С НИМИ
    ClassVariables(tables) {
        // ПОДМЕНА СТРОКИ КОММЕНТАРИЯ - ОБЪЕКТОМ КОММЕНТАРИЯ
        let comment = new Comment({
            table: tables[0]["comment"], config: this.cfg
        }); tables[0]["comment"] = comment.object
        return tables
    }
}
// БАЗОВЫЙ ШАБЛОН (ИМЕНА, ДАТА И ДРУГОЕ)
class Base {
    // НАСТРОЙКА НАЧАЛЬНЫХ НАСТРОЕК
    constructor(html, settings) {
        this.table = html; this.cfg = settings;
        this.det = this.cfg["details"];
    }
    // ПОЛУЧЕНИЕ КОНКРЕТНОЙ ИНФОРМАЦИИ ИЗ ТАБЛИЦЫ ПО СЕЛЕКТОРУ
    async detail_table(n, to, inner=true) {
        let table = await this.table
        let body = table.querySelector(`tr:nth-child(${n}) ${to}`)
        if (inner) {return body.innerHTML} else {return body.classList.contains("cssDisplayNone")} 
    }
    // СОРТИРОВКА ПОЛУЧЕННОЙ ИНФОРМАЦИИ
    async sorted() {
        let send = {}
        for (let key in this.det) {
            send[key] = await this.detail_table(
                    this.det[key][0], 
                    this.det[key][1], 
                    this.det[key][2]
        )}; return send;
    }
    async run() {
        return await this.sorted()
    }
}
// КЛАСС ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ДЕНЕЖНОЙ ЧАСТИ ЧЕКА
class Money {
    // ИНФОРМАЦИЯ КОТОРАЯ ПОСТУПАЕТ В КЛАСС
    constructor(html, settings) {
        this.table  = html 
        this.cfg    = settings
        this.temp   = {}
        this.run()
    }
    // ПАРСИТ КАЖДЫЙ ТИП ОПЛАТЫ
    async generate() {
        let cash    = await this.gtable(1)
        let no_cash = await this.gtable(2)
        let sbp     = await this.gtable(3)
        this.temp = {cash: cash, no_cash: no_cash, sbp: sbp}
    }
    // ФУНКЦИЯ ПАРСИНГА ТИПА ОПЛАТЫ ИЗ ТАБЛИЦЫ
    async gtable(n) {
        let table = await this.table
        return parseFloat(table.querySelector(`tr:nth-child(${n}) td`)
            .innerHTML.replace(" ", "").replace("руб.", "")).toFixed(2)
    }
    // СРАВНЕНИЕ С ШАБЛОНОМ
    async get() {
        for (let key in this.temp) {
            if (this.temp[key]=="0") {
                this.temp[key]=-1
            }} return this.temp
    }
    // ЗАПУСК
    async run() {
        await this.generate()
        return await this.get()
    }
}
// ИНФОРМАЦИЯ О ТОВАРЕ
class Item {
    constructor() {
        this.is_good =  undefined
        this.name    =  undefined
        this.art     =  undefined
        this.count   =  undefined
    }
}
// КЛАСС НУМЕРОВАНИЯ И НАСТРОЙКИ ТОВАРОВ
class Items {
    // НАЧАЛЬНАЯ НАСТРОЙКА
    constructor(html_list, settings) {
        this.items_list =   html_list
        this.cfg        =    settings
        this.items      =          []
    }
    async run() {
        await this.loop() 
        return this.items 
    }
    // ПРОВЕРКА АРТИКУЛА
    isNumeric(num) {return !isNaN(num)}
    // ЗАЛУПИРОВАННОЕ ПОЛУЧЕНИЕ ПРОДАННЫХ ТОВАРОВ
    async loop(max_comment_size=25) {
        let items_list = await this.items_list
        items_list.forEach((item) => {
            let obj = new Item()
            let all = item.querySelector("td:nth-child(2)").innerHTML 
            let art = all.slice(0, all.indexOf(' '))
            obj.count = item.querySelector("td:nth-child(3)").innerHTML.split(".")[0]
            if (this.isNumeric(art)) {
                obj.name =           all.slice(all.indexOf(' '), all.length)  
                if (obj.name.length > max_comment_size) {obj.name = obj.name.slice(0, max_comment_size)}
                obj.art     =    art
                obj.is_good =   true
                this.items.push(obj)
            } else {
                obj.is_good = false
                obj.name    =   all
                obj.art     =   "0" 
                this.items.push(obj)
            }
        })
    }
}
// КЛАСС КОММЕНТАРИЯ ВСЯ ОБРАБОТКА КОММЕНТАРИЯ РАЗБИЕНИЕ ЕГО НА 
class Comment {
    constructor(base) {
        // ФОРМАТИРОВАНИЕ КОММЕНТАРИЯ
        this.comment_raw = base["table"]
        this.comment_formatted = this.formatComment()
        // ОБРЕЗКА НАСТРОЙКИ
        this.config = base["config"]["type_settings"]
        // ПОДГОТОВКА ШАБЛОНОВ
        this.market_template = this.config["market"][2]
        this.mobile_template = this.config["mobile"][2]
        this.all_templates = Object.assign({}, this.market_template, this.mobile_template)
        this.object = {
            carrier_number: "",
            carrier_type:   "",
            other:          ""
        }
        this.partComment()
    }
    formatComment() {
         // Убираем лишние пробелы, табуляцию и двоеточие
         return this.comment_raw.replace(/[:\t]+|\s{2,}/g, ' ').trim();                 
    }
    partComment() {
        // Разделяем строку на слова
        this.words_massive = this.comment_formatted.split(' ');
        let orderNumber = [];
        let carrierType = [];
        let courierComment = this.comment_formatted; // Изначально вся строка - это комментарий
        // Список возможных служб доставки
        const deliveryServices = Object.keys(this.all_templates).map(service => service.toLowerCase()); // Приводим к нижнему регистру
        // Ищем тип службы доставки и собираем их в массив
        for (const service of deliveryServices) {
            const serviceLower = service.toLowerCase();
            let index = courierComment.toLowerCase().indexOf(serviceLower);
            // Если служба доставки найдена
            while (index !== -1) {
                carrierType.push(service); // Добавляем службу доставки в массив
                // Удаляем службу доставки из комментария
                courierComment = courierComment.slice(0, index) + courierComment.slice(index + service.length);
                // Ищем следующую службу доставки
                index = courierComment.toLowerCase().indexOf(serviceLower);
            }
        }
        // Удаляем лишние пробелы
        courierComment = courierComment.replace(/\s+/g, ' ').trim();
        // Разделяем оставшуюся строку на слова для поиска номера заказа
        this.words_massive = courierComment.split(' ');
        // Итерируем по оставшимся словам и находим номер заказа
        for (const word of this.words_massive) {
            // Проверяем, является ли слово числом и длина больше 6
            if (/^\d+$/.test(word) && word.length > 4) {
                orderNumber.push(word); // Сохраняем номер заказа
                // Удаляем номер заказа из комментария
                courierComment = courierComment.replace(word, '').trim();
            }
        }
        // Удаляем лишние пробелы после удаления номера заказа
        courierComment = courierComment.replace(/\s+/g, ' ').trim();
        if (orderNumber     == []) {orderNumber     = false}
        if (carrierType     == []) {carrierType     = false}
        if (courierComment  == []) {courierComment  = false}
        // ПОЛУЧАЕМ ОБЕКТ КОММЕНТАРИЯ С ПОЛНОЙ ИНФОРМАЦИЕЙ
        this.object = {
            full: this.comment_formatted,
            orderNumber: orderNumber,
            carrierType: carrierType,
            courierComment: courierComment
        }; 
    }
}

// ФУНКЦИЯ РАНЖА ОТ 1 до 9, для уменьшения кода
function range(start, end) {
    var result = []; 
    for (var i = start; i <= end; i++) {result.push(i);}
    return result;
}

// ФУНКЦИЯ АНАЛИЗА - КАКОЕ НАЗВАНИЕ ТАКОЙ И КЛАСС СПЛОШНОЙ АНАЛ
// ЗДЕСЬ СУММИРУЯ ПОЛУЧЕННУЮ ИНФОРМАЦИЮ МЫ РАСТАВЛЯЕМ ВСЕ В СКЕЛЕТ ВП ДЛЯ ДАЛЬНЕЙШЕГО КОПИРОВАНИЯ
class AnalIs {

    // ПОДГОТОВКА ПЕРЕМЕННЫХ
    async run(args) {
        // БОЛЬШЕ ПЕРЕМЕННЫХ - МАЛО ПЕРЕМЕННЫХ
        // ЭТО ВСЕ ЛИШНЕЕ ВЫРЕЗАНО МЕНЬШЕ НЕ ПОЛУЧАЕТСЯ
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

        // ПОЛУЧЕНИЕ ТИПА СТРАНИЦЫ ИЗ РАНЕЕ ПРОСМОТРЕННОГО КЛАССА
        Object.keys(this.temp).forEach(element => {this.ts["t" + element.replace("_", "")] = this.temp[element]});
        this.type_of_page_object = new Type(this.html, this.cfg, this.temp, this.all_tables_sorted[0]["return"])
        this.type_of_page = this.type_of_page_object.type
        this.return_type = false

        // ЕСЛИ ЧЕК ВОЗВРАТА 
        if (this.type_of_page[0] == "return") {
            // ПОЛУЧАЕМ ССЫЛКУ ВОЗВРАТА КАЧАЕМ ТУ СТРАНИЦУ С КОТОРОЙ 
            // ПРОИЗВОДИЛСЯ ВОЗВРАТ И ПРОВЕРЯЕМ ЕЕ ТОЖЕ НА КОРРЕКТНОСТЬ
            let page = await this.get_return_bill()
            this.return_type = new Type(page, this.cfg, this.temp, true)
            this.vars = this.return_type.vars
        }

        // СОБИРАЕМ ПОЛУЧЕННУЮ ИНФОРМАЦИЮ В ПЕРЕМЕННЫЕ
        this.copy_massive = [this.return_type, this.vars]
        this.current_temp = this.temp[this.type_of_page[0]][0]

        // ЧИТАЕМ РАЗМЕР УВ ПО ШАБЛОНУ И ЗАПОЛНЯЕМ ЕГО ПУСТЫМИ ЯЧЕЙКАМИ
        for (let i = 1; i < this.current_temp.length; i++) {
            let e = this.current_temp[i]
            if (e.length == 1 & e[0] == false) {
                this.current_temp[i] = Array(this.def[2][i]).fill(-1)
            }
        }

        // проверка на надобность в заполнении
        this.uv_turn = Object.keys(this.temps["uv_off"]).includes(this.traffic) 
        this.Scan(this.current_temp)        // главное сканирование
        return [this.type_of_page, this.vp] // вывод информации итоговой
    }

    // ПОЛУЧЕНИЕ ССЫЛКИ ЧЕКА ВОЗВРАТА, ЕСЛИ ЕСТЬ
    async get_return_bill(url) {
        let bill = this.html.querySelector("#detail-view tr:nth-child(17) a")
        let bill_url = bill.getAttribute("href")
        let page = await get_page(bill_url)
        let html = document.createElement("div")
        html.innerHTML = page
        return html
    } 

    // АНАЛИЗ РАЗДЕЛЕН НА БОЛЬШИЕ ПОДГРУППЫ
    // СТАНДАРТНАЯ ГРУППА НАЧАЛЬНЫЕ ПРОВЕРКА 
    // ГДЕ ИМЯ, ДАТА, ВРЕМЯ И СМЕНА
    default_group(temp) {
        let day  = this.type_of_page[1][2]
        for (let i=0; i<temp.length; i++) {if (temp[i] == false) {temp[i] = Array(this.def[2][i]).fill(-1)}}
        if ((temp.length == 1) & (temp[0] == "default"))  {temp = Array(this.def[2][0]).fill(true)}   
        if (temp[0] & !day & this.tm[0]) {this.vp[this.def[1]["shift"]]="д"} 
        else {this.vp[this.def[1]["shift"]]="н"}
        if (temp[0] & day) {this.vp[this.def[1]["shift"]]="д"}
        if (this.def[0]["date"]) {this.vp[this.def[1]["date"]] = this.tm[1]} // дата   
        if (this.def[0]["time"]) {this.vp[this.def[1]["time"]] = this.tm[2]} // время 
        let seller = this.all_tables_sorted[0]["seller"].trim().split(" ").filter((e) => e != "-.").join(" ").replace(/\s+/g, ' ').trim()
        let seller_hash = btoa(unescape(encodeURIComponent(seller)))
        if (Object.keys((this.cfg["enames"])).includes(seller_hash)) seller = decodeURIComponent(escape(atob(this.cfg["enames"][seller_hash])))
        if (this.def[0]["name"]) {this.vp[this.def[1]["name"]] = seller} // имя продавца
    }

    // ПРОВЕРКА ДОПОВ 636 ДК
    standart(temp, otemp) {
        if (!this.uv_turn) {this.vp[this.all_list[this.traffic]]                             =  temp[1]} // ув (5 - 16)
        if (Object.keys(this.all_tables_sorted[2]).includes("636")) {this.vp[this.pt["six"]] =  temp[2]} // 636 проверка наличия
        if (this.uv_turn) {this.vp[this.pt["order"]]                                         = otemp[0]} // учет заказов
        if (this.uv_turn) {this.vp[this.all_list[this.traffic]]                              = otemp[0]} // заказы 22-23 самовывоз приложение
    }

    // ПРОВЕРКА ВОХОДНОЙ ГРУППЫ
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

    // ВСЕ МЫ ЛЮБИМ ДЕНЬГИ
    // ЗДЕСЬ МЫ ИХ СЧИТАЕМ
    money_group(temp) {    
        // ПРОВЕРКА НА ТОЧКУ ИЛИ ЗАПЯТУЮ И НУЛИ
        function cd(n) {
            let num = n.split(".")
            if (num[1] == "00") {return num[0]} 
            else { if (num[1][1] == "0") {num[1] = num[1][0]}; return num.join("."); }
        }

        // ПОЛУЧЕННУЮ ИНФОРМАЦИЮ СИСТЕМАТИЗИРУЕМ
        let m = [Number(cd((this.all_tables_sorted[1]["cash"]))), 
                 Number(cd((this.all_tables_sorted[1]["no_cash"]))), 
                 Number(cd((this.all_tables_sorted[1]["sbp"])))]
        
        // НАЛ БЕЗНАЛ СБП И ОТДЕЛЬНО НАЛ БЕЗНАЛ
        let cnc = [[m[0], m[1], m[2]], [m[0], m[1] + m[2]]]

        // ПРОВЕРКА НА НАЛИЧИЕ ТОЙ ИЛИ ИНОЙ ГРУППЫ И ПОДГОТОВКА К УВ
        cnc.forEach(e => {e.forEach(elem => {
            if (elem == 0) {elem = -1}
        })});

        // СМОТРИМ ЧТОБЫ ЭТО БЫЛО ЧИСЛО
        function isInteger(num) {
            return (num ^ 0) === num;
        }

        // ПОДГОТОВКА ДВУХ ТИПОВ С ТОЧКОЙ И БЕЗ ЧТОБЫ МОЖНО БЫЛО МЕЖДУ НИМИ ПЕРЕКЛЮЧАТЬСЯ
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

        // ИТОГОВЫЕ ПЕРЕМЕННЫЕ ДЛЯ АНАЛИЗА
        let cash_nocash = cnc[1]
        let cash_nocash_sbp = cnc[0]
        let if_money = (this.pt["money"]["pay"][this.type_of_page[0]] && this.pt["money"]["return"][this.type_of_page[0]])

        // УФФФ КОСТЫЛИ ПЕРЕМЕННЫЕ ВОЗВРАТА И ПОКУПКИ 
        // НО БЛАГОДАРЯ ИМ МЫ МОЖЕМ ШАБЛОНИЗИРОВАТЬ ЭТО И ПРОСТО ПЕРЕКЛЮЧАТЬСЯ МЕЖДУ КУСТАМИ
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
        // ЕЩЕ ОДНА ПОДГОТОВКА ПЕРЕМЕННОЙ
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
                // возврат мобилки
                if (this.return_type.type[0] == "mobile") {
                    range(0, 1).forEach(i => {
                        this.vp[mi[i]]    = cash_nocash[0][i]; 
                        this.money_object[mi[i]]  = cnc[0][i];
                    });
                // возврат покупки
                } else if (this.return_type.type[0] == "buyer") {
                    range(0, 1).forEach(i => {
                        this.vp[mmp[i]]    = cash_nocash[0][i]; 
                        this.money_object[mmp[i]]  = cnc[0][i];
                    });
                // возрат всего остального
                } else {
                    range(0, 1).forEach(i => {
                        this.vp[mmp[i]]    = cash_nocash[0][i]; 
                        this.money_object[mmp[i]]  = cnc[0][i];
                    });
                }      
            }
        } 
    }

    // ИТОГОВОЕ СКАНИРОВАНИЕ ЧЕКА 
    Scan(temp) {
        this.default_group(temp[0])
        this.enter_group(temp[1], temp[2])
        this.items_group(temp[3])
        this.money_group(temp[4])
        return this.vp
    } 
}

// КЛАСС ПОДКЛЮЧЕНИЯ 
class CopyConnect {

    // ПОЛУЧЕНИЕ НАЧАЛЬНОЙ ССЫЛКИ ДЛЯ ОТСЛЕЖИВАНИЯ ПЕРЕХОДОВ МЕЖДУ ССЫЛКАМИ
    constructor() {
        this.location = window.location.href
    }
    // ПЕРЕМЕННЫЕ ОПЯТЬ ОНИ
    async run(args) {

        // НУ Я ДУМАЮ КОЛИЧЕСТВО УЖЕ НЕ СМУЩАЕТ

        // ВСЯ ИНФОРМАЦИЯ СТРАНИЦЫ ДЛЯ ПРОВЕРКИ НА КОРРЕКТНОСТЬ
        this.traffic  = args["traffic"]
        this.comment  = args["comment"]
        this.reasons  = args["reasons"]
        
        // ШАБЛОНЫ
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

        // КНОПКИ ИЗ ИНТЕРФЕЙСА
        this.buttons       = this.interface
        this.copyButton    = this.buttons[0]
        this.checksButtons = this.buttons[1]
        this.cat_button    = this.buttons[2]

        // ЕЩЕ ШАБЛОНЫ
        this.deny = args["deny"]
        this.key_buffer     = []

        // ГОРЯЧИЕ КЛАВИШИ ПОДКЛЮЧУ ПОЗЖЕ 
        // РАБОТАЛИ В САМОЙ ПЕРВОЙ ВЕРСИИ РАНЬШЕ
        this.hot_keys()

        //ЕЩЕ ШАБЛОНЫ
        this.type = this.analis.type_of_page[0]
        this.vp   = this.analis.vp
        let bill_url = this.analis.type_of_page_object.vars["return_link"]

        // ПОДКЛЮЧЕНИЕ КОПИРОВАНИЯ
        this.connect_click()

        // ПРОВЕРКА НА КОРРЕКТНОСТЬ ЧЕКА
        let need = this.temp["need"]
        this.need_traffic =  (!need["traffic"].includes(this.type)  &  this.deny.includes(this.traffic)) 
        this.need_comment =  (need["comment"].includes(this.type)   &  this.deny.includes(this.comment))
        this.need_orderNu =  (need["orderNumber"].includes(this.type) & this.comment.orderNumber.length < 1)
        this.need_reasons =  (need["reasons"].includes(this.type)   &  this.deny.includes(this.reasons)) 
        this.need_returns = false

        //ПРОВЕРКА НА КОРРЕКТНОСТЬ ЧЕКА ВОЗВРАТА
        if (this.return_obj[0] != false) {
            let vars = this.return_obj[0].vars
            let traffic = vars["traffic"]
            let comment = vars["comment"]
            let reasons = vars["reasons"]
            let type = this.return_obj[0].type[0]
            let need_traffic =  (!need["traffic"].includes(type)  &  this.deny.includes(traffic)) 
            let need_comment =  (need["comment"].includes(type)   &  this.deny.includes(comment))
            let need_orderNu =  (need["orderNumber"].includes(type) & comment.orderNumber.length < 1)
            let need_reasons =  (need["reasons"].includes(type)   &  this.deny.includes(reasons)) 
            this.need_returns = (need_reasons || need_comment || need_orderNu || need_traffic)
            if (this.need_returns) {
                let result = confirm("Исходный чек не корректен!\nПерейти к проблемному чеку?");
                if (result) {window.location.replace(bill_url)} 
            }
        }

        // ПОЛУЧЕНИЕ ВЕРДИКТА О СТРАНИЦЕ И ЕЕ КОРРЕКТНОСТИ
        this.not_allow = (this.need_reasons || this.need_comment || this.need_orderNu || this.need_traffic || this.need_returns)
        
        // КОТИК РАДУЕТСЯ ИЛИ ГРУСТИТ В ЗАВИСИМОСТИ ОТ ТОГО ПРАВИЛЬНО ЛИ ЗАПОЛНЕН ВП
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

    // ИТОГОВОЕ ФОРМАТИРОВАНИЕ
    format_uv(table) { return table.map((e) => ((e == -1) ? "" : e)).join("\t") }

    // ПРОВЕРКА НА НАЖАТИЕ КНОПКИ
    checked(btn) {return btn.classList.contains("checked")}

    // ДОП ПРОВЕРКА ПРИ НАЖАТИИ ОСОБЕННО АКТУАЛЬНО КОГДА У НАС НЕ ОБНОВЛЯЕТСЯ СТРАНИЦА
    checks(no_start = true) {

        // ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ НА ТОЙ ЖЕ СТРАНИЦЕ ПЕРЕУСТАНАВЛИВАЕМ КЛАСС
        if (this.location != window.location.href) {reinstallClass()}

        // ШАБЛОНЫ В ЗАВИСИМОСТИ ОТ НЕКОРРЕКТНОСТИ ЧЕКА
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

        // ПРОВЕРКА ЧТО У НАС НЕ СОВПАДАЕТ 
        // И ЗА ЧТО ПОСТУЧАТЬ ПО ШАПКЕ И ЧТО ПОДСВЕТИТЬ КРАСНЫМ
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

        // САМОЕ МУТОРНОЕ ПРОВЕРКА НА НАЖАТОСТЬ КНОПКИ ДОП, КОПЕЙКИ ИЛИ ДК
        // РАБОТАЕТ НЕ ТРОГАЕМ, НА ЭТО ПРОИЗВЕДЕНИЕ ИСКУССВА УШЛО 3 дня
        if (!this.not_allow) {

            // ПРОВЕРКА НА ДК
            if (this.checked(this.checksButtons[1]) & this.type == "buyer") { this.vp[this.pt["dc"]] = 1
                if (this.checked(this.checksButtons[2]) & this.type == "buyer") { this.vp[this.pt["dc"]] = 0
                } else { this.vp[this.pt["dc"]] = 1 }
            } else {this.vp[this.pt["dc"]] = -1}

            // ПРОВЕРКА НА ДОП
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

            // ПРОВЕРКА СБП
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

            // ПРОВЕРКА НА ДОП
            let check_cut = this.checked(this.checksButtons[3])
            let check_cut_number    = (check_cut == true) ? 1:0
            if (this.return_obj[0] != false) {
                if      (this.return_obj[0].type[0] == "mobile") {for (let i in this.money) {let it = this.money[i][check_cut_number]; this.vp[i] = (it == "-1") ? "":"-" + it}} 
                else if (this.return_obj[0].type[0] == "buyer") {for (let i in this.money) {this.vp[i] = this.money[i][check_cut_number]}}
                else if (this.return_obj[0].type[0] == "market") {for (let i in this.money) {this.vp[i] = "-1"}}
            } else { for (let i in this.money) {this.vp[i] = this.money[i][check_cut_number]} }
            // ВОЗВРАЩАЕМ ИТОГ
        } else {return [false, this.vp]} return [true, this.vp];
    } 

    // КЛЮЧИ ЗАЖАТЫХ ОДНОВРЕМЕННО КЛАВИШ
    key(k) {return(this.key_buffer.includes(k))}

    // ВСТАВКА В БУФЕР ОБМЕНА
    clipText(msg, hot=false) {
        if (this.checks(true)[0] == true) {
            navigator.clipboard.writeText(this.format_uv(msg))
                .then(() => {console.debug(`Успешно скопировано в буфер обмена! (Alt+S)`)})
                .catch(err => {console.debug("Ошибка", err)}); 
            if (hot) this.key_buffer.pop("AltLeft")
        }
    }

    // НАСТРОЙКА ГОРЯЧИХ КЛАВИШ
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

    // ПОДКЛЮЧАЕМ
    connect_click() {
        this.copyButton.addEventListener("click", (e) => {
                this.copyButton.style.background = "white"
                this.clipText(this.vp, false)
    })}
}    
// НАЧАЛЬНЫЕ НАСТРОЙКИ КОНФИГА ДЛЯ ПРИЛОЖЕНИЯ
let sets = {
    start_key: 'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvY2hrYWx1YnZpL2lwL3JlZnMvaGVhZHMva2FyYXNldmEv', 
    config: false
}
// ГЛАВНЫЙ КЛАСС ПРИЛОЖЕНИЯ
class App {
    // НАЧАЛЬНЫЕ ЗНАЧЕНИЯ ПРИЛОЖЕНИЯ
    constructor(args) {
        // ПЕРЕМЕННАЯ С НАСТРОЙКАМИ; ПЕРЕМЕННАЯ С ПРЕДВАРИТЕЛЬНЫМ СОДЕРЖИМЫМ СТРАНИЦЫ;  КЛЮЧ ЗАПУСКА;
        this.config = args["config"]; this.html = document.body; this.start_key = args["start_key"];
        this.main();
    }
    // ФУНКЦИЯ ПОЛУЧЕНИЯ КОНФИГА ОПРЕДЕЛЕННОГО ИП 
    async get_file(salt, type=true) {
        // ОТПРАВКА ЗАПРОСА НА ПОЛУЧЕНИЕ
        let response  = await fetch(window.atob(this.start_key) + salt);
        // ЕСЛИ ЗАПРОС ПОЛУЧЕН
        if (response.ok) {
            // В ЗАВИСИМОСТИ ОТ ОЖИДАЕМОГО ТИПА ФАЙЛА ФОРМАТИРУЕМ ЕГО ПО ПОДОБИЮ БОЖЬЕМУ
            if (type) {return await response.json()} else {return await response.text()}
        } else {console.debug("Ошибка HTTP: " + response.status)}
    }
    // КОСТЫЛЬ ДЛЯ УПРОЩЕНИЯ КОДА И ЕГО ОБЛЕГЧЕНИЯ
    t(type_of_page) {return this.cfg["type_settings"][type_of_page][2]}
    // ПОЛУЧЕНИЕ СОДЕРЖИМОГО СТРАНИЦЫ
    async get_html() {
        let html = document.body // ПОЛУЧЕНИЕ ПРЕДВОРИТЕЛЬНОГО РЕЗУЛЬТАТА
        // ФУНКЦИЯ ПОЛУЧЕНИЯ СОДЕРЖИМОГО ПОСЛЕ ПОДГРУЗКИ ЕЛЕМЕНТА ПО СЕЛЕКТОРУ
        async function waitForIframeAndElement(selector) {
            return new Promise((resolve, reject) => { // СОЗДАЕМ ПРОМИС
                const checkIframe = setInterval(() => { //СТАВИМ ИНТЕРВАЛ ПРОВЕРКИ ЭЛЕМЕНТА
                    const iframe = document.querySelector('main iframe'); // ОЖИДАНИЕ IFRAME
                    if (iframe) {
                        // ЕСЛИ IFRAME В НАЛИЧИИ ТО СОЗДАЕМ НОВЫЙ ИНТЕРВАЛ ОЖИДАНИЯ ЭЛЕМЕНТА
                        const checkElement = setInterval(() => {
                            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                            const element = iframeDocument.querySelector(selector);
                            // ЭЛЕМЕНТ НАЙДЕН
                            if (element) {
                                clearInterval(checkElement);
                                clearInterval(checkIframe);
                                resolve(element); // ОТПРАВИТЬ ОТВЕТ ПРОМИСА
                            }
                        }, 100);
                    }
                }, 100);
            });
        }
        if (window.location.href.includes("cpanel")) {html = await waitForIframeAndElement("#yw0")} // ПРОВЕРКА СТАРОЙ ВЕРСИИ САЙТА (НЕАКТУАЛЬНО)
        return html // ВОЗВРАЩАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ
    }
    // ГЛАВНАЯ ФУНКЦИЯ ВХОД В ПРОГРАММУ
    async main() {
        // ПОЛУЧЕНИЕ СОДЕРЖИМОГО СТРАНИЦЫ
        this.html = await this.get_html()
        // ПОЛУЧЕНИЕ НАСТРОЕК ОТ ИП
        // this.cfg = await this.get_file("configure.json").catch(err => {console.debug("[App.main] GET_CONFIG_ERROR", err)})
        this.cfg = configure
        // БАЗОВЫЕ ШАБЛОНЫ К VP И ОФОРМЛЕНИЮ ИНТЕРФЕЙСА
        this.templates = {
            all_list: Object.assign({}, this.t("buyer"), this.t("market"), this.t("mobile"), this.t("takeup")),
            uv_off: Object.assign({}, this.t("market"), this.t("mobile"), this.t("takeup")),
            need: {orderNumber: ["market", "mobile", "takeup"], traffic: ["open", "return"], comment: ["market", "mobile", "takeup", "return", "no_item"], reasons: ["no_item"]},
            icons: [["ฅ^•⩊•^ฅ", "⎛⎝^>⩊<^⎠⎞"], "≽/ᐠ - ˕ -マ≼"] }
        // СТРОКИ БЕЗ ВЫБРАННОГО ПУНКТА
        this.deny = ["Не задан", ""]
        // ПРЕМЕЧАНИЕ: ТАК КАК САЙТ СЕЙЧАС ИМЕЕТ ФОРМУ SPA (single page application)
        // ПОЛУЧЕНИЕ СОДЕРЖИМОГО СТРАНИЦЫ ЯВЛЯЕТСЯ АСИНХРОННОЙ ФУНКЦИЕЙ И ЗАПУСКАЕТСЯ ВНУТРИ
        // "АСИНХРОННЫХ КЛАССОВ", В КОТОРЫХ НЕТ ВОЗМОЖНОСТИ АСИНХРОННО ЗАПУСТИТЬ КОД ЧЕРЕЗ 
        // CONSTRUCTOR ИЗ ЗА ЧЕГО В КАЖДОМ КЛАССЕ РЕАЛИЗОВАННА АСИНХРОННАЯ ФУНКЦИЯ RUN() 
        // КОТОРАЯ МОЖЕТ ЧТО ТО ПРИНИМАТЬ, А МОЖЕТ И НЕ ПРИНИМАТЬ, ЕЕ ЗАПУСК В КЛАССЕ НЕОБХОДИМ.
        // КЛАССЫ, КОТОРЫЕ НЕ ТРЕБУЕТ АСИХРОННОГО ПОДХОДА ВЫПОЛНЕННЫ ПО ВОЗМОЖНОСТИ БЕЗ НЕГО. 
        // КЛАСС INTERFACE ОТВЕЧАЕТ ЗА ИНТЕРФЕЙС ПРОГРАММЫ
        this.interface = new Interface()
        this.buttons = await this.interface.run(this.html)
        // КЛАСС TABLES ОТВЕЧАЕТ ЗА РАЗБИТИЕ ДАННЫХ СТРАНИЦЫ НА КОМФОРТНЫЕ ДЛЯ ПОНИМАНИЯ ДАННЫЕ.
        this.tables = new Tables(this.cfg, this.html)
        this.tables = await this.tables.get_all()
        this.all_tables_sorted = [this.tables[0], this.tables[1], this.tables[2]]
        console.debug(this.all_tables_sorted)
        // КЛАСС НЕКЛИЕНТА ПИШЕТСЯ ПОД КАЖДОЕ ИП ОТДЕЛЬНО ЯВЛЯЕТСЯ СИЛЬНОЙ И НЕЗАВИСИМОЙ ФУНКЦИЕЙ
        let nc = new no_client({"config": this.cfg, "table": this.all_tables_sorted})
        await nc.connect(this.buttons[3])
        // ВВОД ОСНОВНЫХ ДЕЙСТВУЮЩИХ ПЕРЕМЕННЫХ
        this.traffic  = this.all_tables_sorted[0]["traffic"]
        this.comment  = this.all_tables_sorted[0]["comment"]
        this.reasons  = this.all_tables_sorted[0]["reason"]
        // КЛАСС VPTIME ОТВЕЧАЕТ ЗА ОБРАБОТКУ ДАТЫ ВРЕМЕНИ И ТИПА СМЕНЫ (Н/Д)
        this.datetime = new VpTime()
        this.datetime = await this.datetime.run(this.all_tables_sorted[0]["datetime"].split(", "))
        // КЛАСС ANALYSIS ОТВЕЧАЕТ ЗА СВЕРКУ ДАННЫХ С ШАБЛОНОМ 
        // И ПОЛНОСТЬЮ ГЕНЕРИРУЕТ ПРЕДВАРИТЕЛЬНЫЙ ШАБЛОН
        this.analysis     = new AnalIs()
        this.analis       = await this.analysis.run({
            tables:     this.all_tables_sorted, 
            all_list:   this.templates["all_list"],
            config:     this.cfg,
            html:       this.html,
            interface:  this.interface,
            templates:  this.templates,
            datetime:   this.datetime,
            deny:       this.deny
        })
        this.uv_turn      = this.analysis.uv_turn // ТИП СМЕНЫ (Д/Н)
        this.type_of_page = this.analis[0]        // ТИП ЧЕКА  (маркет, клиент, нетовар, неклиен...)
        // КЛАСС COPYCONNECT САМЫЙ НЕ СИСТЕМАТИЗРОВАННЫЙ КЛАСС - ОТВЕЧАЕТ ЗА ГОРЯЧИЕ КЛАВИШИ, 
        // ОТСЛЕЖИВАНИЕ НАЖАТЫХ КНОПОК И ИТОГОВОЕ КОПИРОВАНИЕ 
        this.copy_class = new CopyConnect()
        await this.copy_class.run({
            html:              this.html,
            type_of_page:      this.type_of_page,
            interface:         this.buttons,
            all_tables_sorted: this.all_tables_sorted[0]["table_sorted"],
            traffic:           this.traffic,
            comment:           this.comment,
            reasons:           this.reasons,
            analis:            this.analysis,
            deny:              this.deny,
            templates:         this.templates
        })
    }
}
// ДОБАВЛЕННО 22 НОЯБРЯ С МОМЕНТА ПОЯВЛЕНИЯ НОВОГО VIRTUALPOS
// ОТНОСИТЕЛЬНАЯ ТОЧКА ВХОДА В ПРОГРАММУ
// ОПРЕДЕЛЯЕТ СТРАНИЦУ НА КОТОРОЙ НАХОДИТСЯ ПОЛЬЗОВАТЕЛЬ
class Monitor {
    constructor() {
        // НАЧАЛЬНЫЕ ПЕРЕМЕННЫЕ 
        this.url_template   = [   "sales/view/id"    ]
        this.current        = window.location.href
        this.app            = false
        this.observer       = false
        if (this.url_check()) {this.app = new App(sets)};
        this.trackUrlChanges(); this.observer.observe(document, { 
            childList: true, subtree: true 
        });
    }
    url_check() {
        // ПОДГОТОВКА ПЕРЕМЕННЫХ
        let result = false;
        // СВЕРКА ССЫЛКИ САЙТА С ШАБЛОНАМИ
        this.url_template.forEach(urlt => {
            // ЕСЛИ ССЫЛКА С ШАБЛОНОМ СОВПАДАЕТ РЕЗУЛЬТАТ ПОЛОЖИТЕЛЬНЫЙ
            if (this.current.includes(urlt)) {result = true}
        }); return result;
    }
    // ПЕРЕУСТАНОВКА КЛАССА
    reinstallClass() { this.app = new App(sets) }
    // ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ССЫЛКИ
    trackUrlChanges() {
        // ОПРЕДЕЛЕНИЕ ССЫЛКИ
        this.current = window.location.href;
        // ПОИСК МУТАЦИЙ НА СТРАНИЦЕ
        this.observer = new MutationObserver(() => {
            // ЕСЛИ НОВАЯ СТРАНИЦА НЕ СОВПАДАЕТ С СТАРОЙ
            if (this.current !== window.location.href) {
                // ОБНУЛЯЕМ ИНТЕРФЕЙС И ПО НОВОЙ ЗАПУСКАЕМ ПОДГРУЖЕННЫЙ КЛАСС ЕСЛИ СТРАНИЦА ДРУГОГО ЧЕКА
                if (this.url_check()) {this.app.interface.remove();}
                this.current = window.location.href; this.app = false; 
                if (this.url_check()) {this.app = new App(sets);} 
            }
        })}
} const MonitorApplication = new Monitor(); // ЗАПУСК МОНИТОРИНГА 
 console.groupEnd()
