import AbstractComponent from './abstract-component';

const createMapTemplate = () => {
    return (
        `<section class="map">
            <h2 class="visually-hidden">Пилатес студия на карте города</h2>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A59bbcaa30455e57a81c5202af2f1678d83a77961b5ce07b553a3656a59840780&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
        </section>`
    );
};

export default class Map extends AbstractComponent {
    getTemplate() { // возвращает разметку
        return createMapTemplate();
    }
}