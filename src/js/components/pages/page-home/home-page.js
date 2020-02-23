import AbstractComponent from '../../abstract-component';

const createHomePageTemplate = () => {
  return (
    `<section class="home-page container"></section>`
  );
};

export default class HomePage extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createHomePageTemplate();
  }
}