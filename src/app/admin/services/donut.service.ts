import { Injectable } from '@angular/core';
import {Donut} from "../models/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chocoholic.'
    },
    {
      id: '3u98k1',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      promo: 'new',
      description: 'Sticky perfection.'
    },
    {
      id: 'ae098s',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.'
    },
    {
      id: '8amkz9',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour advocate'
    },
    {
      id: '12M0nz',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'Delicious lucious lemon'
    },
  ];
  constructor() { }

  read() {
    return this.donuts;
  }

  readOne( id: string) {
    const donut = this.read().find(
      (donut: Donut )=> donut.id === id
    ) 
    if(donut) {
      return donut;
    }
    return { name: '', icon: '', price: 0, description: '' };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts); 
  }
}
