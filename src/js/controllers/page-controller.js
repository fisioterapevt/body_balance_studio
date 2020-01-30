import HomePageController from './home-controller';
import StudioPageController from './studio-controller';

const renderHomePage = (container, pageModel) => {
  const homePageController = new HomePageController(container, pageModel);
  homePageController.render();
  return homePageController
}

const renderStudioPage = (container) => {
  const studioController = new StudioPageController(container);
  studioController.render();
  return studioController
}

export default class PageController {
  constructor(container, pageModel) {
    this._container = container;
    this._pageModel = pageModel;

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
        renderStudioPage(this._container);
        break;
      case `classes`:
        removePage;
        // renderClassesPage(this._container);
        break;
      case `schedule`:
        removePage;
        // renderSchedulePage(this._container);
        break;
      case `contacts`:
        removePage;
        // renderContactsPage(this._container);
        break;
      case `home`:
        removePage;
        renderHomePage(this._container, this._pageModel);
        break;
    }
    return this._container;
  }
}