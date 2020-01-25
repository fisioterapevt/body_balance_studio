import AbstractComponent from '../abstract-component';

const createMainTemplate = () => {
  return (
    `<div class="main-inner"></div>`
  );
};

export default class Main extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainTemplate();
  }
}