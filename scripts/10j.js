let calculation = '';

function updateCalculation(input){
    calculation += input;
    document.querySelector('.calculator-display').innerHTML = calculation;
}

function calculate(input){
    document.querySelector('.calculator-display').innerHTML = eval(input);
    calculation = eval(input);
}

function clearButton(){
    calculation = '';
    document.querySelector('.js-calculator-display').innerText = '';

}