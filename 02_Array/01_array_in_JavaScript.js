const myArr = [0, 1, 2, 3, 4, 5, 6]
console.log(myArr)

// Using new Array()

const newArr = new Array(10, 20, 40, 3, 30)
console.log(newArr)

// empty array
let emptyArray = [];
console.log(emptyArray);  // Output: []

//Accessing an array:
let cars = ["Toyota", "Honda", "Ford"];
console.log(cars[0]);  // Output: Toyota
console.log(cars[1]);  // Output: Honda
console.log(cars[2]);  // Output: Ford

// Modifying an array:
let colors = ["Red", "Green", "Blue"];
colors[1] = "Yellow";  // Changing "Green" to "Yellow"
console.log(colors);  // Output: ["Red", "Yellow", "Blue"]

// Array Properties:
console.log(colors.length)

// Array Methods Usage:
let nums = [10, 20, 30, 40];

// Adding elements
nums.push(50);  // [10, 20, 30, 40, 50]
nums.unshift(5); // [5, 10, 20, 30, 40, 50]

// Removing elements
nums.pop();  // [5, 10, 20, 30, 40]
nums.shift(); // [10, 20, 30, 40]

console.log(nums);
