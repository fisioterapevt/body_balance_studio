import MailComponent from './components/blocks/popup/mail';

// import HeaderInnerComponent from './components/header-inner';
import OverlayComponent from './components/blocks/overlay/overlay';

import MainInnerComponent from './components/main/main-inner';
import FooterInnerComponent from './components/footer/footer-inner';

import HeaderController from './controllers/header-controller';
import PageController from './controllers/page-controller';
import FooterController from './controllers/footer-controller';
import MailController from './controllers/mail-controller';

import PageModel from './models/pageModel';

import {render, RenderPosition} from './utils/render'
const siteBodyElement =  document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

  // const headerInnerComponent = new HeaderInnerComponent();
  // render(siteHeaderElement, headerInnerComponent, RenderPosition.BEFOREEND); // меню главное

  render(siteBodyElement, new OverlayComponent(), RenderPosition.AFTERBEGIN);


  const mainInnerComponent = new MainInnerComponent();
  render(siteMainElement, mainInnerComponent, RenderPosition.BEFOREEND);

  const footerInnerComponent = new FooterInnerComponent();
  render(siteFooterElement, footerInnerComponent, RenderPosition.BEFOREEND);


  const pageModel = new PageModel();


  const headerController = new HeaderController(siteHeaderElement, pageModel);
  headerController.render();

  const pageController = new PageController(mainInnerComponent, pageModel);
  pageController.render();

  const footerController = new FooterController(footerInnerComponent, pageModel);
  footerController.render();
