import { Pipe, PipeTransform } from '@angular/core';
import { convertToDate, getEmptyDaysAtStart, shiftDate } from '../helpers';
import { DAYS_IN_WEEK } from '../constants';

@Pipe({
  name: 'getEndDayOfWeekTime',
  standalone: true,
})
export class GetEndDayOfWeekTimePipe implements PipeTransform {
  transform(index: number, startDate: Date): Date {
    const startDayWithEmptyAtStart = shiftDate(
      convertToDate(startDate),
      getEmptyDaysAtStart(startDate),
    );

    return shiftDate(startDayWithEmptyAtStart, index * DAYS_IN_WEEK);
  }
}
