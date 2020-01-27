import AbstractComponent from '../abstract-component';

const createMainListBlocksTemplate = () => {
  return (
    `<div class="main-blocks">
        <ul class="main-blocks__list">
            <li class="main-blocks__item main-blocks__item--first" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="90" height="90" viewBox="0 0 90 90">
                      <use xlink:href="assets/img/sprite.svg#question"></use>
                    </svg>
                  </div>
                  <h2 class="main-blocks__slide-head">Пилатес это</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">We are a pilates and fitness studio located in the heart of Laguna Beach, California. We carry state-of-the-art equipment and have some of the best instructors in the community.</p>
                  <button class="main-blocks__hide-button">О студии</button>
              </div>
            </li>
            <li class="main-blocks__item main-blocks__item--second" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="70" height="70" viewBox="0 0 70 70">
                      <use xlink:href="assets/img/sprite.svg#man"></use>
                    </svg>
                  </div>
                  <h2 class="main-blocks__slide-head">Кому подходит Пилатес</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">We are a pilates and fitness studio located in the heart of Laguna Beach, California. We carry state-of-the-art equipment and have some of the best instructors in the community.</p>
                  <button class="main-blocks__hide-button">О нас</button>
              </div>
            </li>
            <li class="main-blocks__item main-blocks__item--third" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="70" height="70" viewBox="0 0 70 70">
                      <use xlink:href="assets/img/sprite.svg#checkmark"></use>
                    </svg>
                  </div>
                  <h2 class="main-blocks__slide-head">Польза от Пилатес</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">We are a pilates and fitness studio located in the heart of Laguna Beach, California. We carry state-of-the-art equipment and have some of the best instructors in the community.</p>
                  <button class="main-blocks__hide-button">О нас</button>
              </div>
            </li>
        </ul>
    </div>`
  );
};

export default class MainListBlocks extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createMainListBlocksTemplate();
  }
}