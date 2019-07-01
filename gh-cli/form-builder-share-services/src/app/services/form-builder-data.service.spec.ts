import { TestBed } from '@angular/core/testing';

import { FormBuilderDataService } from './form-builder-data.service';

describe('FormBuilderDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBuilderDataService = TestBed.get(FormBuilderDataService);
    expect(service).toBeTruthy();
  });
});
