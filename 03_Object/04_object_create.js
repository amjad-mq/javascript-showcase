// Advanced

const carPrototype = {type: "SUV"};
const car = Object.create(carPrototype);
car.brand = "Toyota";

// Import Object keys

const keys = Object.keys(car)
const values = Object.values(car)
console.log(keys)
console.log(values)