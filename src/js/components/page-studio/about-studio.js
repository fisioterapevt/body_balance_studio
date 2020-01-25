import AbstractComponent from '../abstract-component';

const createAboutStudioTemplate = () => {
  return (
    `<section class="about-studio">
        <h1 class="about-studio__title">О нашей студии</h1>
        <p class="about-studio__text">
            Fusion Pilates has been located in Laguna Beach, California
            for twelve years. For the past five years, Fusion has made its
            home on Pacific Coast Highway, being neighbors with local 
            favorites Las Brisas Restaurant and the Laguna Art Museum. 
            While Fusion is first and foremost a Pilates and fitness studio, 
            it finds inspiration from the ocean and themes of Southern Californian 
            lifestyle.
        </p>
    </section>`
  );
};

export default class AboutStudio extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createAboutStudioTemplate();
  }
}