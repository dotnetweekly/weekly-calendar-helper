const weekHelper = require("./week");
const baseHelper = require("./base");
const getCalendar = function(setWeek, setYear) {
  const month = weekHelper.getMonthFromWeek(setWeek, setYear);
  const firstDayOfMonth = new Date(setYear, month, 0);
  const lastDayOfMonth = new Date(
    setYear,
    month,
    new Date(setYear, month + 1, 0).getDate()
  );
  const dates = baseHelper.getDates(firstDayOfMonth, lastDayOfMonth);
  let firstDay = new Date(firstDayOfMonth);
  if (firstDay.getDay() != 0) {
    do {
      firstDay = baseHelper.addDays(firstDay, -1);
      dates.unshift(firstDay);
    } while (firstDay.getDay() != 0);
  }
  let lastDay = lastDayOfMonth;
  if (lastDay.getDay() != 6) {
    do {
      lastDay = baseHelper.addDays(lastDay, 1);
      dates.push(lastDay);
    } while (lastDay.getDay() != 6);
  }
  weeks = dates.reduce((agg, curr) => {
    lastGroup = agg[agg.length - 1];
    if (!lastGroup || !("days" in lastGroup) || lastGroup.days.length >= 7) {
      lastGroup = {
        days: [],
        week: weekHelper.getWeekNumber(curr),
        year: curr.getFullYear()
      };
      agg.push(lastGroup);
    }
    lastGroup = agg[agg.length - 1];
    lastGroup.days.push({ date: curr, week: weekHelper.getWeekNumber(curr) });
    return agg;
  }, []);
  return {
    weeks,
    month,
    firstDay,
    lastDay
  };
};

module.exports = {
  getCalendar
};
