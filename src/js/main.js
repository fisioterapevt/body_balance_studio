import PopupMailComponent from './components/popup/popup-mail';

import HeaderInnerComponent from './components/header-inner';
import MainInnerComponent from './components/page-home/main-inner';
import FooterInnerComponent from './components/footer/footer-inner';

import HeaderController from './controllers/header-controller';
import PageController from './controllers/page-controller';
import FooterController from './controllers/footer-controller';

import PageModel from './models/pageModel';
import PopupModel from './models/popupModel';

import {render, RenderPosition} from './utils/render'

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

  const headerInnerComponent = new HeaderInnerComponent();
  render(siteHeaderElement, headerInnerComponent, RenderPosition.BEFOREEND); // меню главное

  const mainInnerComponent = new MainInnerComponent();
  render(siteMainElement, mainInnerComponent, RenderPosition.BEFOREEND);

  const footerInnerComponent = new FooterInnerComponent();
  render(siteFooterElement, footerInnerComponent, RenderPosition.BEFOREEND);


  const pageModel = new PageModel();

  const popupModel = new PopupModel();

  const headerController = new HeaderController(headerInnerComponent, pageModel, popupModel);
  headerController.render();

  const pageController = new PageController(mainInnerComponent, pageModel);
  pageController.render();

  const footerController = new FooterController(footerInnerComponent, pageModel);
  footerController.render();

  // const popupController = new PopupController(new PopupMailComponent(), popupModel);
  // popupController.render();