import AbstractComponent from '../../abstract-component';

const createOurTeachersTemplate = () => {

  return (
	`<section class="our-teachers">
        <ul class="our-teachers__list">
            <li class="our-teachers__item">
                <h2 class="our-teachers__name">Диaнa</h2>
                <img class="our-teachers__image" src="assets/img/jpg/avatar_mocs.jpg" alt="photo trainer" width="200" height="200">
                <h3 class="our-teachers__degree">Мастер-тренер</h3>
                <p class="our-teachers__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </li>
            <li class="our-teachers__item">
                <h2 class="our-teachers__name">Lorem</h2>
                <img class="our-teachers__image" src="assets/img/jpg/avatar_mocs.jpg" alt="photo trainer" width="200" height="200">
                <h3 class="our-teachers__degree">Инструктор</h3>
                <p class="our-teachers__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </li>
        </ul>
	</section>`
  );
};

export default class OurTeachers extends AbstractComponent {
	constructor() {
		super();
	}
  getTemplate() { // возвращает разметку
	return createOurTeachersTemplate();
  }

//   _setClickHandler(path, handler) { // приватный метод вынести в utils
// 	this.getElement().querySelector(path)
// 	.addEventListener(`click`, handler);
//   }

//   setSubmitHandler(handler) { // устанавливает слушатель на отправку формы
//     this.getElement().querySelector(`#form`)
//       .addEventListener(`submit`, handler);
//   }

//   setClickOnButtonCloselHandler(handler) { // public method realized click on popup-controller
// 	this._setClickHandler(`.mail-form__close-btn`, handler);
//   }
}