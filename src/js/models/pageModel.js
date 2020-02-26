import {
    MenuItem
} from '../components/blocks/navigation/main-nav.js';

export default class PageModel {
    constructor() {
        this._pages = [];
        this._activeMenuItem = MenuItem.HOME;

        this._menuItemChangeHandlers = [];
    }

    setMenuItem(menuItem) { // метод для активации пункта меню вызывается в nav-controller и получает нажатый пункт меню
        this._activeMenuItem = menuItem; // меняет активный фильтр на текущий
        this._callHandlers(this._menuItemChangeHandlers, this._activeMenuItem);
    }

    setMenuItemChangeHandler(handler) { // метод вызывается в конструкторе page-controller и принимает приватный метод _onMenuItemChange из page-controller
        this._menuItemChangeHandlers.push(handler); // записывает в массив приватный метод
    }

    _callHandlers(handlers, menuItem) { // приходит method из page-control  __onMenuItemChange
        handlers.forEach((handler) => handler(menuItem)); // handler() - this._menuItemChangeHandlers
    }

    _setChangeSizeScreenHandler(handler) { // слушает изменения в размере броузера
        window.addEventListener('resize', handler);
    }
}