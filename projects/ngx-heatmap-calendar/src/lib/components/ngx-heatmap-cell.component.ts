import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { GAP, RECT_SIZE } from '../constants';
import {
  CellData,
  CellProps,
  HeatMapEvent,
} from '../ngx-heatmap-calendar.interface';

@Component({
  selector: 'svg:g[ngx-heatmap-cell]',
  template: `
    <svg:rect
      [attr.x]="xPosition"
      [attr.y]="yPosition"
      rx="2"
      ry="2"
      [attr.width]="rectSize"
      [attr.height]="rectSize"
      [class]="data.cssClass"
      (click)="onClickCell.emit({ event: $event, data })"
      (mouseenter)="onMouseEnterCell.emit({ event: $event, data })"
      (mouseleave)="onMouseLeaveCell.emit({ event: $event, data })"
    />
  `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class NgxHeatmapCell implements OnInit, CellProps {
  @Input({ required: true }) weekIndex!: number;
  @Input({ required: true }) dayIndex!: number;
  @Input({ required: true }) data!: CellData;

  @Output() onClickCell = new EventEmitter<HeatMapEvent>();

  @Output() onMouseEnterCell = new EventEmitter<HeatMapEvent>();

  @Output() onMouseLeaveCell = new EventEmitter<HeatMapEvent>();

  rectSize = RECT_SIZE;

  xPosition = 0;
  yPosition = 0;

  ngOnInit() {
    this.xPosition = this.weekIndex * (RECT_SIZE + GAP);
    this.yPosition = this.dayIndex * (RECT_SIZE + GAP);
  }
}
