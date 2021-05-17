//The function should produce the same output even if dateStart is greaterthan dateEnd

function monthsInterval(start, end) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let res = [];
  const monthStart = start.getMonth();
  const monthEnd = end.getMonth();
  for (let index = monthStart; index < monthEnd; index++) {
    res.push(months[index]);
  }
  return res;
}

let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));
