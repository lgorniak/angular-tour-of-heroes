import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';

describe('AppRouting', () => {
  let routing: AppRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    routing = TestBed.inject(AppRoutingModule);
  });

  it('should be created', () => {
    expect(routing).toBeTruthy();
  });
});
