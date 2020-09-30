function meetupDay(year, month, day, identifier) {

  let startDate = 1;
  let weekday = (new Date(year, month, startDate)).getDay();

  while (DAYS[weekday] !== day && startDate < 7) {
    startDate += 1;
    weekday = (new Date(year, month, startDate)).getDay();
  };
  
  if (identifier === 'teenth') {
    return teenth(year, month, startDate);
  } else if (identifier === '1st') {
    return new Date(year, month, startDate);
  } else if (identifier === '2nd') {
    return new Date(year, month, startDate + 7);
  } else if (identifier === '3rd') {
    return new Date(year, month, startDate + 14);
  } else if (identifier === '4th') {
    return new Date(year, month, startDate + 21);
  } else if (identifier === '5th') {
    let fifth = new Date(year, month, startDate + 28);
     if (fifth.getMonth() !== month) {
       console.log('throwing Error!');
       throw new Error();
     } else { 
         return fifth;
       }
  } else if (identifier === 'last') {
    return lastDate(year, month, startDate);
  } 
}

function lastDate(year, month, startDate) {
  let lastDate = new Date(year, month+1, 0).getDate();
  
  if (lastDate < 29) {
    while (new Date(year, month, startDate).getDate() < lastDate - 7) {
      startDate += 7;
    } 
  } else {
    while (new Date(year, month, startDate).getDate() < lastDate) {
      startDate += 7;
    } 
  }

  return new Date(year, month, startDate);
}

function teenth(year, month, day) {
  while (day < 13) {
    day += 7;
  }
  return new Date(year, month, day);
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Firday',
  'Saturday'
];

module.exports = meetupDay;