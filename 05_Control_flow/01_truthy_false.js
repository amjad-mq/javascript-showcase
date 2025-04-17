// Truthy and Falsy Values in JavaScript - Complete Reference

// ====================
// FALSY VALUES (8 total)
// ====================
console.log("===== Falsy Values =====");

const falsyValues = [
  false,    // Boolean false
  0,        // Number zero
  -0,       // Negative zero
  0n,       // BigInt zero
  "",       // Empty string
  null,
  undefined,
  NaN
];

// Test each falsy value
falsyValues.forEach(value => {
  if (value) {
    console.log(`${value} is truthy (THIS SHOULD NOT APPEAR)`);
  } else {
    console.log(`${JSON.stringify(value)} is falsy`);
  }
});

// =====================
// TRUTHY VALUES (examples)
// =====================
console.log("\n===== Truthy Values =====");

const truthyValues = [
  true,             // Boolean true
  1,                // Positive number
  -1,               // Negative number
  3.14,             // Float
  "0",              // String with content
  "false",          // Non-empty string
  " ",              // Whitespace string
  [],               // Empty array
  {},               // Empty object
  [1, 2, 3],        // Non-empty array
  {a: 1},           // Non-empty object
  function(){},     // Function
  new Date(),       // Date object
  Infinity,         // Infinity
  -Infinity         // Negative Infinity
];

// Test each truthy value
truthyValues.forEach(value => {
  if (value) {
    console.log(`${JSON.stringify(value)} is truthy`);
  } else {
    console.log(`${value} is falsy (THIS SHOULD NOT APPEAR)`);
  }
});

// =====================
// PRACTICAL EXAMPLES
// =====================
console.log("\n===== Practical Examples =====");

// 1. Default values with OR operator
const username = "";
const displayName = username || "Guest";
console.log(`Username: ${displayName}`); // "Guest"

// 2. Nullish coalescing (only checks null/undefined)
const itemCount = 0;
const displayCount = itemCount ?? "Unknown";
console.log(`Item count: ${displayCount}`); // 0 (not "Unknown")

// 3. Checking if array has elements
const items = [];
if (items) {
  console.log("Array exists"); // Runs (array is truthy)
}
if (items.length) {
  console.log("Array has items"); // Doesn't run (0 is falsy)
}

// 4. Function parameter defaults
function greet(name) {
  name = name || "Anonymous";
  console.log(`Hello, ${name}!`);
}
greet();        // "Hello, Anonymous!"
greet("Alice"); // "Hello, Alice!"

// 5. Optional chaining with nullish values
const user = {
  profile: {
    name: "John"
  }
};
console.log(user?.profile?.name); // "John"
console.log(user?.address?.city); // undefined (no error)