import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero:Hero = {
  //   id:1,
  //   name:"IronMan"
  // };

  heroes: Hero[];
  
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;

  }


  getHeroes(): void{
    this.heroService.getHeroes()
        .subscribe(heroes=> this.heroes = heroes);
  }
  
}
