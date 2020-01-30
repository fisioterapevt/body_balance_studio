// import FooterContactsComponent from '../components/footer/footer-contacts';
import PoweredByComponent from '../components/powered-by';
import SocialComponent from '../components/social';
import LogoComponent from '../components/logo';
import ContactComponent from '../components/contact/contact';

import {
  render,
  remove,
  RenderPosition
} from '../utils/render';

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

    if (window.innerWidth >= 1280) { // если экран равен или больше 1280
      render(container, this._contactComponent, RenderPosition.BEFOREEND); // отрисовывает в футер на dasktop размере
    } else {
      remove(this._contactComponent);
    }

    this._pageModel._setChangeSizeScreenHandler(() => { // вызывается при изменении экрана
      if (window.innerWidth >= 1280) { //  если ширина экрана больше 1280
        render(container, this._contactComponent, RenderPosition.BEFOREEND); // отрисовывает контакты на главной в футере
      } else {
        remove(this._contactComponent);
      }
    });
  }
}