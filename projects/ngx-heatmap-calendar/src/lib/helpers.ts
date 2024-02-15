import { DAYS_IN_WEEK, MILISECONDS_IN_DAY, mapedDays } from './constants';

export const getRange = (count: number) =>
  Array.from({ length: count }, (_, i) => i);

export const convertToDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const getNumberDays = (startDate: Date, endDate: Date) => {
  const timeDiff =
    new Date(endDate.setHours(0, 0, 0, 0)).getTime() -
    new Date(startDate.setHours(0, 0, 0, 0)).getTime();

  const differenceInDays = timeDiff / MILISECONDS_IN_DAY;

  return Math.abs(Math.round(differenceInDays));
};

export const getWeeksCount = (startDate: Date, endDate: Date) => {
  const days =
    getNumberDays(startDate, endDate) +
    getEmptyDaysAtStart(startDate) +
    getEmptyDaysAtEnd(endDate);
  const weeks = days / DAYS_IN_WEEK;
  return Math.round(weeks);
};

export const getEmptyDaysAtStart = (startDate: Date) => {
  const key = convertToDate(startDate)
    .getDay()
    .toString() as keyof typeof mapedDays;
  return mapedDays[key];
};

export const getEmptyDaysAtEnd = (endDate: Date) => {
  const key = convertToDate(endDate)
    .getDay()
    .toString() as keyof typeof mapedDays;
  return DAYS_IN_WEEK - 1 - mapedDays[key];
};

// returns a new date shifted a certain number of days (can be negative)
export function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
