import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from '../messages/message.service';
import { ErrorService } from '../error/error.service';

describe('HeroService', () => {
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService, ErrorService],
    });

    heroService = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });
});
