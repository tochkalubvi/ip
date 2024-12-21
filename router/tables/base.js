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

