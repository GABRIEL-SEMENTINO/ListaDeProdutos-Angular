import { TestBed } from '@angular/core/testing';

import { CustomersListTableService } from './customers-list-table.service';

describe('CustomersListTableService', () => {
  let service: CustomersListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
