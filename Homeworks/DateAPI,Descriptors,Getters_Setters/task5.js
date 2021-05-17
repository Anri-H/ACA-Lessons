// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

function dayOfYear(date) {
  date = new Date(date);
  const start = new Date(date.getFullYear(), 0, 0);
  const daysOfYear = date - start;
  const msDay = 3600 * 24 * 1000;
  const day = daysOfYear / msDay;
  return day;
}

console.log(dayOfYear("5/17/2021"));
