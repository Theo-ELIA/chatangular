/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendingMessageService } from './message.service';

describe('SendingMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendingMessageService]
    });
  });

  it('should ...', inject([SendingMessageService], (service: SendingMessageService) => {
    expect(service).toBeTruthy();
  }));
});
