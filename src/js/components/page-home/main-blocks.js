import AbstractComponent from '../abstract-component';

const createMainListBlocksTemplate = () => {
  return (
    `<div class="main-blocks">
        <ul class="main-blocks__list">
            <li class="main-blocks__item main-blocks__item--first">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon"></div>
                  <h2 class="main-blocks__slide-head">A SPACE DEDICATED TO PASSION, FITNESS, AND WELLNESS</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">We are a pilates and fitness studio located in the heart of Laguna Beach, California. We carry state-of-the-art equipment and have some of the best instructors in the community.</p>
                  <button class="main-blocks__hide-button">О студии</button>
              </div>
            </li>
            <li class="main-blocks__item main-blocks__item--second">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon"></div>
                  <h2 class="main-blocks__slide-head">A SPACE DEDICATED TO PASSION, FITNESS, AND WELLNESS</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">We are a pilates and fitness studio located in the heart of Laguna Beach, California. We carry state-of-the-art equipment and have some of the best instructors in the community.</p>
                  <button class="main-blocks__hide-button">О нас</button>
              </div>
            </li>
            <li class="main-blocks__item main-blocks__item--third">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon"></div>
                  <h2 class="main-blocks__slide-head">A SPACE DEDICATED TO PASSION, FITNESS, AND WELLNESS</h2>
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