import AbstractComponent from '../abstract-component';

const createHomeWrapTemplate = () => {
  return (
    `<section class="home-wrap"></section>`
  );
};

export default class HomeWrap extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createHomeWrapTemplate();
  }
}