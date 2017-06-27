import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<{id: number, name: string; score: number; zmv: number; zmlp: number; mls: number; al: number;}>();



  heroes: Hero[];



  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  checkForCity(city) {
    for (var i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].name == city) {
        city = this.heroes[i]
        console.log('match')
        console.log(city)
        this.intervalFired.emit(city)
      }
    }
  }



}



