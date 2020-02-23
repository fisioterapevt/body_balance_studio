import NavComponent, {
  MenuItem
} from '../components/blocks/navigation/main-nav.js';
import HeaderInnerComponent from '../components/header/header-inner'
import LogoComponent from '../components/blocks/logo/logo';
import TopBarComponent from '../components/blocks/top-bar/top-bar';
import SocialComponent from '../components/blocks/social/social';
import MailComponent from '../components/blocks/popup/mail';

import MailController from './mail-controller';

import {
  render,
  RenderPosition,
  renderComponent
} from '../utils/render';

export default class HeaderController {
  constructor(container, pageModel) { // получает две модели
    this._container = container;
    this._pageModel = pageModel;

    this._headerInnerComponent = new HeaderInnerComponent();
    this._logoComponent = new LogoComponent();
    this._navComponent = new NavComponent();
    this._topBarComponent = new TopBarComponent();
    this._socialComponent = new SocialComponent();
    this._mailComponent = new MailComponent();

    this._mailController = new MailController();

    this._onMenuItemChange = this._onMenuItemChange.bind(this); //  привязывает к контексту
  }

  render() {

    render(this._container, this._headerInnerComponent, RenderPosition.BEFOREEND)

    const container = this._headerInnerComponent.getElement();
    const topBarWrap = this._topBarComponent.getElement().querySelector(`.top-bar__wrap`);
    render(topBarWrap, this._socialComponent, RenderPosition.BEFOREEND)
    render(container, this._topBarComponent, RenderPosition.BEFOREEND)
    render(container, this._logoComponent, RenderPosition.BEFOREEND)
    render(container, this._navComponent, RenderPosition.BEFOREEND)

    this._navComponent.setClickOnHamburgerMenuHandler((evt) => { // realized logic open/close menu
      evt.preventDefault();

      const mainNavList = container.querySelector(`.main-nav__list`);
      if (mainNavList.classList.contains(`main-nav__list--active`)) {
        mainNavList.classList.remove(`main-nav__list--active`);
      } else {
        mainNavList.classList.add(`main-nav__list--active`);
      }

      const overlay = document.querySelector(`.overlay`);
      if (overlay.classList.contains(`overlay--active`)) {
        overlay.classList.remove(`overlay--active`);
      } else {
        overlay.classList.add(`overlay--active`);
      }

      const buttonHamburger = container.querySelector(`.main-nav__toggle`);
      if (buttonHamburger.classList.contains(`toggle--active`)) {
        buttonHamburger.classList.remove(`toggle--active`);
      } else {
        buttonHamburger.classList.add(`toggle--active`);
      }

      // const footer = document.querySelector(`.footer-inner`);
      // if (footer.classList.contains(`footer-inner--active`)) {
      //   footer.classList.remove(`footer-inner--active`);
      // } else {
      //   footer.classList.add(`footer-inner--active`);
      // }

      // const main = document.querySelector(`.main`);
      // if (main.classList.contains(`main--active`)) {
      //   main.classList.remove(`main--active`);
      // } else {
      //   main.classList.add(`main--active`);
      // }

      // if (container.classList.contains(`header-inner--active`)) {
      //   container.classList.remove(`header-inner--active`);
      // } else {
      //   container.classList.add(`header-inner--active`);
      // }
    });

    this._navComponent.setClickOnMenuItemHandler(this._onMenuItemChange) // активирует обработчик клика на пункты меню в навигации находится в компоненте  main-nav.js

    this._topBarComponent.setClickOnMailHandler(() => { // активирует обработчик клика на кнопку для отрытия попапа
      renderComponent(this._mailController ,container);// передавая в модель контейнер куда отрисовывать
    });
  }

  _onMenuItemChange(menuItem) { // запускает установку пункта меню в модели pageModel.js затем переходит в page-controller
    this._pageModel.setMenuItem(menuItem) ;// метод setMenuItem находится в pageModel.js и записывает нажатый пункт меню
    const nav = this._navComponent.getElement();
    nav.querySelector(`.main-nav__list`).classList.remove(`main-nav__list--active`);
    nav.querySelector(`.main-nav__toggle`).classList.remove(`toggle--active`);
    document.querySelector(`.overlay`).classList.remove(`overlay--active`);
  }
}