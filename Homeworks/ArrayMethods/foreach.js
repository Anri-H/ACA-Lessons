function foreach(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    func(element);
  }
}

foreach([10, 366, "h"], (foo) => {
  console.log(foo);
});
