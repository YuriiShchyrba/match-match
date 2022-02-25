import Header from './components/header';
import Link from './components/link';
import Logo from './components/logo';
import Main from './components/main';
import Menu from './components/menu';

export default class App {
  private rootElement: HTMLElement;

  private readonly header: Header;

  private readonly logo: Logo;

  private readonly menu: Menu;

  private readonly links: Link[];

  private readonly main: Main;

  constructor(rootElement:HTMLElement) {
    this.rootElement = rootElement;
    this.header = new Header();
    this.logo = new Logo();
    this.menu = new Menu();
    this.links = [];
    this.links.push(new Link('About Game'));
    this.links.push(new Link('Best Score'));
    this.links.push(new Link('Game settings'));
    this.links[0].setHREF('#form');
    this.links[1].setHREF('#game');
    this.links[2].setHREF('#about');
    this.main = new Main();
    this.rootElement.appendChild(this.header.element);
    this.header.element.appendChild(this.logo.element);
    this.header.element.appendChild(this.menu.element);
    this.links.forEach((link) => {
      this.menu.element.appendChild(link.element);
    });
    this.links.forEach((link) => {
      link.element.addEventListener('click', () => {
        const address = link.element.getAttribute('href');
        this.main.changeInsight(address?.slice(1) || 'default');
      });
    });
    this.rootElement.appendChild(this.main.element);
  }
}
