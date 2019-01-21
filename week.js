const base = require("./base");

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(+d);
  d.setHours(0, 0, 0);
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  // Get first day of year
  var yearStart = new Date(d.getFullYear(), 0, 1);
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  // Return array of year and week number
  return [d.getFullYear(), weekNo];
}

const getMonthFromWeek = function(week, year) {
  let date = new Date(year, 0, 1);
  date.setHours(0, 0, 0, -1);
  date.setDate(date.getDate() + week * 7);
  return date.getMonth();
};

const getDateRangeOfWeek = function(week, year) {
  let date = new Date(year, 0, 1);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + week * 7);

  let fromDate = new Date(date.setDate(date.getDate() - 6));
  fromDate.setHours(0, 0, 0, 0);
  fromDate = base.addDays(fromDate, -4);

  let toDate = new Date(date.setDate(date.getDate() + 6));
  toDate.setHours(0, 0, 0, 0);
  toDate = base.addDays(toDate, -4);

  const dateRange = {
    from: fromDate,
    to: toDate
  };
  return dateRange;
};

const weeksInYear = function(year) {
  var month = 11,
    day = 31,
    week;

  // Find week that 31 Dec is in. If is first week, reduce date until
  // get previous week.
  let d;
  do {
    d = new Date(year, month, day--);
    week = getWeekNumber(d)[1];
  } while (week === 1);

  return week;
};

module.exports = {
  getWeekNumber,
  weeksInYear,
  getDateRangeOfWeek,
  getMonthFromWeek
};
