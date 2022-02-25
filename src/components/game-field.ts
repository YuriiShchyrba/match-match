import BaseComponent from './base-component';
import Card from './card';
import CardsContainer from './cards-container';
import StopWatch from './stop-watch';

export default class GameField extends BaseComponent {
  private stopWatch: StopWatch;

  private cardsContainer: CardsContainer;

  private cards: Card[];

  private activeCard?: Card;

  constructor(images: string[]) {
    super('div', ['game']);
    this.stopWatch = new StopWatch();
    this.cardsContainer = new CardsContainer();
    this.cards = images.map((url) => new Card(url));
    this.element.appendChild(this.stopWatch.element);
    this.element.appendChild(this.cardsContainer.element);
    this.cardsContainer.addCards(this.cards);
    this.startGame();
  }

  startGame(): void {
    this.preGame();
    this.cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
  }

  private async cardHandler(card: Card) {
    if (card.isFlipped) return;
    if (!this.activeCard) {
      this.activeCard = card;
      card.flipFront();
      return;
    }
    await card.flipFront();
    if (this.activeCard.img !== card.img) {
      this.activeCard.flipBack();
      card.flipBack();
    }

    this.activeCard = undefined;
    if (this.checkFlipped()) this.stopWatch.stopStopWatch();
  }

  checkFlipped(): boolean {
    let result = true;
    this.cards.forEach((card) => {
      if (!card.element.classList.contains('flip')) result = false;
    });
    return result;
  }

  preGame(): void {
    this.cards.forEach((card) => {
      card.flipFront();
    });
    const pause = setTimeout(() => {
      this.cards.forEach((card) => {
        this.stopWatch.startStopWatch();
        card.flipBack();
      });
    }, 10000);
  }
}
