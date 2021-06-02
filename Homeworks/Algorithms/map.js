class Dictionary {
  constructor(obj) {
    this.obj = obj;
  }

  get(val) {
    return this.obj[val];
  }

  set(key, value) {
    if (this.obj[key]) {
      return this.obj[key].push(value);
    }
    this.obj[key] = [];
    return this.obj[key].push(value);
  }

  getCountByKey(val) {
    return this.obj[val].length;
  }

  remove(val) {
    delete this.obj[val];
  }
}

const dict = new Dictionary({ key: "value", secondKey: "value2" });

console.log(dict.get("key")); // 'value'

dict.set("num", 10);
dict.set("negNum", -10);
dict.set("num", 200);

console.log(dict.get("num")); //  10, 200

console.log(dict.getCountByKey("num")); // 2

// dict.get("num").delete(10);

// dict.get("num"); // 200

console.log(dict.getCountByKey("negNum")); // 1

dict.remove("negNum");
