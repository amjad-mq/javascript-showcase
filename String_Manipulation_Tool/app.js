function convertToUpperCase(){
    const inputStr = document.getElementById('inputString').value;
    const result = inputStr.toUpperCase();
    displayOutput(result);
}


function displayOutput(result){
    document.getElementById('output').textContent = `Result: ${result}`;
}