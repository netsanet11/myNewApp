import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1', 
  template: `<div class="btn"><button (click)="decrease()">-</button>{{counterValue}}<button (click)="increase()">+</button></div>`,
  styles: [`.btn {border: 2px solid green}`]


})
export class Counter {

 private counterValue: number;
  
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();
  }

  @Input() 
  set counter(counter: number) {  
    this.counterValue = counter || 0;
  }

  increase() {
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }



}
