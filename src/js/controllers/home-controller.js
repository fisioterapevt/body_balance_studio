import MainSliderComponent from '../components/page-home/main-slider';
import MainHeadComponent from '../components/page-home/main-head';
import MainBlocksComponent from '../components/page-home/main-blocks';
import MainQuotesComponent from '../components/page-home/main-quote';

import {render, RenderPosition} from '../utils/render'

export default class HomePageController {
    constructor(container) {
    this._container = container;

    this._mainSliderComponent = new MainSliderComponent;
    this._mainHeadComponent = new MainHeadComponent;
    this._mainBlocksComponent = new MainBlocksComponent;
    this._mainQuotesComponent = new MainQuotesComponent;
    }

    render() {
        const container = this._container.getElement();

        render(container, this._mainSliderComponent, RenderPosition.BEFOREEND); // отрисовывается слайдер на главной странице

        const sldrElems = this._mainSliderComponent.getElement().querySelectorAll(`.main-slider__item`); // массив слайдеров
        let current = 0; // по умолчанию индекс текущего слайдера

        this._changeSlide(sldrElems, current) // запускает первичную установку опасити для слайдеров
        this._mainSliderComponent.setClickOnArrowLeftHandler(() => { // реализует клик на элемент управления слайдером влево
          if (current + 1 === sldrElems.length) { // current+1 потому что индекс начинается с 0 а длина с 1 соответственно к индексу надо прибавить 1 что бы получить длину массива
            current = 0 // текущему элементу присваивается индекс 0
          } else {
            current++; // увеличивает индекс на единицу
          }

          this._changeSlide(sldrElems, current)
        });


        this._mainSliderComponent.setClickOnArrowRightHandler(() => { // реализует клик на элемент управления слайдером вправо
          //  прежде чем запустить метод смены слайдера, проверяем не является ли текущий элемент последним в
          //  массиве, если это так присваиваем ему индекс 0. В обратном случае увеличиваем индекс на единицу
          //  и вызываем метод для смены слайдера
          if (current - 1 === -1) { // если текущий индекс [current] минус 1 равняется -1(т.е. элемент первый в массиве с индексом [0])
            current = sldrElems.length - 1; // текущему элементу присваивается индекс [длина массива минус 1]
          } else {
            current--; // уменьшает индекс на единицу
          }

          this._changeSlide(sldrElems, current)
        });

        render(container, this._mainHeadComponent, RenderPosition.BEFOREEND); // заголовок на главной
        render(container, this._mainBlocksComponent, RenderPosition.BEFOREEND); // блоки на главной
        render(container, this._mainQuotesComponent, RenderPosition.BEFOREEND); // цитата на главной
      }

    _changeSlide(sldrElems, current) {
      for (let i = 0; i < sldrElems.length; i++ ) { // цикл для смены слайда
        sldrElems[i].style.opacity = '0'; // в элементе с порядковым индексом i (то есть всем элементам в массиве ) присваивается opacity 0
      }
      sldrElems[current].style.opacity = '1'; // элементу с текущим индексом присваивается опасити 1
    }
}