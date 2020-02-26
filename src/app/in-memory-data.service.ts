import { Injectable } from '@angular/core';
//import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id:1, name:"SuperMan"},
      { id:2, name:"SpiderMan"},
      { id:3, name:"Captain America"},
      { id:4, name:"WonderWoman"},
      { id:5, name:"Dr Strange"},
      { id:6, name:"AntMan"},
      { id:7, name:"MachineMan"},
    ];
    return {heroes};

  }

   // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length>0 ? Math.max(...heroes.map(hero => hero.id)) + 1 :1;
  }
  constructor() { }
}
