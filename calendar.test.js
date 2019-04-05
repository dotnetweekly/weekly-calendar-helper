const calendarFuncs = require("./calendar");

test("getCalendar returns correct calendar", () => {
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
  expect(calendarFuncs.getCalendar(13, 2019)).toEqual({
    weeks: [
      {
        days: [
          { date: new Date("2019-02-24T08:00:00.000Z"), week: 9 },
          { date: new Date("2019-02-25T08:00:00.000Z"), week: 9 },
          { date: new Date("2019-02-26T08:00:00.000Z"), week: 9 },
          { date: new Date("2019-02-27T08:00:00.000Z"), week: 9 },
          { date: new Date("2019-02-28T08:00:00.000Z"), week: 9 },
          { date: new Date("2019-03-01T08:00:00.000Z"), week: 9 },
          { date: new Date("2019-03-02T08:00:00.000Z"), week: 9 }
        ],
        week: 9,
        year: 2019
      },
      {
        days: [
          { date: new Date("2019-03-03T08:00:00.000Z"), week: 10 },
          { date: new Date("2019-03-04T08:00:00.000Z"), week: 10 },
          { date: new Date("2019-03-05T08:00:00.000Z"), week: 10 },
          { date: new Date("2019-03-06T08:00:00.000Z"), week: 10 },
          { date: new Date("2019-03-07T08:00:00.000Z"), week: 10 },
          { date: new Date("2019-03-08T08:00:00.000Z"), week: 10 },
          { date: new Date("2019-03-09T08:00:00.000Z"), week: 10 }
        ],
        week: 10,
        year: 2019
      },
      {
        days: [
          { date: new Date("2019-03-10T08:00:00.000Z"), week: 11 },
          { date: new Date("2019-03-11T07:00:00.000Z"), week: 11 },
          { date: new Date("2019-03-12T07:00:00.000Z"), week: 11 },
          { date: new Date("2019-03-13T07:00:00.000Z"), week: 11 },
          { date: new Date("2019-03-14T07:00:00.000Z"), week: 11 },
          { date: new Date("2019-03-15T07:00:00.000Z"), week: 11 },
          { date: new Date("2019-03-16T07:00:00.000Z"), week: 11 }
        ],
        week: 11,
        year: 2019
      },
      {
        days: [
          { date: new Date("2019-03-17T07:00:00.000Z"), week: 12 },
          { date: new Date("2019-03-18T07:00:00.000Z"), week: 12 },
          { date: new Date("2019-03-19T07:00:00.000Z"), week: 12 },
          { date: new Date("2019-03-20T07:00:00.000Z"), week: 12 },
          { date: new Date("2019-03-21T07:00:00.000Z"), week: 12 },
          { date: new Date("2019-03-22T07:00:00.000Z"), week: 12 },
          { date: new Date("2019-03-23T07:00:00.000Z"), week: 12 }
        ],
        week: 12,
        year: 2019
      },
      {
        days: [
          { date: new Date("2019-03-24T07:00:00.000Z"), week: 13 },
          { date: new Date("2019-03-25T07:00:00.000Z"), week: 13 },
          { date: new Date("2019-03-26T07:00:00.000Z"), week: 13 },
          { date: new Date("2019-03-27T07:00:00.000Z"), week: 13 },
          { date: new Date("2019-03-28T07:00:00.000Z"), week: 13 },
          { date: new Date("2019-03-29T07:00:00.000Z"), week: 13 },
          { date: new Date("2019-03-30T07:00:00.000Z"), week: 13 }
        ],
        week: 13,
        year: 2019
      },
      {
        days: [
          { date: new Date("2019-03-31T07:00:00.000Z"), week: 14 },
          { date: new Date("2019-04-01T07:00:00.000Z"), week: 14 },
          { date: new Date("2019-04-02T07:00:00.000Z"), week: 14 },
          { date: new Date("2019-04-03T07:00:00.000Z"), week: 14 },
          { date: new Date("2019-04-04T07:00:00.000Z"), week: 14 },
          { date: new Date("2019-04-05T07:00:00.000Z"), week: 14 },
          { date: new Date("2019-04-06T07:00:00.000Z"), week: 14 }
        ],
        week: 14,
        year: 2019
      }
    ],
    month: 2,
    firstDay: new Date("2019-02-24T08:00:00.000Z"),
    lastDay: new Date("2019-04-06T07:00:00.000Z")
  });
});
