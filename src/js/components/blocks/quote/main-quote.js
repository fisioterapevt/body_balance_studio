import AbstractComponent from '../../abstract-component';

const createMainQuoteTemplate = () => {
  return (
    `<div class="main-quote">
        <blockquote class="main-quote__text text"><em>Через десять занятий вы почувствуете разницу, через двадцать – увидите ее, а через тридцать – у вас будет совершенно новое тело</em></blockquote>
        <cite class="main-quote__autor">Джозеф Пилатес</cite>
    </div>`
  );
};

export default class MainQuote extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainQuoteTemplate();
  }
}