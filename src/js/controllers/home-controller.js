import HomeWrapComponent from '../components/page-home/home-wrap';
import MainSliderComponent from '../components/page-home/main-slider';
import MainHeadComponent from '../components/page-home/main-head';
import MainBlocksComponent from '../components/page-home/main-blocks';
import MainQuotesComponent from '../components/page-home/main-quote';
import ContactComponent from '../components/contact/contact';
import MapComponent from '../components/map';

import {render, remove, RenderPosition} from '../utils/render'

export default class HomePageController {
    constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

    this._homeWrapComponent = new HomeWrapComponent();
    this._mainSliderComponent = new MainSliderComponent();
    this._mainHeadComponent = new MainHeadComponent();
    this._mainBlocksComponent = new MainBlocksComponent();
    this._mainQuotesComponent = new MainQuotesComponent();
    this._contactComponent = new ContactComponent();
    this._mapComponent = new MapComponent();
    }

    render() {
        const container = this._container.getElement();
        render(container, this._homeWrapComponent, RenderPosition.BEFOREEND);

        const homeContainer = this._homeWrapComponent.getElement();
        render(homeContainer, this._mainSliderComponent, RenderPosition.BEFOREEND); // отрисовывается слайдер на главной странице

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

        render(homeContainer, this._mainHeadComponent, RenderPosition.BEFOREEND); // заголовок на главной
        render(homeContainer, this._mainBlocksComponent, RenderPosition.BEFOREEND); // блоки на главной
        render(homeContainer, this._mainQuotesComponent, RenderPosition.BEFOREEND); // цитата на главной

        if (window.innerWidth < 1280) {
          render(homeContainer,  this._contactComponent, RenderPosition.BEFOREEND); // вставляет адрес с картой на главной  странице после цитаты
            const contactContainer = container.querySelector(`.home-wrap .contact`);
            render(contactContainer, this._mapComponent, RenderPosition.BEFOREEND); // карта на главной в разделе контактов
          } else {
            remove(this._contactComponent);
          }

          this._pageModel._setChangeSizeScreenHandler(() => {
            if (window.innerWidth < 1280) { //  если ширина экрана больше 1280
              render(homeContainer,  this._contactComponent, RenderPosition.BEFOREEND); // вставляет адрес с картой на главной  странице после цитаты
              const contact = homeContainer.querySelector(`.home-wrap .contact`);
              render(contact, this._mapComponent, RenderPosition.BEFOREEND);
            } else {
              remove(this._contactComponent);
              // remove(this._mapComponent);
            }
          });
      }

    _changeSlide(sldrElems, current) {
      for (let i = 0; i < sldrElems.length; i++ ) { // цикл для смены слайда
        sldrElems[i].style.opacity = '0'; // в элементе с порядковым индексом i (то есть всем элементам в массиве ) присваивается opacity 0
      }
      sldrElems[current].style.opacity = '1'; // элементу с текущим индексом присваивается опасити 1
    }
}