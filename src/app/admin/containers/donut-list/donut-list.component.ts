import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div>
        {{ donut.name }}
        {{ donut.price }}
      </div>
    </div>
  `,
  styles: []
})
export class DonutListComponent implements OnInit {
  donut!: any;
  donuts!: any[];
  constructor() {
    //pass
  }

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.'
      },
      {
        id: '3u98k1',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection.'
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      },
    ];
    this.donut = this.donuts[0];
    // same as using the json pipe in the template
    // this.donut = JSON.stringify(this.donuts[0]);
   }

}
