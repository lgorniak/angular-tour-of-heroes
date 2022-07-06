import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from 'src/app/services/hero/hero.service';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    heroServiceSpy.getHeroes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
