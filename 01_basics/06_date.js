// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let date1 = new Date()

console.log(date1)
console.log(date1.toString())
console.log(date1.toDateString())
console.log(date1.toLocaleString())
console.log(typeof(date1))

let date2 = new Date(2023, 0, 24)
console.log(date2.toDateString())

const now = new Date();

now.setFullYear(2025);
now.setMonth(5);  // June (0-based)
now.setDate(14);
now.setHours(10);
now.setMinutes(45);
now.setSeconds(30);

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());


console.log(now.getFullYear());    // Year (e.g., 2024)
console.log(now.getMonth());       // Month (0-11, January = 0)
console.log(now.getDate());        // Day of the month (1-31)
console.log(now.getDay());         // Day of the week (0-6, Sunday = 0)
console.log(now.getHours());       // Hours (0-23)
console.log(now.getMinutes());     // Minutes (0-59)
console.log(now.getSeconds());     // Seconds (0-59)
console.log(now.getMilliseconds()); // Milliseconds (0-999)
console.log(now.getTime());        // Timestamp (milliseconds since 1970)
console.log(now.getTimezoneOffset()); // Difference from UTC in minutes


let myTimeStamp = Date.now()
console.log(myTimeStamp)

let dateFromTimeStamp = new Date(myTimeStamp)
console.log(dateFromTimeStamp)
