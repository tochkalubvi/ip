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





