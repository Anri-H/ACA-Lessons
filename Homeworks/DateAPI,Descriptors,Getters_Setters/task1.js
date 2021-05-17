// Write an object with getter/setterfield name.

const obj = {
  _name: [], // ['name', length][]
  set name(value) {
    value.split(", ").forEach((el) => {
      this._name.push([el, el.length]);
    });
  },
  get name() {
    return this._name;
  },
};
console.log(obj.name);
obj.name = "Vrezh, Artavazd";
console.log(obj.name);
