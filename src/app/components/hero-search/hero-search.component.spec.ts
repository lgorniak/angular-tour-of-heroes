import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from 'src/app/services/hero/hero.service';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['searchHeroes']);
    heroServiceSpy.searchHeroes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
