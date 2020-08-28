import { TestBed } from '@angular/core/testing';

import { FilltextService } from './filltext.service';

describe('FilltextService', () => {
  let service: FilltextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilltextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
