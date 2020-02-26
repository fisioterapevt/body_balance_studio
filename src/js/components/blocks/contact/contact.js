import AbstractComponent from '../../abstract-component';

const createContactTemplate = () => {
    return (
        `<section class="contact">
            <section class="contact-us">
                <ul class="contact-us__list">
                    <li class="contact-us__item">
                        <a class="contact-us__link contact-us__location" href="#">
                            <svg width="64" height="64" viewBox="0 0 512 512">
                                <use xlink:href="assets/img/svg/sprite.svg#location"></use>
                            </svg>
                            <span>проспект Сакена Сейфуллина 617, Алматы</span>
                        </a>
                    </li>
                    <li class="contact-us__item">
                        <a class="contact-us__link contact-us__tel" href="tel:+78125556666">
                            <svg width="64" height="64" viewBox="0 0 512 512">
                                <use xlink:href="assets/img/svg/sprite.svg#telephone"></use>
                            </svg>
                            <span>+7 (700) 111-66-66</span>
                         </a>
                    </li>
                    <li class="contact-us__item">
                        <a class="contact-us__mail" href="mailto:info@bodybalance.kz">
                            <svg width="64" height="64" viewBox="0 0 512 512">
                                <use xlink:href="assets/img/svg/sprite.svg#mail"></use>
                            </svg>
                        <span>info@bodybalance.kz</span>
                        </a>
                    </li>
                    <li class="contact-us__item contact-us__open-hours">
                        <svg width="64" height="64" viewBox="0 0 512 512">
                            <use xlink:href="assets/img/svg/sprite.svg#clock"></use>
                        </svg>
                        <div>
                            <p>пн-пт: 7:00 - 21:00</p>
                            <p>сб: 10:00 - 16:00 | 18:00 - 20:00</p>
                            <p>вс: 12:00 - 14:00 | 16:00 -19:00</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="map">
                <h2 class="visually-hidden">Пилатес студия на карте города</h2>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A59bbcaa30455e57a81c5202af2f1678d83a77961b5ce07b553a3656a59840780&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </section>
        </section>`
    );
};

export default class Contact extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createContactTemplate();
    }
}