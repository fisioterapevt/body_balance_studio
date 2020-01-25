import FooterContactsComponent from '../components/footer/footer-contacts';
import PoweredByComponent from '../components/powered-by'
import SocialComponent from '../components/social'

import {render, RenderPosition} from '../utils/render';

export default class FooterController {
  constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

    this._footerContactsComponent = new FooterContactsComponent();
    this._poweredByComponent = new PoweredByComponent();
    this._socialComponent = new SocialComponent();
  }

  render() {
    const container = this._container.getElement();
    render(container,  this._footerContactsComponent, RenderPosition.BEFOREEND);
    render(container,  this._poweredByComponent, RenderPosition.BEFOREEND)
    render(container, this._socialComponent, RenderPosition.BEFOREEND)
  }
}