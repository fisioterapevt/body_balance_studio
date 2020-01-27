import AbstractComponent from '../abstract-component';

const createLocationTemplate = () => {
    return (
        `<section class="location">
            <div class="contact-us">
                <h2 class="contact-us__head">
                    Остались вопросы? Свяжитесь с нами!
                 </h2>
                <ul class="contact-us__list">
                    <li class="contact-us__item">
                        <b>
                            Звоните:
                         </b>
                        <a class="contact-us__link" href="tel:+78125556666">
                            <span>+7 (812) 555-66-66</span>
                         </a>
                    </li>
                    <li class="contact-us__item">
                        <b>
                            Пишите:
                        </b>
                        <a class="contact-us__link" href="mail@htmlacademy.ru">
                            <span>mail@htmlacademy.ru</span>
                        </a>
                    </li>
                    <li class="contact-us__item">
                        <b>
                            Приезжайте в гости
                        </b>
                        <a class="contact-us__link" href="#">
                            <span>ул. Большая Конюшенная, 19/8</span>
                        </a>
                    </li>
                </ul>
            </div>`
    );
};

export default class Location extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createLocationTemplate();
    }
}