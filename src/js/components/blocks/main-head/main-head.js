import AbstractComponent from '../../abstract-component';

const createMainHeadTemplate = () => {
  return (
    `<div class="main-head">
        <h1 class="main-head__title head">Добро пожаловать в Body Balance</h1>
        <p class="main-head__text text">Пилатес студия Body Balance приглашает всех желающих привести себя в форму</p>
    </div>`
  );
};

export default class MainSlider extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainHeadTemplate();
  }
}