import HomePageComponent from '../components/pages/page-home/home-page';
import MainSliderComponent from '../components/blocks/slider/main-slider';
import MainHeadComponent from '../components/pages/page-home/main-head';
import MainBlocksComponent from '../components/pages/page-home/main-blocks';
import MainQuotesComponent from '../components/blocks/quote/main-quote';
import ContactComponent from '../components/blocks/contact/contact';

import {
  render,
  remove,
  RenderPosition
} from '../utils/render'

export default class HomePageController {
  constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

    this._homePageComponent = new HomePageComponent();
    this._mainSliderComponent = new MainSliderComponent();
    this._mainHeadComponent = new MainHeadComponent();
    this._mainBlocksComponent = new MainBlocksComponent();
    this._mainQuotesComponent = new MainQuotesComponent();
    this._contactComponent = new ContactComponent();
  }

  render() {
    render(this._container.getElement(), this._mainSliderComponent, RenderPosition.BEFOREEND); // отрисовывается слайдер на главной странице
    render(this._container.getElement(), this._homePageComponent, RenderPosition.BEFOREEND);

    const container = this._homePageComponent.getElement();

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

    if (window.innerWidth < 1280) { // если экран равен или больше 1280 запускает метод для отрисовки блока с контактами
      this._renderContactComponent();
    } else {
      remove(this._contactComponent);
    }

    this._pageModel._setChangeSizeScreenHandler(() => { // вызывается при изменении экрана метод находится в pageModel
      if (window.innerWidth < 1280) { //  если ширина экрана больше 1280
        this._renderContactComponent();
      } else {
        remove(this._contactComponent);
      }
    });

  }

  _renderContactComponent() { // отрисовывает блок контактов навешивает обработчик клика для отрытия попапа
    render(this._homePageComponent.getElement(), this._contactComponent, RenderPosition.BEFOREEND); // отрисовывает контакты на главной в футере
  }

  _changeSlide(sldrElems, current) {
    for (let i = 0; i < sldrElems.length; i++) { // цикл для смены слайда
      sldrElems[i].style.opacity = '0'; // в элементе с порядковым индексом i (то есть всем элементам в массиве ) присваивается opacity 0
    }
    sldrElems[current].style.opacity = '1'; // элементу с текущим индексом присваивается опасити 1
  }
}