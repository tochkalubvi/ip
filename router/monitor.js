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
