// import FooterContactsComponent from '../components/footer/footer-contacts';
import PoweredByComponent from '../components/blocks/powered-by/powered-by';
import SocialComponent from '../components/blocks/social/social';
import LogoComponent from '../components/blocks/logo/logo';
import ContactComponent from '../components/blocks/contact/contact';

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
  }
}