import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageService } from '../../services/messages/message.service';
import { Hero } from '../../interfaces/hero';
import { HEROES } from './../mock.heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroesAsync(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer) => {
      setTimeout(() => {
        observer.next(HEROES);
        this.messageService.add('HeroService: fetched heroes');
      }, 1000);
    });
  }
}
