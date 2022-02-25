import BaseComponent from './base-component';

export default class Link extends BaseComponent {
  constructor(content:string) {
    super('a', ['link']);
    this.element = this.element as HTMLAnchorElement;
    this.element.innerHTML = content;
  }

  setHREF(address:string):void {
    this.element.setAttribute('href', address);
  }
}
