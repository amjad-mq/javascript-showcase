// Hoisted : can be called before decleration.

const sum2 = add(10,20)
console.log(sum2)

function add(a, b) {
    return (a+b)
}

const sum = add(10,20)
console.log(sum)


// Not hoisted: Must be define before calling it.

const multiply = function(a, b){
    return (a * b)
}

const product = multiply(3,4)
console.log(product)


// Arrow function: shorter syntax

const divide = (a, b) => a/b
const div = divide(12, 3)
console.log(div)

// Imidiate invoke function

// (function() {
//     console.log("Runs immediately!");
// })();