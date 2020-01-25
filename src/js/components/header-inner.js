import AbstractComponent from './abstract-component';

const createHeaderInnerTemplate = () => {
  return (
    `<div class="header-inner"></div>`
  );
};

export default class HeaderInner extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createHeaderInnerTemplate();
  }
}