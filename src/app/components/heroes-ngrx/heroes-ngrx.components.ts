import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/root-store/heroes/heroes.reducer';
import { Hero } from 'src/app/models/hero';
import { loadHeroes } from 'src/app/root-store/heroes/heroes.actions';

@Component({
  selector: 'app-heroes-ngrx',
  templateUrl: './heroes-ngrx.component.html',
  styleUrls: ['./heroes-ngrx.component.css'],
})
export class HeroesNgrxComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private store: Store<State>) {
    this.heroes$ = this.store.select('heroes');
  }

  ngOnInit(): void {
    console.log('init works');
    this.store.dispatch(loadHeroes());
  }

  //   getHeroes(): void {
  //     this.heroService.getHeroes().subscribe((heroes) => {
  //       this.store.dispatch(getHeroes());
  //     });
  //   }
}
