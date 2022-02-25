import BaseComponent from './base-component';

export default class Card extends BaseComponent {
  public isFlipped = false;

  public img: string;

  constructor(img: string) {
    super('div', ['card']);
    this.img = img;
    this.element.innerHTML = `
            <div class="card__front" style="background-image: url(${img})"></div>
            <div class="card__back"></div>
    `;
  }

  flipFront(): Promise<void> {
    this.isFlipped = true;
    return this.flip();
  }

  flipBack(): Promise<void> {
    this.isFlipped = false;
    return this.flip(true);
  }

  flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle('flip', !isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
