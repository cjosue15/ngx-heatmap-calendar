import { EventEmitter } from '@angular/core';

export interface HeatMapDate {
  date: Date;
  value: number | null;
}

export interface HeatMapProps extends HeatMapEvents {
  startDate: Date;
  endDate: Date;
  dates: HeatMapDate[];
  classForValue?: (value: HeatMapDate) => string;
}

export interface CellData extends HeatMapDate {
  cssClass: string;
}

export interface CellProps extends HeatMapEvents {
  dayIndex: number;
  weekIndex: number;
  data: CellData;
}

export interface HeatMapEvent {
  event: Event;
  data: CellData;
}

interface HeatMapEvents {
  onClickCell: EventEmitter<HeatMapEvent>;
  onMouseEnterCell: EventEmitter<HeatMapEvent>;
  onMouseLeaveCell: EventEmitter<HeatMapEvent>;
}
