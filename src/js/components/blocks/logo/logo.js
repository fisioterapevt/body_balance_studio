import AbstractComponent from '../../abstract-component';

const createLogoTemplate = () => {
  return (
    `<a class="logo" href="https://www.bodybalance.kz">
      <svg width="291" height="121" viewBox="0 0 291.11 121">
        <use xlink:href="assets/img/svg/sprite.svg#body_balance_logo"></use>
      </svg>
    </a>`
  );
};

export default class Logo extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createLogoTemplate();
  }
}