for (let index = 0; index < 10; index++) {
    let element = index
    element = element + 1
    console.log(element);
}
// While loop
console.log("While Loop")
let i = 0
while (i < 10) {
    console.log(++i)
}

// do while
console.log("Table of 2:")
let j = 1;
do{
    console.log("2 * "+j+" = "+ 2*j );
    j++;
}while( j <= 10 );