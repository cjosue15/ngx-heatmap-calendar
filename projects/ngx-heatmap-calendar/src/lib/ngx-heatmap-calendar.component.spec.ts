import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeatmapCalendar } from './ngx-heatmap-calendar.component';

describe('NgxHeatmapCalendarComponent', () => {
  let component: NgxHeatmapCalendar;
  let fixture: ComponentFixture<NgxHeatmapCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHeatmapCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxHeatmapCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
