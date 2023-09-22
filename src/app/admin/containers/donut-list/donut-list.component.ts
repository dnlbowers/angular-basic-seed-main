import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

import { Donut } from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";
import {DonutCardComponent} from "../../components/donut-card/donut-card.component";

@Component({
  standalone: true,
  imports: [RouterLink,NgForOf, NgIf, DonutCardComponent],
  selector: 'donut-list',
  template: `
    <div>
      <div class="donut-list-actions">
        <a routerLink="new" class="btn btn--green">
          New Donut
          <img src="./assets/img/icon/plus.svg" alt="Plus sign">
        </a>
      </div>
      <ng-container *ngIf="donuts?.length; else nothing">
        <donut-card *ngFor="let donut of donuts; trackBy: trackById" [donut]="donut"></donut-card>
      </ng-container>

      <ng-template #nothing>
        <p>No Donuts here....</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .donut-list {
      &-actions {
        margin-bottom: 10px;
      }
    }
  `, ]
})
export class DonutListComponent implements OnInit {

  donuts!: Donut[];
  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => {
      this.donuts = donuts;
    });
  }

  trackById(index: number, donut: Donut) {
    return donut.id;
  }
}
