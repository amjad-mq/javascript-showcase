const arr = [10, 30, 20, 50]

for(let i of arr){
    console.log(i)
}

console.log("For in Loop: returns index")
for(let i in arr) {
    console.log(arr[i]);  // 10, 30, 20, 50
}