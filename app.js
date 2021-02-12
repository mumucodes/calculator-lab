import { add, subtract, multiply, divide } from './utilities.js';

const additionNumberOne = document.getElementById('value-x');
const additionNumberTwo = document.getElementById('value-y');
const additionButton = document.getElementById('calculate-addition');
const additionDisplay = document.getElementById('display-addition');

additionButton.addEventListener('click', () => {
    const sum = add(Number(additionNumberOne.value), Number(additionNumberTwo.value));
    additionDisplay.textContent = sum;

});


const subtractionNumberOne = document.getElementById('subtraction-x');
const subtractionNumberTwo = document.getElementById('subtraction-y');
const subtractionButton = document.getElementById('calculate-subtraction');
const subtractionDisplay = document.getElementById('display-subtraction');

subtractionButton.addEventListener('click', () => {
    const sum = subtract(Number(subtractionNumberOne.value), Number(subtractionNumberTwo.value));
    subtractionDisplay.textContent = sum;

});

const multiplyNumberOne = document.getElementById('multiply-x');
const multiplyNumberTwo = document.getElementById('multiply-y');
const multiplyButton = document.getElementById('calculate-multiplication');
const multiplicationDisplay = document.getElementById('display-multiplication');

multiplyButton.addEventListener('click', () => {
    const sum = multiply(Number(multiplyNumberOne.value), Number(multiplyNumberTwo.value));
    multiplicationDisplay.textContent = sum;

});

const divideNumberOne = document.getElementById('divide-x');
const divideNumberTwo = document.getElementById('divide-y');
const divisionButton = document.getElementById('calculate-division');
const divisionDisplay = document.getElementById('display-division');

divisionButton.addEventListener('click', () => {
    const sum = divide(Number(divideNumberOne.value), Number(divideNumberTwo.value));
    divisionDisplay.textContent = sum;

});