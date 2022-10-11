import { TestBed } from '@angular/core/testing';

import { EventTodayService } from './event-today.service';

describe('EventTodayService', () => {
  let service: EventTodayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTodayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
