import AbstractComponent from '../abstract-component';

const createMainStudioTemplate = () => {
  return (
    `<div class="studio"></div>`
  );
};

export default class MainStudio extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainStudioTemplate();
  }
}