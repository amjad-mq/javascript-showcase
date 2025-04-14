let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]
arr1.push(...arr2)
console.log(arr1)

console.log("Concatinating Multiple.");
let combine = arr1.concat(arr2, arr3);
let result = [...arr1, ...arr2, ...arr3];
console.log(combine)
console.log(result)
