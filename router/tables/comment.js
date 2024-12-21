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
            if (/^\d+$/.test(word) && word.length > 6) {
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

        // 23820962:39327123651 Курьер Яндекс Маркет Бомба

        this.object = {
            full: this.comment_formatted,
            orderNumber: orderNumber,
            carrierType: carrierType,
            courierComment: courierComment
        }; 
    }
}
