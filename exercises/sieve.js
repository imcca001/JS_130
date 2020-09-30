function primes(limit) {
  let range = [];

  for (index = 2; index <= limit; index++) {
    range.push(index);
  }
   
   let multiplier = 2
   while (multiplier < limit) {
     range.forEach(number => {
      if (range.indexOf(number * multiplier) === -1) return;
      range[range.indexOf(number * multiplier)] = 0;
     });
     multiplier++
   }
   return range.filter(num => num !== 0);
}

module.exports = primes;