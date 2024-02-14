import { TestBed } from '@angular/core/testing';

import { NgxHeatmapCalendarService } from './ngx-heatmap-calendar.service';

describe('NgxHeatmapCalendarService', () => {
  let service: NgxHeatmapCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHeatmapCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
