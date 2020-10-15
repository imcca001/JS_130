const DAYS = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Firday': 5,
  'Saturday': 6
};

function meetupDay(year, month, day, sign) {
  let calendar = 1
  while (new Date(year, month, calendar).getDay() !== DAYS[day]) {
    calendar += 1;
  }
  if (sign === 'teenth') {
    while (calendar < 12) {
      calendar += 7;
    }
  } else if (sign === '2nd') {
        calendar += 7;
    } else if (sign === '3rd') {
        calendar += 14;
      } else if (sign === '4th') {
        calendar += 21;
      } else if (sign === 'last') {
        while (new Date(year, month, calendar + 7).getMonth() === month) {
          calendar += 7;
        }
      }

  return new Date(year, month, calendar);
}


module.exports = meetupDay;