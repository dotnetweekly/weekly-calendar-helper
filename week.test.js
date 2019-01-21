const weekFuncs = require("./week");

test("getWeekNumber returns correct value", () => {
  expect(weekFuncs.getWeekNumber(new Date("2020-02-20T20:08:11.000Z"))).toEqual(
    [2020, 8]
  );
  expect(weekFuncs.getWeekNumber(new Date("2020-12-31T20:08:11.000Z"))).toEqual(
    [2020, 53]
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
});
