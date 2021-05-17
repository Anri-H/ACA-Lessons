// The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

function getBestStudent(obj) {
  let res = 0;
  let result = "";
  for (const key in obj) {
    let sum = 0;
    obj[key].forEach((element) => {
      sum += element;
    });
    let average = sum / obj[key].length;
    if (res < average) {
      res = average;
      result = key;
    }
  }
  return result;
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
