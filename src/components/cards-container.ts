import BaseComponent from './base-component';
import Card from './card';

export default class CardsContainer extends BaseComponent {
  private cards: Card[];

  constructor() {
    super('div', ['cards-container']);
    this.cards = [];
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => {
      this.element.appendChild(card.element);
    });
  }
}
