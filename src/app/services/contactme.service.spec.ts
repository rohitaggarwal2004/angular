import { TestBed } from '@angular/core/testing';

import { ContactmeService } from './contactme.service';

describe('ContactmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactmeService = TestBed.get(ContactmeService);
    expect(service).toBeTruthy();
  });
});
