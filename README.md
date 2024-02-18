# Ngx Heatmap Calendar

This is a simple heatmap calendar component for Angular 17+.

### Installation

```bash
npm install ngx-heatmap-calendar
```

> [!WARNING]
> Be careful with the dates:
> if you use the dates in this way, `new Date('2024-01-01')` the result is one day before because of your timezone.
> but if yo set the date like this `new Date(2024,0,1)` the reslt is `2024-01-01T00:00:00.000` because the timezone is not considered and the day is correct.
> This library uses the date format set by your browser, and assumes that you are passing the correct day with the times in `00:00:00`, so it can correctly match with the array of dates
> You can control by yourself the date format and the time, or you can use a library like `date-fns` or `dayjs` to handle the dates.

### Inputs

| Input          |      Type       | Required |                                Description |
| -------------- | :-------------: | -------: | -----------------------------------------: |
| startDate      |      Date       |      Yes |                Start date for the calendar |
| endDate        |      Date       |      Yes |                  End date for the calendar |
| dates          | `HeatMapDate[]` |       No |      Dates to be displayed on the calendar |
| showMonthLabel |     boolean     |       No |       Show the month label on the calendar |
| showDayLabel   |     boolean     |       No |         Show the day label on the calendar |
| rectSize       |     number      |       No |      Size of the rectangle on the calendar |
| gap            |     number      |       No | Gap between the rectangles on the calendar |
| classForValue  |    Function     |       No |   Function to return a class for the value |

### Outputs

| Output           | Type                        | Description                        |
| ---------------- | --------------------------- | ---------------------------------- |
| onClickCell      | `EventEmitter<HeatMapDate>` | Emits when a cell is clicked       |
| onMouseEnterCell | `EventEmitter<HeatMapDate>` | Emits when the mouse enters a cell |
| onMouseLeaveCell | `EventEmitter<HeatMapDate>` | Emits when the mouse leaves a cell |

### Examples

#### Basic usage:

The `ngx-heatmap-calendar` needs a start and end date to display the calendar.
With these inputs, the calendar will display each day with the time in `00:00:00`.

```ts
startDate = new Date(2024, 0, 1);
endDate = new Date(2024, 11, 31);

<ngx-heatmap-calendar
  [startDate]="startDate"
  [endDate]="endDate"
/>
```

#### With dates:

```ts
startDate = new Date(2024, 0, 1);
endDate = new Date(2024, 11, 31);

dates: HeatMapDate[] = [
  { date: new Date(2024,0,1), value: 1 },
  { date: new Date(2024,0,2), value: 2 },
  { date: new Date(2024,0,4), value: 1 },
  { date: new Date(2024,0,5), value: 1 },
  { date: new Date(2024,0,8), value: 2 },
]

<ngx-heatmap-calendar
  [dates]="dates"
  [startDate]="startDate"
  [endDate]="endDate"
/>
```

#### With custom class for value:

```ts
startDate = new Date(2024, 0, 1);
endDate = new Date(2024, 11, 31);

callBackCssClass = ({ value }: HeatMapDate) => {
  if (value === 1) {
    return 'fill-value-1';
  }

  if (value === 2) {
    return 'fill-value-2';
  }

  return 'fill-empty';
};

dates: HeatMapDate[] = [
  { date: new Date(2024,0,1), value: 1 },
  { date: new Date(2024,0,2), value: 2 },
  { date: new Date(2024,0,4), value: 1 },
  { date: new Date(2024,0,5), value: 1 },
  { date: new Date(2024,0,8), value: 2 },
]

<ngx-heatmap-calendar
  [dates]="dates"
  [startDate]="startDate"
  [endDate]="endDate"
  [classForValue]="callBackCssClass"
/>
```
