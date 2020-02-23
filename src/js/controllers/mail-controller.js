import {
    render,
    remove,
    RenderPosition
} from '../utils/render';

import MailComponent from '../components/blocks/popup/mail';
import ErrorMessageComponent from '../components/blocks/popup/error';
import SuccessMessageComponent from '../components/blocks/popup/success';

export default class MailController {
    constructor(container) { // container приходит из той странице где отрисовывают блок обратной связи Mail
        this._container = container;
        this._mailComponent = new MailComponent();
        this._errorMessageComponent = new ErrorMessageComponent();
        this._successMessageComponent = new SuccessMessageComponent();

        this._onEscKeyDown = this._onEscKeyDown.bind(this);
        this._removeMailComponent = this._removeMailComponent.bind(this);
        this._removeMessageErrorComponent = this._removeMessageErrorComponent.bind(this);
    }
    render() {
        render(this._container, this._mailComponent, RenderPosition.BEFOREEND); // отрисовывается форма обратной связи странице

        document.addEventListener(`keydown`, this._onEscKeyDown);

        this._mailComponent.setSubmitHandler((evt) => { // запускает обработчик события отправки формы
            evt.preventDefault(); // отменяет дефолтное поведение нажатия submit
            // this._popupMailComponent.setData({ // меняет надпись кнопки после нажатия до момента отправки
            //     saveButtonText: `Отправляется...`
            //   });

            const form = this._mailComponent.getElement().querySelector(`#form`); // получаем форму из компонента
            const formData = new FormData(form); // передаем форму в  new FormData();
            //этот объект содержит информацию из формы и вызывается по ключу formData.get('name')
            this._ajaxSend(formData);// отправляем на сервер
        });

        this._mailComponent.setClickOnButtonCloselHandler(() => { // запускает обработчик клика на кнопку для закрытия попапа
            this._removeMailComponent(); // закрывает попап, удаляет компонент
            document.removeEventListener(`keydown`, this._onEscKeyDown);
        });

        // this._errorMessageComponent = new ErrorMessageComponent();
    }

    _removeMailComponent() { // удаляет компонент попапа
        remove(this._mailComponent);
    }

    _removeMessageErrorComponent() { // удаляет компонент вывода ошибки
        remove(this._errorMessageComponent);
    }

    _onEscKeyDown(evt) { // метод отлавливает событие нажатия на кнопку Esc
        const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
        if (isEscKey) {
            evt.preventDefault();
            this._removeMailComponent();
        }
    }

    _ajaxSend(formData) { // отправляет данные из формы на почту, возвращает результат по итогам 
        fetch('mail.php', {
                method: 'POST',
                body: formData // в тело запроса передаем объект FormData
            })
            .then((response) => {
                // this._mailComponent.setData(response.status);
                if (response.ok) {
                    this._onSuccess(); // вывести уведомление об успешной отправке
                } else {
                    this._onError(response.status); // запускает проверку на ошибки
                }
            })
            .catch(error => this._onError(error))
    }

    _onError(status) { // в случае ошибки 4xx или 5хх отрисовывает сообщение и через время удаляет компонент попапа
        if (status === 404 || status === 500) {
            render(this._mailComponent.getElement(), this._errorMessageComponent, RenderPosition.BEFOREEND);
            setTimeout(this._removeMessageErrorComponent, 50000);
        } else { // отлавливает оставшиеся ошибки и выводит модальное окно
            alert(`not 404`);
        }
    }

    _onSuccess() {
        form.style.display = `none`;
        render(this._mailComponent.getElement(), this._successMessageComponent, RenderPosition.BEFOREEND);
        setTimeout(this._removePopupMailComponent, 2000);
    }
}