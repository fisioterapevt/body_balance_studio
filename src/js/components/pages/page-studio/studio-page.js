import AbstractComponent from '../../abstract-component';

const createStudioPageTemplate = () => {
  return (
    `<section class="studio-page container"></section>`
  );
};

export default class StudioPage extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createStudioPageTemplate();
  }
}