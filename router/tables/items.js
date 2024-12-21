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

    // ЗАЛУПИРОВАННОЕ ПОЛУЧЕНИЕ ПРОДАННХ ТОВАРОВ
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

