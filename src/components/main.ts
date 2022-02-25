import BaseComponent from './base-component';
import Form from './form';
import Router from './router';

export default class Main extends BaseComponent {
  private router: Router;

  constructor() {
    super('main', ['main']);
    this.router = new Router();
    this.element.appendChild(this.router.getRout('default').element);
  }

  changeInsight(address: string): void {
    this.element.innerHTML = '';
    this.router = new Router();
    const element2 = this.router.getRout(address).element;
    console.log(element2);
    if (address === 'form') {
      if (new Form() instanceof Form) {
        console.log('yes');
      }
    }
    this.element.appendChild(element2);
  }
}
