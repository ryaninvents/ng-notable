import { TestBed, inject } from '@angular/core/testing';

import { NotableService } from './notable.service';

describe('NotableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotableService]
    });
  });

  it('should be created', inject([NotableService], (service: NotableService) => {
    expect(service).toBeTruthy();
  }));
});
