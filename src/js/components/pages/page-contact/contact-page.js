import AbstractComponent from '../../abstract-component';

const createContactPageTemplate = () => {
  return (
    `<section class="contact-page container"></section>`
  );
};

export default class Contact extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createContactPageTemplate();
  }
}