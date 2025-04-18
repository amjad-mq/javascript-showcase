const mapObj = new Map();

// Adding elements:

mapObj.set('name', 'Ahmad');
mapObj.set(1, 'Number 01');
mapObj.set({id:1}, 'object key');

// Getting elements with get():

console.log(mapObj.get('name'));
console.log(mapObj.get(1));
console.log(mapObj.get('nonExistent'));

// Checking existence with has():

console.log(mapObj.has('name'))

// Removing Element with delete():

mapObj.delete('name')

console.log(mapObj.has('name'));

// clearing the map with clear():

mapObj.clear();

// Getting Size:

console.log(mapObj.size);

// ------------ Iteration with for each loop ------------------

console.log("------------ Iteration with for each loop ------------------");

const myMap = new Map();
myMap.set('name', 'ABC')
myMap.set('age', 20)
myMap.set(1, 'number 01')
myMap.set({1:'id'}, 'object key')

myMap.forEach((key, value) => {
    console.log(key,": ", value)
});

console.log("---- Using for of loop: ----")

for (const [keys, value] of myMap) {
    console.log(`for of: ${keys} :- ${value}`)
}