class Console {
  constructor(param) {
    this.param = param;
    this._history = [];
  }

  log(...val) {
    let newArr = [];
    val.forEach((el) => {
      newArr.push(JSON.stringify(el));
    });
    let str = newArr.join(", ");
    this._history.push(str);
    if (newArr.length !== 1) {
      return `"${str}"`;
    } else {
      return `"${this.param}: ${str}"`;
    }
  }

  clearHistory() {
    this._history = "";
    return true;
  }

  history(start = 0, end = this._history.length) {
    return this._history.slice(start, end);
  }
}

const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3)); //➞"ok : 1
// console.log(myConsole.history());
