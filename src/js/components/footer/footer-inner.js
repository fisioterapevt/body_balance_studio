import AbstractComponent from '../abstract-component';

const createFooterInnerTemplate = () => {
  return (
    `<article class="footer-inner"></article>`
  );
};

export default class FooterInner extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createFooterInnerTemplate();
  }
}