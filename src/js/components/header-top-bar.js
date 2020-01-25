import AbstractComponent from './abstract-component';

const createTopBarHeaderTemplate = () => {
    return (
        `<div class="top-bar">
            <a href="tel:+78125556666" class="top-bar__phone-icon" title="phone">
                <svg width="30" height="30" viewBox="0 0 50 50">
                    <use xlink:href="assets/img/sprite.svg#logo-phone"></use>
                </svg>
             </a>
            <div class="top-bar__wrap">
               <a class="top-bar__contact-link" href="tel:+78125556666">
                 <span>+7 (777) 777-77-77</span>
               </a>
            </div>
        </div>`
    );
};

export default class TopBarHeader extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createTopBarHeaderTemplate();
    }

}