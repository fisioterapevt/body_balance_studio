import AbstractComponent from '../abstract-component';

const createHeaderInnerTemplate = () => {
  return (
    `<article class="header-inner"></article>`
  );
};

export default class HeaderInner extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createHeaderInnerTemplate();
  }
}