import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageService } from '../../services/messages/message.service';
import { Hero } from '../../interfaces/hero';
import { HEROES } from './../mock.heroes';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find((hero) => hero.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
