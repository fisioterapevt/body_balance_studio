import AbstractComponent from '../../abstract-component';

const createContactPageTemplate = () => {
  return (
    `<section class="contact-page container">
      <h1 class="contact-page__head head">Наши контакты</h1>
      <section class="contact-page__wrap"></section>
    </section>`
  );
};

export default class Contact extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createContactPageTemplate();
  }
}