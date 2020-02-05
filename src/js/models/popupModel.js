import {
    render,
    remove,
    RenderPosition
} from '../utils/render';

import PopupMailComponent from '../components/popup/popup-mail'

export default class PopupModel {
    constructor() {
        this._popupMailComponent = new PopupMailComponent();

        this._onEscKeyDown = this._onEscKeyDown.bind(this);
    }

    _openMailPopup(container) { // открывает попап принимает из header-controller контейнер для отрисовывания попапа
        render(container, this._popupMailComponent, RenderPosition.BEFOREEND);
        this._popupMailComponent.setClickOnButtonCloselHandler(() => { // запускает обработчик клика на кнопку для закрытия попапа
            remove(this._popupMailComponent); // закрывает попап, удаляет компонент
            document.removeEventListener(`keydown`, this._onEscKeyDown);
        });
        document.addEventListener(`keydown`, this._onEscKeyDown);

        this._popupMailComponent.setSubmitHandler((evt) => { // запускает обработчик события отправки формы
            evt.preventDefault(); // отменяет дефолтное поведение
            // console.log(this._popupMailComponent.getElement())
            const form = this._popupMailComponent.getElement().querySelector(`#form`); // получаем форму из компонента
            const formData = new FormData(form); // передаем форму в  new FormData(); 
            //этот объект содержит информацию из формы и вызывается по ключу formData.get('name')
            this._ajaxSend(formData);

            // this.reset(); // очищаем поля формы
        });
    }

    _onEscKeyDown(evt) { // метод отлавливает событие нажатия на кнопку Esc
        const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
        if (isEscKey) {
            evt.preventDefault();
            remove(this._popupMailComponent);
        }
    }

    _ajaxSend(formData) { // отправляет данные из формы на почту, возвращает результат по итогам 
        fetch('mail.php', {
                method: 'POST',
                body: formData  // в тело запроса передаем объект FormData
            })
            .then(response => alert(`Сообщение отправлено`))
            .catch(error => console.error(error))

    }
}