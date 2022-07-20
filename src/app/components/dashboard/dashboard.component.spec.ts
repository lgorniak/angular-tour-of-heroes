import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from 'src/app/services/hero/hero.service';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HEROES } from '../../services/mock.heroes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(async () => {
    const heroService = jasmine.createSpyObj<HeroService>(['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));

    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useValue: heroService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain(
      'Top Heroes'
    );
  });

  it('should call heroService', async () => {
    expect(getHeroesSpy.calls.any()).toBe(true);
  });

  it('should have four heroes', () => {
    expect(component.heroes.length).toBe(4);
  });
});
