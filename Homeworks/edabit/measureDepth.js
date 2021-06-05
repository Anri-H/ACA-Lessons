function measureDepth(arr, depth = 0) {
  if (Array.isArray(arr)) {
    return measureDepth(arr[0], depth + 1);
  }
  return depth;
}

console.log(measureDepth([[[]]]));
