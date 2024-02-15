import { Pipe, PipeTransform } from '@angular/core';
import { getRange } from '../helpers';

@Pipe({
  name: 'getRange',
  standalone: true,
})
export class GetRangePipe implements PipeTransform {
  transform(value: number): number[] {
    return getRange(value);
  }
}
