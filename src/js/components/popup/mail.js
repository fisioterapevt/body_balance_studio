import AbstractComponent from '../abstract-component';

const createMailTemplate = () => {
  return (
	`<container class="overlay">
		<form class="mail-form" action="mail.php" method="post" id="form">
			<div class="mail-form__close">
				<button class="mail-form__close-btn" type="button">
				   	<svg width="20" height="20" viewBox="0 0 20 20">
        				<use xlink:href="assets/img/sprite.svg#cross-close-icon"></use>
      				</svg>
				</button>
        	</div>
    		<legend>Форма для связи</legend>
    		<div class="mail-form__group">
    			<label for="name" class="mail-form__lable">Имя</label>
    			<input type="text" class="mail-form__control" id="name" name="name" placeholder="Как к Вам обращаться?" required>
    		</div>
    		<div class="mail-form__group">
    			<label for="phone" class="mail-form__lable">Телефон</label>
    			<input type="phone" class="mail-form__control" id="phone" name="phone" placeholder="+7 (999) 99 99 999">
    		</div>
    		<div class="mail-form__group">
    			<label for="email" class="mail-form__lable">E-mail</label>
    			<input type="email" class="mail-form__control" id="email" name="email" placeholder="mail@mail.ru" required>
			</div>
			<div class="mail-form__group">
				<label for="text_comment" class="mail-form__lable">Сообщение:</label>
				<textarea id="text_comment" name="text_comment" class="mail-form__textarea" placeholder="Не стесняйтесь в своем красноречии :-)"></textarea>
			</div>
    		<button type="submit" class="btn mail-form__btn">Отправить сообщение</button>
		</form>
	</container>`
  );
};

export default class Mail extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMailTemplate();
  }

  _setClickHandler(path, handler) { // приватный метод
	this.getElement().querySelector(path)
	.addEventListener(`click`, handler);
  }

  setClickOnButtonCloselHandler(handler) { // public method realized click on mail
	this._setClickHandler(`.mail-form__close-btn`, handler);
  }
}