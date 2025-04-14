// Less common

const car = new Object();
car.brand = "Toyota";
car.model = "Fortuner"
car.year = 2025;

// Bracket Notation

console.log(car["year"])

// Key-values pairs
const entries = Object.entries(car)
console.log(entries);

// Assign

const defaults = {color: "Black", seats: 5};
const customerCar = Object.assign({}, defaults, car)
