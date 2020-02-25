import AbstractComponent from '../abstract-component';

const createMainTemplate = () => {
  return (
    `<article class="main-inner"></article>`
  );
};

export default class Main extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainTemplate();
  }
}