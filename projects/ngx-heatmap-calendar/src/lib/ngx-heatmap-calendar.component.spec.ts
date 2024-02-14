import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeatmapCalendarComponent } from './ngx-heatmap-calendar.component';

describe('NgxHeatmapCalendarComponent', () => {
  let component: NgxHeatmapCalendarComponent;
  let fixture: ComponentFixture<NgxHeatmapCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHeatmapCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxHeatmapCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
