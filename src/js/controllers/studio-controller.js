import StudioPageComponent from '../components/pages/page-studio/studio-page';
import AboutStudioComponent from '../components/blocks/about-studio/about-studio';
import OurTeachersComponent from '../components/blocks/our-teachers/our-teachers';

import {render, RenderPosition} from '../utils/render'

export default class MainStudioPageController {
    constructor(container) {
        this._container = container;

        this._studioPageComponent = new StudioPageComponent();
        this._aboutStudioComponent = new AboutStudioComponent();
        this._ourTeachersComponent = new OurTeachersComponent();
    }

    render() {
        render(this._container.getElement(), this._studioPageComponent, RenderPosition.BEFOREEND); // отрисовывается слайдер на главной странице

        const container = this._studioPageComponent.getElement();
        render(container, this._aboutStudioComponent, RenderPosition.BEFOREEND);
        render(container, this._ourTeachersComponent, RenderPosition.BEFOREEND);
    }

}