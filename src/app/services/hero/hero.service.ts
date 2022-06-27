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

  getHeroes(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer) => {
      observer.next(HEROES);
      this.messageService.add('HeroService: fetched heroes');
      observer.complete();
    });
  }

  addMessage(text: string) {
    this.messageService.add(text);
  }
}
