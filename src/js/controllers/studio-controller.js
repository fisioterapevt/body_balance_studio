import MainStudioComponent from '../components/page-studio/studio';
import AboutStudioComponent from '../components/page-studio/about-studio';
// import MainBlocksComponent from '../components/page-home/main-blocks';
// import MainQuotesComponent from '../components/page-home/main-quote';

import {render, RenderPosition} from '../utils/render'

export default class MainStudioPageController {
    constructor(container) {
        this._container = container;

        this._mainStudioComponent = new MainStudioComponent();
        this._aboutStudioComponent = new AboutStudioComponent();
        // this._mainBlocksComponent = new MainBlocksComponent;
        // this._mainQuotesComponent = new MainQuotesComponent;
    }

    render() {
        const container = this._container.getElement();

        render(container, this._mainStudioComponent, RenderPosition.BEFOREEND); // отрисовывается слайдер на главной странице
        render(container, this._aboutStudioComponent, RenderPosition.BEFOREEND);
    }

}