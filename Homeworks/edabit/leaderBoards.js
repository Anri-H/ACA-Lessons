function leaderboards(arr) {
 return arr.sort((a = a.score + a.reputation * 2, b = b.score + b.reputation * 2) => {
   console.log( a - b);
  });
}

console.log(
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
);

//   ➞ [
//     { name: "c", score: 115, reputation: 30 },  // trueScore = 175
//     { name: "b", score: 90, reputation: 40 },   // trueScore = 170
//     { name: "a", score: 100, reputation: 20 }   // trueScore = 140
//   ]
