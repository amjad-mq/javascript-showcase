const  inputField = document.getElementById('input_str');
const outputDiv = document.getElementById('output');

function convertToUpperCase(){
    const inputStr = inputField.value;
    const result = inputStr.toUpperCase();
    outputDiv.textContent = `Result: ${result}`;
}

function convertToLowerCase(){
    const inputStr = inputField.value;
    const result = inputStr.toLowerCase();
    outputDiv.textContent = `Result: ${result}`;
}

function reverseString(){
    const inputStr = inputField.value;
    const result = inputStr.split('').reverse().join();
    outputDiv.textContent = `Result: ${result}`;
}

function countVowels() {
    const inputStr = inputField.value;
    const vowelCount = inputStr.match(/[aeiouAEIOU]/g)?.length || 0;
    outputDiv.textContent = `Vowel Count: ${vowelCount}`;
}

function replaceAWithZ() {
    const inputStr = inputField.value;
    const replacedStr = inputStr.replace(/a/g, 'z').replace(/A/g, 'Z');
    outputDiv.textContent = `Replaced 'a' with 'z': ${replacedStr}`;
}


document.querySelectorAll('button')[0].addEventListener('dblclick', convertToUpperCase);
document.querySelectorAll('button')[1].addEventListener('dblclick', convertToLowerCase);
document.querySelectorAll('button')[2].addEventListener('dblclick', reverseString);
document.querySelectorAll('button')[3].addEventListener('dblclick', countVowels);
document.querySelectorAll('button')[4].addEventListener('dblclick', replaceAWithZ);