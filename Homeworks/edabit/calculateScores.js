function calculateScores(str) {
  let scores = [0, 0, 0];
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === "A") {
      scores[0] += 1;
    }
    if (el === "B") {
      scores[1] += 1;
    }
    if (el === "C") {
      scores[2] += 1;
    }
  }
  return scores;
}

console.log(calculateScores("ABCBACC"));
