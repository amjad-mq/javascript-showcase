function greet(name = "Guest"){
    return `Hello ${name}!`
}

console.log(greet("Aslam"))
console.log(greet(""))
console.log(greet())

// Rest parameters:

function sum(...nums){
    return nums.reduce((acc, num) => acc+num, 0);
}

console.log(sum(10, 20, 30))

// Destructure parameters:

function hello(name = "Guest", age){
    console.log(`Your name is ${name} and your age is ${age}`)
}
hello("ABC", 20)

// Return in Function 
// 1. if nothing return it will return Undefine

const ret = hello();
console.log(ret)

// 2. it can return any things like array string or object

function userData(){
    return {
        name: "Abc",
        age: 20
    }
}

console.log(userData())