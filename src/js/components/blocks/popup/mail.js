import AbstractComponent from '../../abstract-component';

const createMailTemplate = () => {

	const isBlockSubmitButton = false;

	const submitButtonText = `Отправить сообщение`;

  return (
	`<section class="mail-form__overlay">
		<form class="mail-form" id="form">
			<div class="mail-form__close">
				<button class="mail-form__close-btn" type="button">
				   	<svg width="20" height="20" viewBox="0 0 20 20">
        				<use xlink:href="assets/img/svg/sprite.svg#cross-close-icon"></use>
      				</svg>
				</button>
        	</div>
    		<legend>Форма для связи</legend>
			<div class="mail-form__group">
				<svg width="512" height="512" viewBox="0 0 512 512">
        			<use xlink:href="assets/img/svg/sprite.svg#data_boy"></use>
    			</svg>
				<label for="name" class="mail-form__lable mail-form__lable--name">
						Имя:
					<span class="mail-form__required">*</span>
				</label>
    			<input type="text" class="mail-form__control" id="name" name="name" placeholder="Как к Вам обращаться?" required>
    		</div>
			<div class="mail-form__group">
				<svg width="512" height="512" viewBox="0 0 512 512">
        			<use xlink:href="assets/img/svg/sprite.svg#old_phone"></use>
    			</svg>
				<label for="phone" class="mail-form__lable mail-form__lable--phone">
						Телефон:
				</label>
    			<input type="phone" class="mail-form__control" id="phone" name="phone" placeholder="+7 (999) 99 99 999">
    		</div>
			<div class="mail-form__group">
				<svg width="512" height="512" viewBox="0 0 512 512">
        			<use xlink:href="assets/img/svg/sprite.svg#mailbox"></use>
    			</svg>
				<label for="email" class="mail-form__lable mail-form__lable--email">
						E-mail:
					<span class="mail-form__required">*</span>
				</label>
    			<input type="email" class="mail-form__control" id="email" name="email" placeholder="mail@mail.ru" required>
			</div>
			<div class="mail-form__group">
				<svg width="512" height="512" viewBox="0 0 512 512">
        			<use xlink:href="assets/img/svg/sprite.svg#comment"></use>
    			</svg>
				<label for="text_comment" class="mail-form__lable mail-form__lable--message">
						Сообщение:
				</label>
				<textarea id="text_comment" name="text_comment" class="mail-form__textarea" placeholder="Не стесняйтесь в своем красноречии :-)"></textarea>
			</div>
    		<button type="submit" class="btn mail-form__btn" ${isBlockSubmitButton ? `disabled` : ``}>${submitButtonText}</button>
		</form>
	</section>`
  );
};

export default class Mail extends AbstractComponent {
	constructor() {
		super();
	}
  getTemplate() { // возвращает разметку
	return createMailTemplate();
  }

  setData(data) {
	console.log(`setData ${data}`)
  }

  _setClickHandler(path, handler) { // приватный метод вынести в utils
	this.getElement().querySelector(path)
	.addEventListener(`click`, handler);
  }

  setSubmitHandler(handler) { // устанавливает слушатель на отправку формы
    this.getElement().querySelector(`#form`)
      .addEventListener(`submit`, handler);
  }

  setClickOnButtonCloselHandler(handler) { // public method realized click on popup-controller
	this._setClickHandler(`.mail-form__close-btn`, handler);
  }
}

// сделать замену формы на попап успеха