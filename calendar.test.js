const calendarFuncs = require("./calendar");

test("getCalendar returns correct calendar", () => {
  expect(calendarFuncs.getCalendar(5, 2020)).toEqual({
    firstDay: new Date("2020-01-26T08:00:00.000Z"),
    lastDay: new Date("2020-03-01T08:00:00.000Z"),
    month: 1,
    weeks: [
      {
        days: [
          {
            date: new Date("2020-01-26T08:00:00.000Z"),
            inPast: true,
            week: [2020, 4]
          },
          {
            date: new Date("2020-01-27T08:00:00.000Z"),
            inPast: true,
            week: [2020, 5]
          },
          {
            date: new Date("2020-01-28T08:00:00.000Z"),
            inPast: true,
            week: [2020, 5]
          },
          {
            date: new Date("2020-01-29T08:00:00.000Z"),
            inPast: true,
            week: [2020, 5]
          },
          {
            date: new Date("2020-01-30T08:00:00.000Z"),
            inPast: true,
            week: [2020, 5]
          },
          {
            date: new Date("2020-01-31T08:00:00.000Z"),
            inPast: true,
            week: [2020, 5]
          },
          { date: new Date("2020-02-01T08:00:00.000Z"), week: [2020, 5] }
        ],
        week: [2020, 4],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-02T08:00:00.000Z"), week: [2020, 5] },
          { date: new Date("2020-02-03T08:00:00.000Z"), week: [2020, 6] },
          { date: new Date("2020-02-04T08:00:00.000Z"), week: [2020, 6] },
          { date: new Date("2020-02-05T08:00:00.000Z"), week: [2020, 6] },
          { date: new Date("2020-02-06T08:00:00.000Z"), week: [2020, 6] },
          { date: new Date("2020-02-07T08:00:00.000Z"), week: [2020, 6] },
          { date: new Date("2020-02-08T08:00:00.000Z"), week: [2020, 6] }
        ],
        week: [2020, 5],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-09T08:00:00.000Z"), week: [2020, 6] },
          { date: new Date("2020-02-10T08:00:00.000Z"), week: [2020, 7] },
          { date: new Date("2020-02-11T08:00:00.000Z"), week: [2020, 7] },
          { date: new Date("2020-02-12T08:00:00.000Z"), week: [2020, 7] },
          { date: new Date("2020-02-13T08:00:00.000Z"), week: [2020, 7] },
          { date: new Date("2020-02-14T08:00:00.000Z"), week: [2020, 7] },
          { date: new Date("2020-02-15T08:00:00.000Z"), week: [2020, 7] }
        ],
        week: [2020, 6],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-16T08:00:00.000Z"), week: [2020, 7] },
          { date: new Date("2020-02-17T08:00:00.000Z"), week: [2020, 8] },
          { date: new Date("2020-02-18T08:00:00.000Z"), week: [2020, 8] },
          { date: new Date("2020-02-19T08:00:00.000Z"), week: [2020, 8] },
          { date: new Date("2020-02-20T08:00:00.000Z"), week: [2020, 8] },
          { date: new Date("2020-02-21T08:00:00.000Z"), week: [2020, 8] },
          { date: new Date("2020-02-22T08:00:00.000Z"), week: [2020, 8] }
        ],
        week: [2020, 7],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-02-23T08:00:00.000Z"), week: [2020, 8] },
          { date: new Date("2020-02-24T08:00:00.000Z"), week: [2020, 9] },
          { date: new Date("2020-02-25T08:00:00.000Z"), week: [2020, 9] },
          { date: new Date("2020-02-26T08:00:00.000Z"), week: [2020, 9] },
          { date: new Date("2020-02-27T08:00:00.000Z"), week: [2020, 9] },
          { date: new Date("2020-02-28T08:00:00.000Z"), week: [2020, 9] },
          { date: new Date("2020-02-29T08:00:00.000Z"), week: [2020, 9] }
        ],
        inFuture: true,
        week: [2020, 8],
        year: 2020
      }
    ]
  });
  expect(calendarFuncs.getCalendar(1, 2020)).toEqual({
    firstDay: new Date("2019-12-29T08:00:00.000Z"),
    lastDay: new Date("2020-02-02T08:00:00.000Z"),
    month: 0,
    weeks: [
      {
        days: [
          {
            date: new Date("2019-12-29T08:00:00.000Z"),
            inPast: true,
            week: [2019, 52]
          },
          {
            date: new Date("2019-12-30T08:00:00.000Z"),
            inPast: true,
            week: [2020, 1]
          },
          {
            date: new Date("2019-12-31T08:00:00.000Z"),
            inPast: true,
            week: [2020, 1]
          },
          { date: new Date("2020-01-01T08:00:00.000Z"), week: [2020, 1] },
          { date: new Date("2020-01-02T08:00:00.000Z"), week: [2020, 1] },
          { date: new Date("2020-01-03T08:00:00.000Z"), week: [2020, 1] },
          { date: new Date("2020-01-04T08:00:00.000Z"), week: [2020, 1] }
        ],
        week: [2019, 52],
        year: 2019
      },
      {
        days: [
          { date: new Date("2020-01-05T08:00:00.000Z"), week: [2020, 1] },
          { date: new Date("2020-01-06T08:00:00.000Z"), week: [2020, 2] },
          { date: new Date("2020-01-07T08:00:00.000Z"), week: [2020, 2] },
          { date: new Date("2020-01-08T08:00:00.000Z"), week: [2020, 2] },
          { date: new Date("2020-01-09T08:00:00.000Z"), week: [2020, 2] },
          { date: new Date("2020-01-10T08:00:00.000Z"), week: [2020, 2] },
          { date: new Date("2020-01-11T08:00:00.000Z"), week: [2020, 2] }
        ],
        week: [2020, 1],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-01-12T08:00:00.000Z"), week: [2020, 2] },
          { date: new Date("2020-01-13T08:00:00.000Z"), week: [2020, 3] },
          { date: new Date("2020-01-14T08:00:00.000Z"), week: [2020, 3] },
          { date: new Date("2020-01-15T08:00:00.000Z"), week: [2020, 3] },
          { date: new Date("2020-01-16T08:00:00.000Z"), week: [2020, 3] },
          { date: new Date("2020-01-17T08:00:00.000Z"), week: [2020, 3] },
          { date: new Date("2020-01-18T08:00:00.000Z"), week: [2020, 3] }
        ],
        week: [2020, 2],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-01-19T08:00:00.000Z"), week: [2020, 3] },
          { date: new Date("2020-01-20T08:00:00.000Z"), week: [2020, 4] },
          { date: new Date("2020-01-21T08:00:00.000Z"), week: [2020, 4] },
          { date: new Date("2020-01-22T08:00:00.000Z"), week: [2020, 4] },
          { date: new Date("2020-01-23T08:00:00.000Z"), week: [2020, 4] },
          { date: new Date("2020-01-24T08:00:00.000Z"), week: [2020, 4] },
          { date: new Date("2020-01-25T08:00:00.000Z"), week: [2020, 4] }
        ],
        week: [2020, 3],
        year: 2020
      },
      {
        days: [
          { date: new Date("2020-01-26T08:00:00.000Z"), week: [2020, 4] },
          { date: new Date("2020-01-27T08:00:00.000Z"), week: [2020, 5] },
          { date: new Date("2020-01-28T08:00:00.000Z"), week: [2020, 5] },
          { date: new Date("2020-01-29T08:00:00.000Z"), week: [2020, 5] },
          { date: new Date("2020-01-30T08:00:00.000Z"), week: [2020, 5] },
          { date: new Date("2020-01-31T08:00:00.000Z"), week: [2020, 5] },
          {
            date: new Date("2020-02-01T08:00:00.000Z"),
            inFuture: true,
            week: [2020, 5]
          }
        ],
        inFuture: true,
        week: [2020, 4],
        year: 2020
      }
    ]
  });
});
