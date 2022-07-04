import { HeroesComponent } from './heroes.component';
import { HeroService } from '../../services/hero/hero.service';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    heroServiceSpy.getHeroes.and.returnValue(of([]));

    component = new HeroesComponent(heroServiceSpy);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
