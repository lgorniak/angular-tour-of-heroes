import { HeroesComponent } from './heroes.component';
import { HeroService } from '../../services/hero/hero.service';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    heroServiceSpy.getHeroes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
