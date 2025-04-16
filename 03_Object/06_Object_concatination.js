const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "c", 3: "d"}

const merge = {...obj1, ...obj2}
console.log(merge)

// another method is assign.

const assignMerge = Object.assign({}, obj2, obj1);
console.log(assignMerge);
