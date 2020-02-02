// import FooterContactsComponent from '../components/footer/footer-contacts';
import PoweredByComponent from '../components/powered-by';
import SocialComponent from '../components/social';
import LogoComponent from '../components/logo';
import ContactComponent from '../components/contact/contact';
import MailComponent from '../components/popup/mail';

import {
  render,
  remove,
  RenderPosition
} from '../utils/render';

const siteFooterElement = document.querySelector(`.footer-inner`);

export default class FooterController {
  constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

    this._logoComponent = new LogoComponent();
    this._poweredByComponent = new PoweredByComponent();
    this._socialComponent = new SocialComponent();
    this._contactComponent = new ContactComponent();
    this._mailComponent = new MailComponent();

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render() {
    const container = this._container.getElement();
    render(container, this._logoComponent, RenderPosition.BEFOREEND);
    render(container, this._socialComponent, RenderPosition.BEFOREEND);
    // render(container, this._poweredByComponent, RenderPosition.BEFOREEND);

    if (window.innerWidth >= 1280) { // если экран равен или больше 1280 запускает метод для отрисовки блока с контактами
        this._renderContactComponent();
    } else {
      remove(this._contactComponent);
    }

    this._pageModel._setChangeSizeScreenHandler(() => { // вызывается при изменении экрана метод находится в pageModel
      if (window.innerWidth >= 1280) { //  если ширина экрана больше 1280
        this._renderContactComponent();
      } else {
        remove(this._contactComponent);
      }
    });
  }

  _renderContactComponent() { // отрисовывает блок контактов в футере навешивает обработчик клика для отрытия попапа
    render(this._container.getElement(), this._contactComponent, RenderPosition.BEFOREEND); // отрисовывает контакты на главной в футере
    this._contactComponent.setClickOnMailHandler(() => { // навешивает обработчик клика для отрытия попапа
      this._openMailPopup();
    });
  }

  _openMailPopup() { // открывает попап
    render(this._container.getElement(), this._mailComponent, RenderPosition.BEFOREEND); // отрисовывает форму обратной связи
    this._mailComponent.setClickOnButtonCloselHandler(() => { // навешивает обработчик клика на кнопку для закрытия попапа
      this._closeMailPopup();
    });
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  _closeMailPopup() { // закрывает попап
    remove(this._mailComponent);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _onEscKeyDown(evt) { // метод отлавливает событие нажатия на кнопку Esc
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      evt.preventDefault();
      this._closeMailPopup();
    }
  }
}