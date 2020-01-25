import AbstractComponent from './abstract-component';

const createLogoHeaderTemplate = () => {
  return (
    `<a class="logo" href="https://www.bodybalance.kz">
        <picture>
          <source media="(min-width: 1280px)" srcset="assets/img/logo-desktop.png" alt="logo studio BodyBalance" width="500" height="208">
          <source media="(min-width: 768px)" srcset="assets/img/logo-tablet.png" alt="logo studio BodyBalance" width="300" height="125">
          <img src="assets/img/logo-mobile.png" alt="logo studio BodyBalance" width="120" height="50">
        </picture>
    </a>`
  );
};

export default class LogoHeader extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createLogoHeaderTemplate();
  }
}