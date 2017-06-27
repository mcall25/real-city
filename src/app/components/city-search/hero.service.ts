/**
 * Created by codev on 6/19/17.
 */
import {Injectable, OnInit, EventEmitter} from '@angular/core';

import { Hero } from './hero';
import { HEROES } from '../../mock-heroes';

@Injectable()
export class HeroService implements OnInit{


  match = new EventEmitter<any>();

  updateEvent = new EventEmitter<string>();

  data;

  getHeroes(): Hero[] {
    return HEROES;
  }

  ngOnInit(): void {
   this.data = HEROES
    console.log(this.data)
  }






}
