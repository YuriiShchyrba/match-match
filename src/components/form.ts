import BaseComponent from './base-component';
import Button from './button';
import Input from './input';
import DataBase from './database';

export default class Form extends BaseComponent {
  private inputs : Input[];

  private button: Button;

  private db: DataBase;

  constructor() {
    super('form', ['form']);
    this.inputs = [];
    this.inputs.push(new Input(['input'], 'name', 'text'));
    this.inputs.push(new Input(['input'], 'surname', 'text'));
    this.inputs.push(new Input(['input'], 'email', 'email'));
    this.inputs.forEach((input) => {
      this.element.append(input.element);
    });
    this.button = new Button(['button'], 'submit', 'Submit');
    this.element.append(this.button.element);
    this.db = new DataBase();
    this.db.init('gameDB');
    this.button.element.addEventListener('click', () => {
      this.inputs.forEach((input) => {
        console.log(input.getValue());
      });
    });
  }
}
