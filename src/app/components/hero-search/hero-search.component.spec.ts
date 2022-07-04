import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from 'src/app/services/hero/hero.service';
import { of } from 'rxjs';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['searchHeroes']);
    heroServiceSpy.searchHeroes.and.returnValue(of([]));

    component = new HeroSearchComponent(heroServiceSpy);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
