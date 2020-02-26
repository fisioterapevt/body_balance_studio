import AbstractComponent from '../../abstract-component';

export const MenuItem = {
  HOME: `home`,
  STUDIO: `studio`,
  CLASSES: `classes`,
  SCHEDULE: `schedule`,
  CONTACTS: `contacts`
};

import {
  removeClass
} from '../../../utils/render.js';

const createHeaderNavTemplate = () => {
  return (
    `<nav class="main-nav">
      <button class="main-nav__toggle toggle" type="button">
        <span class="">Открыть меню</span>
      </button>
      <ul class="main-nav__list">
            <li class="main-nav__item">
              <a href="/home" data-menu-type="${MenuItem.HOME}" class="main-nav__link main-nav__link--active main-nav__link--home">Главная</a>
            </li>
            <li class="main-nav__item">
              <a href="/studio" data-menu-type="${MenuItem.STUDIO}" class="main-nav__link main-nav__link--studio">Студия</a>
            </li>
            <li class="main-nav__item">
              <a href="/classes"data-menu-type="${MenuItem.CLASSES}" class="main-nav__link main-nav__link--classes">Классы</a>
            </li>
            <li class="main-nav__item">
              <a href="/schedule" data-menu-type="${MenuItem.SCHEDULE}" class="main-nav__link main-nav__link--schedule">Расписание</a>
            </li>
            <li class="main-nav__item">
              <a href="/contacts" data-menu-type="${MenuItem.CONTACTS}" class="main-nav__link main-nav__link--contacts">Контакты</a>
            </li>
      </ul>
    </nav>`
  );
};


export default class HeaderNav extends AbstractComponent {
  constructor() {
    super();

    this._currentMenuItem = MenuItem.HOME; //  присваивает значение текущему пункту меню
  }

  getTemplate() { // возвращает разметку
    return createHeaderNavTemplate();
  }

  _setClickHandler(path, handler) { // приватный метод
    this.getElement().querySelector(path)
      .addEventListener(`click`, handler);
  }

  setClickOnHamburgerMenuHandler(handler) { // public method realized click on Hamburger menu
    this._setClickHandler(`.main-nav__toggle`, handler);
  }

  setClickOnMenuItemHandler(handler) { // устанавливает обработчик клика на пункты меню вызывается в header-controller.js
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (evt.target.tagName !== `A`) { // если нажатая кнопка не ссылка - ничего не делать
        return;
      }
      removeClass(`.main-nav__link`, 'main-nav__link--active'); // удаляет класс active

      const menuItem = evt.target.dataset.menuType; // обязательно указывать ...Type
      evt.target.classList.add(`main-nav__link--active`) // добавляет целевому пункту меню класс main-nav__link--active

      // if (this._currentMenuItem === menuItem) { // если нажатый пунк меню совпадает с нажатым то остановиться
      //   return;
      // }

      this._currentMenuItem = menuItem;

      handler(this._currentMenuItem);
    });
  }
}