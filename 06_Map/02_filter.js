const myMap = new Map([
    ['apple', 5],
    ['strwberry', 15],
    ['orange', 2],
    ['banana', 23],
    ['kiwi', 3]
])

const filteredMap  = new Map(
    [...myMap].filter(([fruit, quantity]) => quantity >= 5)
)

console.log(filteredMap)