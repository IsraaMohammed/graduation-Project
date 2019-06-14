import { TestBed } from '@angular/core/testing';

import { ServecesService } from './serveces.service';

describe('ServecesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServecesService = TestBed.get(ServecesService);
    expect(service).toBeTruthy();
  });
});
