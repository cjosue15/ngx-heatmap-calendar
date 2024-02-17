import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import {
  convertToDate,
  getEmptyDaysAtStart,
  getNumberDays,
  getWeeksCount,
} from './helpers';
import {
  CellData,
  HeatMapDate,
  HeatMapEvent,
  HeatMapProps,
} from './ngx-heatmap-calendar.interface';
import {
  DAYS_IN_WEEK,
  GAP,
  HEIGHT_LABEL,
  MILISECONDS_IN_DAY,
  RECT_SIZE,
  WIDTH_LABEL,
  daysLabels,
} from './constants';
import { NgxHeatmapCell } from './components/ngx-heatmap-cell.component';
import { NgxHeatmapLabel } from './components/ngx-heatmap-label.component';
import { NgxHeatmapMonth } from './components/ngx-heatmap-month.component';
import { GetRangePipe } from './pipes/getRange.pipe';
import { GetEndDayOfWeekTimePipe } from './pipes/getEndDayOfWeekTime.pipe';

const EMPTY_CLASS = 'fill-empty';

@Component({
  selector: 'ngx-heatmap-calendar',
  templateUrl: './ngx-heatmap-calendar.component.html',
  styleUrls: ['./ngx-heatmap-calendar.component.scss'],
  standalone: true,
  imports: [
    NgxHeatmapCell,
    NgxHeatmapLabel,
    NgxHeatmapMonth,
    GetRangePipe,
    GetEndDayOfWeekTimePipe,
  ],
  host: {
    class: 'ngx-heatmap-calendar',
  },
  encapsulation: ViewEncapsulation.None,
})
export class NgxHeatmapCalendar implements OnInit, HeatMapProps {
  @Input({ required: true }) startDate!: Date;

  @Input({ required: true }) endDate!: Date;

  @Input() dates: HeatMapDate[] = [];

  @Input() showMonthLabel = true;

  @Input() showDayLabel = true;

  @Input() rectSize = RECT_SIZE;

  @Input() gap = GAP;

  @Input() classForValue?: (value: HeatMapDate) => string;

  @Output() onClickCell = new EventEmitter<HeatMapEvent>();

  @Output() onMouseEnterCell = new EventEmitter<HeatMapEvent>();

  @Output() onMouseLeaveCell = new EventEmitter<HeatMapEvent>();

  days = 0;

  ngOnInit() {
    this.days = getNumberDays(this.startDate, this.endDate);
  }

  get daysInWeek() {
    return DAYS_IN_WEEK;
  }

  get heightLabel() {
    return this.showMonthLabel ? HEIGHT_LABEL : 0;
  }

  get widthLabel() {
    return this.showDayLabel ? WIDTH_LABEL : 0;
  }

  generateDataForCell(index: number): CellData {
    index = index - getEmptyDaysAtStart(this.startDate);
    const getDate = (index: number) =>
      new Date(this.startDate.getTime() + index * MILISECONDS_IN_DAY);

    const currentDate = getDate(index);

    const dateMatched = this.dates.find(
      ({ date }) => convertToDate(date).getTime() === currentDate.getTime(),
    );

    const value = dateMatched ? dateMatched.value : null;
    return {
      date: currentDate,
      value,
      cssClass: !this.classForValue
        ? EMPTY_CLASS
        : this.classForValue({ date: currentDate, value }),
    };
  }

  getEndDayOfWeek(weekIndex: number) {
    const pipe = new GetEndDayOfWeekTimePipe();
    const time = pipe.transform(weekIndex, this.startDate);

    return new Date(time);
  }

  getWidthHeatMap() {
    return (
      (this.rectSize + this.gap) * this.getWeeksCount() -
      this.gap +
      this.widthLabel
    );
  }

  getHeigthHeatMap() {
    return (
      (this.rectSize + this.gap) * DAYS_IN_WEEK - this.gap + this.heightLabel
    );
  }

  getWeeksCount() {
    return getWeeksCount(this.startDate, this.endDate);
  }

  getDayLabel(index: number) {
    return daysLabels.at(index) ?? '';
  }

  getMonthLabel(index: number) {
    return this.getEndDayOfWeek(index).toLocaleDateString('en-US', {
      month: 'short',
    });
  }

  checkIfDateIsOutRange(weekIndex: number, dayIndex: number): boolean {
    const index = this.getIndexInDays(weekIndex, dayIndex);
    const emptyDays = getEmptyDaysAtStart(this.startDate);
    return index < emptyDays || index > emptyDays + this.days;
  }

  getIndexInDays(weekIndex: number, dayIndex: number) {
    return weekIndex * DAYS_IN_WEEK + dayIndex;
  }
}
