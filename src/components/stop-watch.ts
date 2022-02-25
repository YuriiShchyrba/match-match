import BaseComponent from './base-component';

export default class StopWatch extends BaseComponent {
  private seconds: number;

  private minutes: number;

  private stopTime: boolean;

  constructor() {
    super('div', ['stop-watch']);
    this.seconds = 0;
    this.minutes = 0;
    this.element.innerHTML = '00:00';
    this.stopTime = true;
  }

  startStopWatch():void {
    if (this.stopTime === true) {
      this.stopTime = false;
      this.counter();
    }
  }

  stopStopWatch():void {
    if (this.stopTime === false) {
      this.stopTime = true;
    }
  }

  refreshStopWatch():void {
    this.seconds = 0;
    this.minutes = 0;
    this.element.innerHTML = '00:00';
  }

  counter():void {
    const timer = setInterval(() => {
      if (this.stopTime !== false) {
        clearInterval(timer);
        return;
      }
      let sec:string;
      let min:string;
      this.seconds += 1;
      if (this.seconds === 60) {
        this.minutes += 1;
        this.seconds = 0;
      }
      if (this.seconds < 10 || this.seconds === 0) {
        sec = `0${this.seconds.toString()}`;
      } else sec = this.seconds.toString();
      if (this.minutes < 10 || this.minutes === 0) {
        min = `0${this.minutes.toString()}`;
      } else min = this.minutes.toString();
      this.element.innerHTML = `${min}:${sec}`;
    }, 1000);
  }
}
