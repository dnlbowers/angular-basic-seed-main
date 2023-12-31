import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, of, tap } from 'rxjs';

import {Donut} from "../models/donut.model";
@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private http: HttpClient) { }

  read() {
    if (this.donuts.length){
      return of(this.donuts);
    }
    return this.http.get<Donut[]>(`/api/donuts`).pipe(
        tap((donuts) => {
          this.donuts = donuts;
        })
      );
  }

  readOne( id: string | null) {
    return this.read().pipe(
      map((donuts) => {
        const donut = donuts.find(
          (donut: Donut )=> donut.id === id
        )
        if(donut) {
          return donut;
        }
        return { name: '', icon: '', price: 0, description: '' };
      }
    ));
  }

  create(payload: Donut) {
    return this.http.post<Donut>(`api/donuts`, payload).pipe(
      tap((donut: Donut) => {
        this.donuts = [...this.donuts, donut];
      })
    )
  }

  update(payload: Donut) {
    return this.http.put<Donut>(`api/donuts/${payload.id}`, payload)
    .pipe(tap((donut) => {
      this.donuts = this.donuts.map((item: Donut) => {
        if (item.id === payload.id) {
          return donut;
        }
        return item;
      });
    }));
  }

  delete(payload: Donut) {
    return this.http.delete<Donut>(`api/donuts/${payload.id}`)
      .pipe(tap(() => {
        this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
      }));
  }
}
