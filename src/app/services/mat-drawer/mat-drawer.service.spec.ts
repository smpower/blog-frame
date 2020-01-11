import { TestBed } from '@angular/core/testing';

import { MatDrawerService } from './mat-drawer.service';

describe('MatDrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatDrawerService = TestBed.get(MatDrawerService);
    expect(service).toBeTruthy();
  });
});
