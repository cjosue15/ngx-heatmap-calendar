import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HeatMapDate,
  HeatMapEvent,
  NgxHeatmapCalendar,
} from '../../../ngx-heatmap-calendar/src/public-api';
import { AngularLogo } from './angular-logo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxHeatmapCalendar, AngularLogo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  startDate = new Date(2024, 0, 1);
  endDate = new Date(2024, 11, 31);

  dates: HeatMapDate[] = generateDummyData();

  callBackCssClass = ({ value }: HeatMapDate) => {
    switch (value) {
      case 1:
        return 'fill-value-1';
      case 2:
        return 'fill-value-2';
      case 3:
        return 'fill-value-3';
      case 4:
        return 'fill-value-4';
      default:
        return 'fill-value-0';
    }
  };

  constructor() {
    console.log(this.dates);
  }

  // onClickCell(event: HeatMapEvent) {
  //   console.log(event);
  // }
  //
  // mouseEnter(event: HeatMapEvent) {
  //   console.log(event);
  // }
  //
  // mouseLeave(event: HeatMapEvent) {
  //   console.log(event);
  // }
}

function generateRandomDate(startDate: Date, endDate: Date) {
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  );
}

function generateDummyData() {
  const startDate = new Date(2024, 0, 1);
  const endDate = new Date(2024, 11, 31);

  const dummyData = [];

  for (let i = 0; i < 100; i++) {
    const randomDate = generateRandomDate(startDate, endDate);
    const randomValue =
      Math.random() < 0.3 ? null : Math.floor(Math.random() * 5);

    const record: HeatMapDate = {
      date: randomDate,
      value: randomValue,
    };

    dummyData.push(record);
  }

  return dummyData;
}
