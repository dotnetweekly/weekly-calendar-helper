const base = require("./base");
function getWeekNumber(d, log = false) {
  let target = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  target = base.addDays(target, 4 - target.getDay());

  let firstThursday = new Date(target.getFullYear(), 0, 1);
  firstThursday = base.addDays(firstThursday, 4 - firstThursday.getDay());
  return 1 + Math.ceil((target - firstThursday) / 604800000);
}
const getMonthFromWeek = function(week, year) {
  let date = new Date(year, 0, 1);
  date.setHours(0, 0, 0, -1);
  date.setDate(date.getDate() + week * 7);
  return date.getMonth();
};
const getDateRangeOfWeek = function(week, year) {
  let date = new Date(year, 0, 1);
  date.setDate(date.getDate() + week * 7);

  let fromDate = new Date(date.setDate(date.getDate() - 6));
  fromDate = base.addDays(fromDate, -4);

  let toDate = new Date(date.setDate(date.getDate() + 6));
  toDate = base.addDays(toDate, -4);

  const dateRange = {
    from: fromDate,
    to: toDate
  };
  return dateRange;
};
const weeksInYear = function(year) {
  let month = 11,
    day = 31,
    week;
  let d;
  do {
    d = new Date(year, month, day--);
    week = getWeekNumber(d);
  } while (week === 1);

  return week;
};

module.exports = {
  getWeekNumber,
  weeksInYear,
  getDateRangeOfWeek,
  getMonthFromWeek
};
