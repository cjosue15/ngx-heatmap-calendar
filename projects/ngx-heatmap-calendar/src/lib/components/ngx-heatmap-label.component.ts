import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { GAP, RECT_SIZE } from '../constants';

@Component({
  selector: 'g[ngx-heatmap-label]',
  template: `
    <svg:rect
      class="fill-transparent"
      [attr.width]="30"
      height="11"
      rx="2"
      ry="2"
      x="0"
      [attr.y]="yPosition"
    ></svg:rect>
    <svg:text
      dominant-baseline="central"
      text-anchor="start"
      class="fill-current text-small"
      style="alignmentBaseline: text-before-edge"
      x="0"
      [attr.y]="yPosition"
    >
      {{ label }}
    </svg:text>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-heatmap-label',
  },
})
export class NgxHeatmapLabel implements OnInit {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) index!: number;

  yPosition = 0;

  ngOnInit() {
    this.yPosition = this.index * (RECT_SIZE + GAP);
  }
}
