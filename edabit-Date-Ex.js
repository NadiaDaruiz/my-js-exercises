// #1.
/* Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th)
and false otherwise. Keep in mind JavaScript's Date month is 0 based,
 meaning December is the 11th month while January is 0. */

const timeForMilkAndCookies = date => {
  const day = date.getDate();
  const month = date.getMonth();

  if (day == 24 && month == 11) {
    return true;
  } else {
    return false;
  }
};
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));

//#2.
/* Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. 
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
or "Saturday". To illustrate, the day of the week for "12/07/2016" is "Wednesday" */

const getDayName = date => {
  const myDate = new Date(date);
  const dayWeekInNums = myDate.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekDays[dayWeekInNums];
};
console.log(getDayName("12/11/2016"));

const nameDay = date => {
  const myDate = new Date(date);
  const options = { weekday: "long" };
  const dateString = new Intl.DateTimeFormat("en-US", options).format(myDate);

  return dateString;
};
console.log(nameDay("12/11/2016"));
