import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../../services/hero/hero.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>([
      'getHero',
      'updateHero',
    ]);
    heroServiceSpy.getHero.and.returnValue(of({ id: 1, name: 'test' }));
    heroServiceSpy.updateHero.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [HeroDetailComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
