// Write an object with getter/setterfield name.

const obj = {
  _name: [], // ['name', length][]
  set name(value) {
    value.split(",").forEach((el) => {
      _name.push([el, el.length]);
    });
  },
  get name() {
    return _name;
  },
};
console.log(obj.name);
obj.name = "Vrezh, Artavazd";
console.log(obj.name);
