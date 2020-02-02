import AbstractComponent from './abstract-component';

const createTopBarHeaderTemplate = () => {
    return (
        `<container class="top-bar">
            <a href="tel:+78125556666" class="top-bar__phone-icon" title="phone">
                <svg width="512" height="512" viewBox="0 0 512 512">
                    <use xlink:href="assets/img/sprite.svg#phone-volume-icon"></use>
                </svg>
             </a>
            <div class="top-bar__wrap">
               <a class="top-bar__contact-link" href="tel:+78125556666">
                 <span>+7 (777) 777-77-77</span>
               </a>
            </div>
        </container>`
    );
};

export default class TopBarHeader extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createTopBarHeaderTemplate();
    }

}