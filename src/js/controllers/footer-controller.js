// import FooterContactsComponent from '../components/footer/footer-contacts';
import PoweredByComponent from '../components/powered-by';
import SocialComponent from '../components/social';
import LogoComponent from '../components/logo';

import {render, RenderPosition} from '../utils/render';

export default class FooterController {
  constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

    this._logoComponent = new LogoComponent();
    this._poweredByComponent = new PoweredByComponent();
    this._socialComponent = new SocialComponent();
  }

  render() {
    const container = this._container.getElement();
    render(container, this._logoComponent, RenderPosition.BEFOREEND);
    render(container, this._socialComponent, RenderPosition.BEFOREEND);
    render(container,  this._poweredByComponent, RenderPosition.BEFOREEND)
  }
}