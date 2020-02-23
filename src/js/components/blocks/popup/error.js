import AbstractComponent from '../../abstract-component';

const createErrorMessageTemplate = () => {
  return (
  `<container class="error-message">
    <svg width="850.4" height="850.4" viewBox="0 0 850.4 850.4">
        <use xlink:href="assets/img/svg/sprite.svg#error_send"></use>
    </svg>
    <h3>Отсутствует соединение...</h3>
	</container>`
  );
};

export default class ErrorMessage extends AbstractComponent {
    constructor() {
        super();
        // this._status = status;
    }
  getTemplate() { // возвращает разметку
    return createErrorMessageTemplate();
  }
}