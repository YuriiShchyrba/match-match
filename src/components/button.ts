export default class Button {
  element: HTMLButtonElement;

  constructor(styles: string[] = [], type:string, content: string) {
    this.element = document.createElement('button');
    this.element.classList.add(...styles);
    this.element.type = type;
    this.element.textContent = content;
  }
}
