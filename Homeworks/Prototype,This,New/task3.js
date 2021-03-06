function Car(model, milesPerGallon = 0) {
  this.model = model;
  this.tank = 0;
  this.odometer = milesPerGallon;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function(distanc) {
  if (this.tank - distanc < 0) {
    let noFuel = this.tank;
    this.odometer += noFuel;
    this.tank = 0;
    return `I ran out of fuel at ${noFuel} miles!`;
  }
  this.odometer += distanc;
  this.tank -= distanc;
};

const bmw = new Car("Bmw", 25);

bmw.fill(40);
console.log(bmw);
