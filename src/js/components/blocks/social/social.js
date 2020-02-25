import AbstractComponent from '../../abstract-component';

const createSocialTemplate = () => {
    return (
        `<ul class="social">
           <li>
                <a href="https://www.facebook.com" title="facebook">
                  <svg class="social-icon" width="50" height="50" viewBox="0 0 512 512">
                     <use xlink:href="assets/img/svg/sprite.svg#facebook"></use>
                   </svg>
                </a>
           </li>
            <li>
             <a href="https://www.instgram.com" title="instagram">
                <svg class="social-icon" width="50" height="50" viewBox="0 0 512 512">
                    <use xlink:href="assets/img/svg/sprite.svg#instagram"></use>
                </svg>
             </a>
          </li>
        </ul>`
    );
};

export default class Social extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createSocialTemplate();
    }
}