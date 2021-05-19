// Airplane TASK:
// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

const Airplane = {
  takeOff: () => (this.isFlaying = true),
  land: () => (this.isFlaying = false),
};

const mig = {
  isFlaying: false,
  __proto__: Airplane,
};
console.log(mig.takeOff());
