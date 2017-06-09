import { TestBed, inject } from '@angular/core/testing';

import { ResourceManagerService } from './resource-manager.service';

describe('ResourceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceManagerService]
    });
  });

  it('should be created', inject([ResourceManagerService], (service: ResourceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
