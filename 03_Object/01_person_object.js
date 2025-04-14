const person = {
    name: "Arham",
    age: 3,
    isChild: true,
    address: {
        city: "Abc",
        Country: "Pakistan"
    }
};


console.log(person.address.Country)
console.log(person["address"]["city"])

// Modifying Object 

person.age = 4;
console.log(person["age"])

person["Class"] = 1;

console.log(person["Class"])

delete person.Class;
console.log(person["Class"])

Object.freeze(person)

