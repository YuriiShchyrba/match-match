export default class Input {
  element: HTMLInputElement;

  constructor(styles: string[] = [], id:string, type:string) {
    this.element = document.createElement('input');
    this.element.classList.add(...styles);
    this.element.type = type;
    this.element.id = id;
    this.element.placeholder = id.toUpperCase();
  }

  getValue(): string {
    return this.element.value;
  }
}
