function Calculator() {
  this.add = (a, b) => {
    return a + b;
  };
  this.subtract = (a, b) => {
    return a - b;
  };
  this.multiply = (a, b) => {
    return a * b;
  };
  this.divide = (a, b) => {
    return a / b;
  };
}

const calculator = new Calculator();
// calculator.add(10, 5);
// calculator.subtract(10, 5);
// calculator.multiply(10, 5);
// calculator.divide(10, 5);

console.group("Calculate:");
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
console.groupEnd();
