const constants = require("./constants");

const getMonthName = function(number) {
  return constants.monthNames[number];
};

const getDayName = function(number) {
  return constants.dayNames[number];
};

const getUtcNow = function() {
  const now = new Date(Date.now());
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds()
  );
};

function getDates(startDate, stopDate) {
  let dateArray = [];
  let currentDate = startDate;
  let count = 0;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
    count++;
    if (count > 32) {
      break;
    }
  }
  return dateArray;
}

const getFebruaryDays = function(dateValue) {
  let date = new Date(dateValue.getYear(), 1, 1);
  date.setHours(0, 0, 0, 0);
  if (date.getMonth() === 1) {
    if (
      (date.getFullYear() % 100 !== 0 && date.getFullYear() % 4 === 0) ||
      date.getFullYear() % 400 === 0
    ) {
      return 29;
    } else {
      return 28;
    }
  }
};

const addDays = function(currDate, days) {
  let date = new Date(currDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

module.exports = {
  getMonthName,
  getDayName,
  getUtcNow,
  getDates,
  getFebruaryDays,
  addDays
};
