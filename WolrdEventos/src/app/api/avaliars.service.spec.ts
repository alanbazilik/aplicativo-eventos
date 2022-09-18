import { TestBed } from '@angular/core/testing';

import { AvaliarsService } from './avaliars.service';

describe('AvaliarsService', () => {
  let service: AvaliarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
