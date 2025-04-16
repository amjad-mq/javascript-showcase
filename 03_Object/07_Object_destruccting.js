const user = {
    name: "ABC",
    age: 20,
    email: "acuser@gamil.com"
}

const {name , age , c} = user;
console.log("name: ", name)
console.log("age: ", age)
console.log("email: ", c)

const {name: userName, age: userAge} = user;
console.log(userName)
console.log(userAge)

function greetUser(user) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
  }

greetUser(user)