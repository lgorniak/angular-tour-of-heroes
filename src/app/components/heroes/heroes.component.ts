import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroesAsync();
  }

  getHeroesAsync(): void {
    this.heroService.getHeroesAsync().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.heroService.addMessage(`HeroService: Selected hero id=${hero.id}`);
  }
}
