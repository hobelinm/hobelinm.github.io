import { TestBed, inject } from '@angular/core/testing';

import { CommManagerService } from './comm-manager.service';

describe('CommManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommManagerService]
    });
  });

  it('should be created', inject([CommManagerService], (service: CommManagerService) => {
    expect(service).toBeTruthy();
  }));
});
