import AbstractComponent from '../../abstract-component';

const createMainListBlocksTemplate = () => {
  return (
    `<div class="main-blocks">
        <ul class="main-blocks__list">
            <li class="main-blocks__item main-blocks__item--first" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="297.12" height="300" viewBox="0 0 297.12 300">
                      <use xlink:href="assets/img/svg/sprite.svg#pilates-hundred"></use>
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
                    <svg width="357.3" height="300" viewBox="0 0 357.34 300">
                      <use xlink:href="assets/img/svg/sprite.svg#t-plank"></use>
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
                    <svg width="340.45" height="300" viewBox="0 0 340.45 300">
                      <use xlink:href="assets/img/svg/sprite.svg#swan"></use>
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