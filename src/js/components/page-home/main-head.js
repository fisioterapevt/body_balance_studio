import AbstractComponent from '../abstract-component';

const createMainHeadTemplate = () => {
  return (
    `<div class="main-head">
        <h2 class="main-head__title">Добро пожаловать в Body Balance</h2>
        <p class="main-head__text">Пилатес студия Body Balance приглашает всех желающих привести себя в форму</p>
    </div>`
  );
};

export default class MainSlider extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainHeadTemplate();
  }
}