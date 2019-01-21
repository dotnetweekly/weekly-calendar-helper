const baseFuncs = require("./base");

test("getMonthName gets month name", () => {
  expect(baseFuncs.getMonthName(1)).toBe("February");
  expect(baseFuncs.getMonthName(0)).toBe("January");
  expect(baseFuncs.getMonthName(11)).toBe("December");
});

test("getDayName gets day name", () => {
  expect(baseFuncs.getDayName(1)).toBe("Tuesday");
  expect(baseFuncs.getDayName(0)).toBe("Monday");
  expect(baseFuncs.getDayName(6)).toBe("Sunday");
});

test("getUtcNow gets utc now time", () => {
  expect(baseFuncs.getUtcNow().toISOString()).toMatch(
    /\d+-([0-1][0-2])-([0-3][0-9])T([0-2][0-9]):([0-5][0-9]):([0-5][0-9])\.\d+Z/
  );
});

test("getDates returns the correct range of dates", () => {
  const startDate = new Date("2019-01-21T12:08:11");
  const toDate = new Date("2019-01-25T12:08:11");
  expect(baseFuncs.getDates(startDate, toDate)).toEqual([
    new Date("2019-01-21T20:08:11.000Z"),
    new Date("2019-01-22T20:08:11.000Z"),
    new Date("2019-01-23T20:08:11.000Z"),
    new Date("2019-01-24T20:08:11.000Z"),
    new Date("2019-01-25T20:08:11.000Z")
  ]);
});

test("getFebruaryDays returns 28 or 29 depending leap year", () => {
  const leapYear = new Date("2020-02-21T20:08:11.000Z");
  const nonLeapYear = new Date("2019-02-21T20:08:11.000Z");
  expect(baseFuncs.getFebruaryDays(leapYear)).toEqual(29);
  expect(baseFuncs.getFebruaryDays(nonLeapYear)).toEqual(28);
});

test("addDays adds/subtracts days correctly", () => {
  const date = new Date("2020-02-21T20:08:11.000Z");
  expect(baseFuncs.addDays(date, -1)).toEqual(
    new Date("2020-02-20T20:08:11.000Z")
  );
  expect(baseFuncs.addDays(date, 20)).toEqual(
    new Date("2020-03-12T19:08:11.000Z")
  );
});
