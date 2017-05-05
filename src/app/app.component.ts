import { Component } from '@angular/core';
            // <app-tutrials></app-tutrials>

@Component({
  selector: 'app-root',
  template: `<h1 [class.myClass]="applyClass">Angular App Component</h1>
              <h1 [style.color]="applyClass ? 'orange' : 'blue'">Apply Color</h1>
            <img [src]="src" />

            <app-child></app-child>
            <app-tutrial-part2></app-tutrial-part2>
            <input type="text" value="Angular" />`,
  styles: [ 
    `.myClass{
      color: red;
    }`
  ]
})
export class AppComponent {  
  public title = 'app works!';
  public src= "http://lorempixel.com/200/400";
  public applyClass = true;
}
