import { TestBed } from '@angular/core/testing';

import { CarRentalDetailService } from './car-rental-detail.service';

describe('CarRentalDetailService', () => {
  let service: CarRentalDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRentalDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
