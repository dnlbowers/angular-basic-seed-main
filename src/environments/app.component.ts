import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <!-- this is sugar syntax for... -->
      <h1>
        {{message.length ? message : 'Nothing here...'}}
      </h1>
      <!-- ...this -->
      <h1 [innerText]="message"></h1>
      <input [value]="message">
        <!--some example of templating syntax
        {{message === 'Hello Bill'}}
        {{message === 'Hello World!'}}
        {{message.length }}
        {{message.length < 12 }}
        {{message}}-->
    </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  constructor() {
    // instead of initialising here
    // this.message = 'hello World!'
  }
  ngOnInit() {
    // we do it here and adding ! to were the type is declared with message!: string;
    this.message = 'Hello World!';
  }
}
