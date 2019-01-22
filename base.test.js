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

test("getDates returns the correct range of dates", () => {
  const startDate = new Date("2019-01-21T12:08:11");
  const toDate = new Date("2019-01-25T12:08:11");
  const dates = baseFuncs.getDates(startDate, toDate);
  expect(dates[0].getDate()).toEqual(21);
  expect(dates[1].getDate()).toEqual(22);
  expect(dates[2].getDate()).toEqual(23);
  expect(dates[3].getDate()).toEqual(24);
  expect(dates[4].getDate()).toEqual(25);
});

test("getFebruaryDays returns 28 or 29 depending leap year", () => {
  const leapYear = new Date("2020-02-21T00:00:00");
  const nonLeapYear = new Date("2019-02-21T00:00:00");
  expect(baseFuncs.getFebruaryDays(leapYear)).toEqual(29);
  expect(baseFuncs.getFebruaryDays(nonLeapYear)).toEqual(28);
});

test("addDays adds/subtracts days correctly", () => {
  const date = new Date("2020-02-21T00:00:00");
  const dateAdd1 = baseFuncs.addDays(date, -1, true);
  const dateAdd2 = baseFuncs.addDays(date, 20, true);
  const date2 = new Date("2020-01-27T00:00:00");
  const dateAdd3 = baseFuncs.addDays(date2, -1, true);
  expect(dateAdd1.getDate()).toEqual(20);
  expect(dateAdd2.getDate()).toEqual(12);
  expect(dateAdd3.getDate()).toEqual(26);
});
