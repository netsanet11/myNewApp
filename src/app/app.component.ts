import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  componentCounterValue: number = -1;

   counter(counter: number){
     this.componentCounterValue = counter;
   }

}
