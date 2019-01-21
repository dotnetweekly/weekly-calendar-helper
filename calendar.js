const weekHelper = require("./week");
const baseHelper = require("./base");
const constants = require("./constants");

const getCalendar = function(setWeek, setYear) {
  let dateNow = new Date(
    setYear,
    weekHelper.getMonthFromWeek(setWeek, setYear),
    1
  );
  dateNow.setHours(0, 0, 0, 0);
  const dayPerMonth = constants.monthDays;
  dayPerMonth[1] = baseHelper.getFebruaryDays(dateNow);

  let counter = 1;
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();
  let firstDay = new Date(year, month, counter);
  firstDay.setHours(0, 0, 0, 0);

  let weekdays = firstDay.getDay();
  let weekdays2 = weekdays === -1 ? 0 : weekdays;

  const numOfDays = dayPerMonth[month];
  let lastDayCounted = dateNow;

  let lastDay = firstDay;
  const weeks = [];
  let week = [];

  try {
    if (weekdays === -1) {
      weekdays = 6;
    }

    while (weekdays > 0) {
      firstDay.setDate(firstDay.getDate() - 1);
      let currentFirstDay = new Date(firstDay);
      currentFirstDay.setHours(0, 0, 0, 0);
      week.push({
        date: currentFirstDay,
        week: weekHelper.getWeekNumber(firstDay),
        inPast: true
      });

      weekdays--;
    }

    week.reverse();

    weekdays2 = week.length;

    while (counter <= numOfDays) {
      if (weekdays2 > 6) {
        weekdays2 = 0;
        weeks.push({
          days: week,
          week: weekHelper.getWeekNumber(week[0].date),
          year: week[0].date.getFullYear()
        });
        week = [];
      }

      let newDay = new Date(year, month, counter);
      newDay.setHours(0, 0, 0, 0);
      week.push({
        date: newDay,
        week: weekHelper.getWeekNumber(newDay)
      });

      lastDayCounted = new Date(newDay);
      lastDayCounted.setHours(0, 0, 0, 0);

      weekdays2++;
      counter++;
    }

    lastDayCounted.setDate(lastDayCounted.getDate() + 1);
    lastDay = new Date(lastDayCounted);
    const daysRemaining = 7 - week.length - 1;

    for (var i = 0; i <= daysRemaining; i++) {
      week.push({
        date: new Date(lastDay),
        week: weekHelper.getWeekNumber(lastDay),
        inFuture: true
      });
      lastDay.setDate(lastDay.getDate() + 1);
    }

    weeks.push({
      days: week,
      week: weekHelper.getWeekNumber(week[0].date),
      year: week[0].date.getFullYear(),
      inFuture: true
    });
  } catch (error) {
    console.log(error);
  }

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
