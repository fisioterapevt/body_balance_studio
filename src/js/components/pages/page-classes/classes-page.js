import AbstractComponent from '../../abstract-component';

const createClassesPageTemplate = () => {
  return (
    `<section class="classes-page container">
      <h1 class="visually-hidden">Классы по Пилатес</h1>
    </section>`
  );
};

export default class Classes extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createClassesPageTemplate();
  }
}