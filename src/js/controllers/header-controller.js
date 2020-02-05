import HeaderNavComponent, {
  MenuItem
} from '../components/header-nav';
import LogoComponent from '../components/logo';
import HeaderTopBarComponent from '../components/header-top-bar';
import SocialComponent from '../components/social';
import MailComponent from '../components/popup/popup-mail';

import {
  render,
  RenderPosition
} from '../utils/render';

export default class HeaderController {
  constructor(container, pageModel, popupModel) { // получает две модели
    this._container = container;
    this._pageModel = pageModel;
    this._popupModel = popupModel;

    this._logoComponent = new LogoComponent();
    this._headerNavComponent = new HeaderNavComponent();
    this._headerTopBarComponent = new HeaderTopBarComponent();
    this._socialComponent = new SocialComponent();
    this._mailComponent = new MailComponent();

    this._onMenuItemChange = this._onMenuItemChange.bind(this); //  привязывает к контексту
  }

  render() {
    const container = this._container.getElement();
    const topBarWrap = this._headerTopBarComponent.getElement().querySelector(`.top-bar__wrap`);
    render(topBarWrap, this._socialComponent, RenderPosition.BEFOREEND)
    render(container, this._headerTopBarComponent, RenderPosition.BEFOREEND)
    render(container, this._logoComponent, RenderPosition.BEFOREEND)
    render(container, this._headerNavComponent, RenderPosition.BEFOREEND)

    this._headerNavComponent.setClickOnHamburgerMenuHandler((evt) => { // realized logic open/close menu
      evt.preventDefault();

      if (container.classList.contains(`header-inner--active`)) {
        container.classList.remove(`header-inner--active`);
      } else {
        container.classList.add(`header-inner--active`);
      }

      const headerLogo = container.querySelector(`.logo`); // сдвигает логотип при открытии меню-гарбургер
      if (headerLogo.classList.contains(`logo--active`)) {
        headerLogo.classList.remove(`logo--active`);
      } else {
        headerLogo.classList.add(`logo--active`);
      }

      const headerNav = container.querySelector(`.main-nav`); // открывает/закрывает меню-гамбургер
      if (headerNav.classList.contains(`main-nav--closed`)) {
        headerNav.classList.remove(`main-nav--closed`);
        headerNav.classList.add(`main-nav--opened`);
      } else {
        headerNav.classList.add(`main-nav--closed`);
        headerNav.classList.remove(`main-nav--opened`);
      }

      const buttonHamburger = container.querySelector(`.main-nav__toggle`);
      if (buttonHamburger.classList.contains(`toggle--is-active`)) {
        buttonHamburger.classList.remove(`toggle--is-active`);
      } else {
        buttonHamburger.classList.add(`toggle--is-active`);
      }

    });

    this._headerNavComponent.setClickOnMenuItemHandler(this._onMenuItemChange) // активирует обработчик клика на пункты меню в навигации находится в компоненте  header-nav.js

    this._headerTopBarComponent.setClickOnMailHandler(() => { // активирует обработчик клика на кнопку для отрытия попапа
      this._popupModel._openMailPopup(container); // запускает открытие попапа в модели popupModel.js
      // передавая в модель контейнер куда отрисовывать
    });
  }

  _onMenuItemChange(menuItem) { // запускает установку пункта меню в модели pageModel.js затем переходит в page-controller
    this._pageModel.setMenuItem(menuItem) // метод setMenuItem находится в pageModel.js и записывает нажатый пункт меню
  }
}