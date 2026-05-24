import { TestBed } from '@angular/core/testing';

import { QuestService } from './questService';

describe('Quest', () => {
  let service: QuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
