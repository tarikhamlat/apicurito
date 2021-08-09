import { TestBed } from '@angular/core/testing';

import { OasCreationService } from './oas-creation.service';

describe('OasCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OasCreationService = TestBed.get(OasCreationService);
    expect(service).toBeTruthy();
  });
});
