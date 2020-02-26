import { HeroService } from './../hero.service';
// import { HEROES } from './../mock-heroes';
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
  
  // selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }


  getHeroes(): void{
    this._heroService.getHeroes()
        .subscribe(heroes=> this.heroes = heroes);
  }

  add(name: string): void{
    name = name.trim();
    if(!name) { return; }
    this._heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {

    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero).subscribe();
  }
  
}
