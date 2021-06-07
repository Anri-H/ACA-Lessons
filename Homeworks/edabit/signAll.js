const obj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "",
  },
  bathroom: {
    stereo: 220,
    signature: "",
  },
  signature: "",
};

function signAll(obj, str) {
  for (const key in obj) {
    if (key === "signature") {
      signature = str;
    }
    for (const search in key) {
      if (key === "signature") {
        signature = str;
      }
    }
  }
  return obj;
}

console.log(signAll(obj, "Rocky"));
