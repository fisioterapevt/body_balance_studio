import ClassesPageComponent from '../components/pages/page-classes/classes-page';
import OurClassesComponent from '../components/blocks/our-classes/our-classes';

import {
    render,
    RenderPosition,
    renderComponent
} from '../utils/render'

export default class ClassesPageController {
    constructor(container) {
        this._container = container;
        this._classesPageComponent = new ClassesPageComponent();
        this._ourClassesComponent = new OurClassesComponent();
    }

    render() {
        render(this._container.getElement(), this._classesPageComponent, RenderPosition.BEFOREEND);

        const classesContainer = this._classesPageComponent.getElement();
        render(classesContainer, this._ourClassesComponent, RenderPosition.BEFOREEND);
    }
}