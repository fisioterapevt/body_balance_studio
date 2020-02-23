import AbstractComponent from '../../abstract-component';


const createMainSliderTemplate = () => {
  return (
    `<div class="main-slider">
      <ul class="main-slider__list">
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-1.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-2.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-3.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-4.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-5.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-6.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <img class="main-slider__image" src="assets/img/jpg/studio-7.jpg" alt="photo studio BodyBalance" width="1024" height="711">
        </li>
        <li class="main-slider__item">
          <picture>
                <source media="(min-width: 1280px)" srcset="assets/img/jpg/studio-8-desktop.jpg" alt="photo studio BodyBalance" width="768" height="533">
                <source media="(min-width: 768px)" srcset="assets/img/jpg/studio-8-tablet.jpg" alt="photo studio BodyBalance" width="768" height="533">
                <img class="main-slider__image" src="assets/img/jpg/studio-8-mobile.jpg" alt="photo studio BodyBalance" width="480" height="333">
          </picture>
        </li>
      </ul>
      <div class="main-slider__arrow-left"></div>
      <div class="main-slider__arrow-right"></div>
      <div class="main-slider__dots"></div>
    </div>`
  );
};

export default class MainSlider extends AbstractComponent {
  // constructor() {
  //   super();
  // }

  getTemplate() { // возвращает разметку
    return createMainSliderTemplate();
  }

  setClickOnArrowLeftHandler(handler) {
    this.getElement().querySelector(`.main-slider__arrow-left`).addEventListener(`click`, handler);
    setInterval(handler, 10000); // автоматический запуск смены слайдов
  }

  setClickOnArrowRightHandler(handler) {
    this.getElement().querySelector(`.main-slider__arrow-right`).addEventListener(`click`, handler)
  }
}