import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from './mock.heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroesAsync(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer) => {
      setTimeout(() => {
        observer.next(HEROES);
      }, 1000);
    });
  }
}
