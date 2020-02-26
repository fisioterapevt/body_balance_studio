import AbstractComponent from '../../abstract-component';

const createClassesPageTemplate = () => {
  return (
    `<section class="classes-page container">
      <h1 class="our-classes__head head">Групповые классы</h1>
    </section>`
  );
};

export default class Classes extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createClassesPageTemplate();
  }
}