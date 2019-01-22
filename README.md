# Calendar Helper Functions

## Base Functions

### Get Month Name
```
import weeklyCalendarHelper from 'weekly-calendar-helper'

weeklyCalendarHelper.baseHelper.getMonthName(1)
```
```
February
```

### Get Date Range
```
import weeklyCalendarHelper from 'weekly-calendar-helper'

const startDate = new Date("2019-01-21T12:08:11");
const toDate = new Date("2019-01-25T12:08:11");
const dates = weeklyCalendarHelper.baseHelper.getDates(startDate, toDate);
```
Result:
```
["2019-01-21T00:00:00", "2019-01-22T00:00:00", "2019-01-23T00:00:00", "2019-01-24T00:00:00", "2019-01-25T00:00:00"]
```

### Get February Days
```
import weeklyCalendarHelper from 'weekly-calendar-helper'

  const leapYear = new Date("2020-02-21T00:00:00");
  const nonLeapYear = new Date("2019-02-21T00:00:00");
  expect(weeklyCalendarHelper.baseHelper.getFebruaryDays(leapYear)).toEqual(29);
  expect(weeklyCalendarHelper.baseHelper.getFebruaryDays(nonLeapYear)).toEqual(28);
```

### Add Days
```
import weeklyCalendarHelper from 'weekly-calendar-helper'

  const date = new Date("2020-02-21T00:00:00");
  const dateAdd1 = weeklyCalendarHelper.baseHelper.addDays(date, -1, true);
  const dateAdd2 = weeklyCalendarHelper.baseHelper.addDays(date, 20, true);
  const date2 = new Date("2020-01-27T00:00:00");
  const dateAdd3 = weeklyCalendarHelper.baseHelper.addDays(date2, -1, true);
  expect(dateAdd1.getDate()).toEqual(20);
  expect(dateAdd2.getDate()).toEqual(12);
  expect(dateAdd3.getDate()).toEqual(26);
```

## Week Functions

### Get Month From Week
```
import weeklyCalendarHelper from 'weekly-calendar-helper'

  expect(weekFuncs.getMonthFromWeek(8, 2020)).toEqual(1);
  expect(weekFuncs.getMonthFromWeek(1, 2020)).toEqual(0);
  expect(weekFuncs.getMonthFromWeek(10, 2020)).toEqual(2);

```

### Get Date Range of Week
```
import weeklyCalendarHelper from 'weekly-calendar-helper'

  expect(weekFuncs.getDateRangeOfWeek(1, 2020)).toEqual({
    from: new Date("2019-12-29T08:00:00.000Z"),
    to: new Date("2020-01-04T08:00:00.000Z")
  });

```

### Get Week Number:
```
  expect(weekFuncs.getWeekNumber(new Date("2019-01-06T00:00:00.000Z"))).toEqual(
    2
  );
  expect(
    weekFuncs.getWeekNumber(new Date("2020-02-20T08:00:00.000Z"), true)
  ).toEqual(8);
  expect(weekFuncs.getWeekNumber(new Date("2020-12-31T08:00:00.000Z"))).toEqual(
    53
  );
  expect(weekFuncs.getWeekNumber(new Date("2019-12-31T08:00:00.000Z"))).toEqual(
    1
  );
  expect(weekFuncs.getWeekNumber(new Date("2018-12-31T08:00:00.000Z"))).toEqual(
    1
  );
  expect(weekFuncs.getWeekNumber(new Date("2019-01-22T12:50:39.577Z"))).toEqual(
    4

```

## Monthly Calendar

```
  expect(calendarFuncs.getCalendar(5, 2020)).toEqual({
    firstDay: new Date("2020-01-26T08:00:00.000Z"),
    lastDay: new Date("2020-02-29T08:00:00.000Z"),
    month: 1,
    weeks: [
      {
        days: [
          { date: new Date("2020-01-26T08:00:00.000Z"), week: 5 },
          { date: new Date("2020-01-27T08:00:00.000Z"), week: 5 },
          { date: new Date("2020-01-28T08:00:00.000Z"), week: 5 },
          { date: new Date("2020-01-29T08:00:00.000Z"), week: 5 },
          { date: new Date("2020-01-30T08:00:00.000Z"), week: 5 },
          { date: new Date("2020-01-31T08:00:00.000Z"), week: 5 },
          { date: new Date("2020-02-01T08:00:00.000Z"), week: 5 }
        ],
        week: 5,
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-02T08:00:00.000Z"), week: 6 },
          { date: new Date("2020-02-03T08:00:00.000Z"), week: 6 },
          { date: new Date("2020-02-04T08:00:00.000Z"), week: 6 },
          { date: new Date("2020-02-05T08:00:00.000Z"), week: 6 },
          { date: new Date("2020-02-06T08:00:00.000Z"), week: 6 },
          { date: new Date("2020-02-07T08:00:00.000Z"), week: 6 },
          { date: new Date("2020-02-08T08:00:00.000Z"), week: 6 }
        ],
        week: 6,
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-09T08:00:00.000Z"), week: 7 },
          { date: new Date("2020-02-10T08:00:00.000Z"), week: 7 },
          { date: new Date("2020-02-11T08:00:00.000Z"), week: 7 },
          { date: new Date("2020-02-12T08:00:00.000Z"), week: 7 },
          { date: new Date("2020-02-13T08:00:00.000Z"), week: 7 },
          { date: new Date("2020-02-14T08:00:00.000Z"), week: 7 },
          { date: new Date("2020-02-15T08:00:00.000Z"), week: 7 }
        ],
        week: 7,
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-16T08:00:00.000Z"), week: 8 },
          { date: new Date("2020-02-17T08:00:00.000Z"), week: 8 },
          { date: new Date("2020-02-18T08:00:00.000Z"), week: 8 },
          { date: new Date("2020-02-19T08:00:00.000Z"), week: 8 },
          { date: new Date("2020-02-20T08:00:00.000Z"), week: 8 },
          { date: new Date("2020-02-21T08:00:00.000Z"), week: 8 },
          { date: new Date("2020-02-22T08:00:00.000Z"), week: 8 }
        ],
        week: 8,
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-23T08:00:00.000Z"), week: 9 },
          { date: new Date("2020-02-24T08:00:00.000Z"), week: 9 },
          { date: new Date("2020-02-25T08:00:00.000Z"), week: 9 },
          { date: new Date("2020-02-26T08:00:00.000Z"), week: 9 },
          { date: new Date("2020-02-27T08:00:00.000Z"), week: 9 },
          { date: new Date("2020-02-28T08:00:00.000Z"), week: 9 },
          { date: new Date("2020-02-29T08:00:00.000Z"), week: 9 }
        ],
        week: 9,
        year: 2020
      }
    ]
  });
```
