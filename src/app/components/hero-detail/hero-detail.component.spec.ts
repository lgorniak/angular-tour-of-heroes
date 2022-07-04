import { TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../../services/hero/hero.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>([
      'getHero',
      'updateHero',
    ]);
    heroServiceSpy.getHero.and.returnValue(of({ id: 1, name: 'test' }));
    heroServiceSpy.updateHero.and.returnValue(of({}));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [],
      providers: [
        HeroDetailComponent,
        { provide: HeroService, useValue: heroServiceSpy },
      ],
    });

    component = TestBed.inject(HeroDetailComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
