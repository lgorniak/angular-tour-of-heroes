import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from 'src/app/services/hero/hero.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    heroServiceSpy.getHeroes.and.returnValue(of([]));

    component = new DashboardComponent(heroServiceSpy);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
