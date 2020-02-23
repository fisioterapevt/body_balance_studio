import HomePageController from './home-controller';
import StudioPageController from './studio-controller';
import ContactPageController from './contact-controller';
import ClassesPageController from './classes-controller';

import {
  renderComponent
} from '../utils/render'

const renderHomePage = (container, pageModel) => {
  const homePageController = new HomePageController(container, pageModel);
  homePageController.render();
  return homePageController
}

export default class PageController {
  constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

    this._contactPageController = new ContactPageController();
    this._studioPageController = new StudioPageController();
    this._classesPageController = new ClassesPageController();

    this._onMenuItemChange = this._onMenuItemChange.bind(this);

    this._pageModel.setMenuItemChangeHandler(this._onMenuItemChange);
  }

  render() {
    if (this._pageModel._activeMenuItem === `home`) {
     renderHomePage(this._container, this._pageModel);
    }
  }

  _onMenuItemChange(menuItem) {
    const removePage = this._container.getElement().innerHTML = ``;
    switch (menuItem) { // сортирует и записывает в массив в зависимости от нажатого фильтра
      case `studio`:
        removePage;
        renderComponent(this._studioPageController, this._container);
        break;
      case `classes`:
        removePage;
        renderComponent(this._classesPageController, this._container);
        break;
      case `schedule`:
        removePage;
        // renderSchedulePage(this._container);
        break;
      case `contacts`:
        removePage;
        renderComponent(this._contactPageController, this._container)
        // renderContactPage(this._container);
        break;
      case `home`:
        removePage;
        renderHomePage(this._container, this._pageModel);
        break;
    }
    return this._container;
  }
}