import { Component, OnInit } from '@angular/core';
import { Donut } from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card *ngFor="let donut of donuts; trackBy: trackById" [donut]="donut"></donut-card>
        <div *ngFor="let donut of donuts; index as i; odd as o; even as e"
          [style.color]="o? 'red':'blue'">
          {{i+1}}
          {{o}}
          {{e}}
        </div>
      </ng-container>

      <ng-template #nothing>
        <p>No Donuts here....</p>
      </ng-template>
    </div>
  `,
  styles: [ ]
})
export class DonutListComponent implements OnInit {

  donuts!: Donut[];
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
        promo: true,
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
  }

  trackById(index:number, value: Donut) {
    return value.id
  }

}
