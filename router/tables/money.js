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
