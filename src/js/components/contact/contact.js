import AbstractComponent from '../abstract-component';

const createContactTemplate = () => {
    return (
        `<section class="contact">
            <div class="contact-us">
                <h2 class="contact-us__head">
                    Остались вопросы? Свяжитесь с нами!
                 </h2>
                <ul class="contact-us__list">
                    <li class="contact-us__item">
                        <a class="contact-us__link" href="#">
                            <span class="contact-us__location">проспект Сакена Сейфуллина 617, Алматы</span>
                        </a>
                    </li>
                    <li class="contact-us__item">
                        <a class="contact-us__link" href="tel:+78125556666">
                            <span class="contact-us__tel">+7 (700) 111-66-66</span>
                         </a>
                    </li>
                    <li class="contact-us__item">
                        <a class="contact-us__link" href="mail@bodybalance.kz">
                            <span class="contact-us__email">mail@bodybalance.kz</span>
                        </a>
                    </li>
                    <li class="contact-us__item">
                        <div class="contact-us__open-hours">
                            <p>пн-пт: 7:00 - 21:00</p>
                            <p>сб: 10:00 - 16:00 | 18:00 - 20:00</p>
                            <p>вс: 12:00 - 14:00 | 16:00 -19:00</p>
                        </div>
                    </li>
                </ul>
            </div>`
    );
};

export default class Contact extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createContactTemplate();
    }
}