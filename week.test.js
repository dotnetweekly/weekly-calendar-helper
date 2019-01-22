const weekFuncs = require("./week");

test("getWeekNumber returns correct value", () => {
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
  );
});

// 0 is January, 1 is February
test("getMonthFromWeek returns correct value", () => {
  expect(weekFuncs.getMonthFromWeek(8, 2020)).toEqual(1);
  expect(weekFuncs.getMonthFromWeek(1, 2020)).toEqual(0);
  expect(weekFuncs.getMonthFromWeek(10, 2020)).toEqual(2);
});

test("getDateRangeOfWeek returns correct value", () => {
  expect(weekFuncs.getDateRangeOfWeek(1, 2020)).toEqual({
    from: new Date("2019-12-29T08:00:00.000Z"),
    to: new Date("2020-01-04T08:00:00.000Z")
  });
  expect(weekFuncs.getDateRangeOfWeek(2, 2020)).toEqual({
    from: new Date("2020-01-05T08:00:00.000Z"),
    to: new Date("2020-01-11T08:00:00.000Z")
  });
  expect(weekFuncs.getDateRangeOfWeek(8, 2020)).toEqual({
    from: new Date("2020-02-16T08:00:00.000Z"),
    to: new Date("2020-02-22T08:00:00.000Z")
  });
});

test("weeksInYear returns correct value", () => {
  expect(weekFuncs.weeksInYear(2020)).toEqual(53);
  expect(weekFuncs.weeksInYear(2019)).toEqual(52);
  expect(weekFuncs.weeksInYear(2018)).toEqual(52);
});
