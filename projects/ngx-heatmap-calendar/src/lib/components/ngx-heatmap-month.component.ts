import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { GAP, WIDTH_LABEL } from '../constants';

@Component({
  selector: 'g[ngx-heatmap-month]',
  template: `
    <svg:text
      dominant-baseline="central"
      text-anchor="start"
      class="fill-current text-month"
      style="alignmentBaseline: text-before-edge"
      [attr.x]="xPosition"
      [attr.y]="yPosition"
    >
      <ng-content />
    </svg:text>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-heatmap-month',
  },
})
export class NgxHeatmapMonth implements OnInit {
  @Input({ required: true }) index!: number;
  @Input({ required: true }) rectSize = 0;
  @Input({ required: true }) gap = 0;

  yPosition = 0;
  xPosition = 0;

  ngOnInit() {
    this.yPosition = 0;
    this.xPosition = this.index * (this.rectSize + this.gap) + WIDTH_LABEL;
  }
}
