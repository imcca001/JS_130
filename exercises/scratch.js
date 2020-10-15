  let num = 0;
  let interval;

function startCounting() {
  interval = setInterval(count, 1000);
}

function count() {
  if (num < 4) {
    console.log(num);
    num += 1;
  }
  else {
    clearInterval(interval);
  }
}

startCounting();


// Chin 100 x 5
// dip 135 x 5
// sp 155 x 5
// Pendlay 245 x 5
// Split Squat 95 x 8
// Seated GM 95 x 8
// Step up 165 x 10
// Nordic flat x 5
// Big 6 flexibility
// Skulpt 6.8