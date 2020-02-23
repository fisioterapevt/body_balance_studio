import AbstractComponent from '../../abstract-component';

const createSuccessMessageTemplate = () => {
  return (
	  `<section class="success-message">
      <h2>Спасибо!</h2>
      <h3>Ваше сообщение отправлено.</h3>
      <p>В ближайшее время мы с Вами свяжемся!</p>
	  </section>`
  );
};

export default class SuccessMessage extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createSuccessMessageTemplate();
  }
}