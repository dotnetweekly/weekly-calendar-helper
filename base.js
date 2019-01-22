const constants = require("./constants");
const getMonthName = function(number) {
  return constants.monthNames[number];
};
const getDayName = function(number) {
  return constants.dayNames[number];
};
const resetUTC = function(date) {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDay()));
};
const getDates = function(startDate, stopDate) {
  let dateArray = [];
  let currentDate = startDate;
  let count = 0;
  while (currentDate <= stopDate) {
    let newDate = currentDate;
    dateArray.push(newDate);
    currentDate = addDays(currentDate, 1);
    count++;
    if (count > 32) {
      break;
    }
  }
  return dateArray;
};
const getFebruaryDays = function(dateValue) {
  let date = new Date(dateValue.getFullYear(), 1, 1);
  if (
    (date.getFullYear() % 100 !== 0 && date.getFullYear() % 4 === 0) ||
    date.getFullYear() % 400 === 0
  ) {
    return 29;
  }
  return 28;
};
const addDays = function(currDate, days, log = false) {
  var date = new Date(currDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
module.exports = {
  getMonthName,
  getDayName,
  getDates,
  getFebruaryDays,
  addDays,
  resetUTC
};
