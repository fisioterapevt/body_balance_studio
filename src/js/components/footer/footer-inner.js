import AbstractComponent from '../abstract-component';

const createFooterInnerTemplate = () => {
  return (
    `<div class="footer-inner"></div>`
  );
};

export default class FooterInner extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createFooterInnerTemplate();
  }
}