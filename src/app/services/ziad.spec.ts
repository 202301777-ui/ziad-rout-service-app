import { TestBed } from '@angular/core/testing';

import { Ziad } from './ziad';

describe('Ziad', () => {
  let service: Ziad;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ziad);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
