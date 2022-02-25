/* eslint-disable @typescript-eslint/no-unused-expressions */
import BaseComponent from './base-component';
import Form from './form';
import GameField from './game-field';

export default class Router {
  private gameField: GameField;

  private default: BaseComponent;

  private base: BaseComponent;

  private form: Form;

  constructor() {
    this.gameField = new GameField(['./assets/gallery_3.png', './assets/gallery_3.png', './assets/gallery_4.png', './assets/gallery_4.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png']);
    this.default = new BaseComponent('div', ['helper']);
    this.base = new BaseComponent('div', ['helper2']);
    this.form = new Form();
  }

  getRout(name:string): BaseComponent {
    const defaultRout = {
      name: 'default',
      content: this.default,
    };
    const routers = [{
      name: 'game',
      content: new GameField(['./assets/gallery_3.png', './assets/gallery_3.png', './assets/gallery_4.png', './assets/gallery_4.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png']),
    },
    {
      name: 'form',
      content: new Form(),
    },
    ];
    // eslint-disable-next-line array-callback-return
    let result;
    for (let i = 0; i < routers.length; i += 1) {
      if (routers[i].name === name) {
        result = routers[i].content;
        break;
      }
    }
    return result || defaultRout.content;
  }
}
