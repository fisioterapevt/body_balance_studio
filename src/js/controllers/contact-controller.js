import ContactPageComponent from '../components/pages/page-contact/contact-page';

import ContactComponent from '../components/blocks/contact/contact';
import MailController from './mail-controller';

import {
    render,
    RenderPosition,
    renderComponent
} from '../utils/render'

export default class ContactPageController {
    constructor(container) {
        this._container = container;
        this._contactPageComponent = new ContactPageComponent();

        this._contactComponent = new ContactComponent();

        this._mailController = new MailController();
    }

    render() {
        const container = this._container.getElement();
        render(container, this._contactPageComponent, RenderPosition.BEFOREEND);
        const contactContainer = this._contactPageComponent.getElement().querySelector('.contact-page__wrap');

        render(contactContainer, this._contactComponent, RenderPosition.BEFOREEND);


        renderComponent(this._mailController, contactContainer) // отрисовывает форму обратной связи MailComponent на странице контактов
                                                // с учетом контроллера MailController передавая в функцию место для отрисовки
    }
}