const Hello = (name = "ABC") => (`Your name is ${name}`)

console.log(Hello())

const obj = {
    name: "ABC",
    age: 20,
    getValue: function () {
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
    }
}

const obj2 = {
    name: "Obj_2",
    age: 20,
    getValue: () => {
        console.log(`Name is ${obj2.name}`)
        console.log(`Age is ${this.age}`)
    }
}

// obj.getValue()
obj2.getValue()