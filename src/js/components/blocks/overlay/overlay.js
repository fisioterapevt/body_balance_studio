import AbstractComponent from '../../abstract-component';

const createOverlayTemplate = () => {
  return (
    `<div class="overlay"></div>`
  );
};

export default class Overlay extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createOverlayTemplate();
  }
}