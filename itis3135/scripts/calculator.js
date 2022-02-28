
const calculator = 
{
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    operator: null,
};
function updateDisplay()
{
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => 
{
    const { target } = event;
    const { value } = target;
    if (!target.matches('button'))
    {
        return;
    }
    if (target.classList.contains('operator'))
    {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal'))
    {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('all-clear'))
    {
        resetCalculator();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
function inputDigit(digit)
{
    const { displayValue, secondOperand } = calculator;

    if (secondOperand ==  true)
    {
        calculator.displayValue = digit;
        calculator.secondOperand = false;
    }
    else
    {
    calculator.displayValue = '0' ? digit : displayValue + digit; 
    }
    console.log(calculator);
}
function inputDecimal(dot)
{
    if (calculator.secondOperand == true)
    {
        calculator.displayValue = '0';
        calculator.secondOperand = false;
        return;
    }
    if (!calculator.displayValue.includes(dot))
    {
        calculator.displayValue += dot;
    }
}
function handleOperator(nextOperator)
{
    const { firstOperand, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.secondOperand)
    {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if (firstOperand == null && !isNaN(inputValue))
    {
        calculator.firstOperand = inputValue;
    }
    else if (operator)
    {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }
    calculator.secondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}
function calculate(firstOperand, secOperand,operator)
{
    if (operator == '+')
    {
        return firstOperand + secOperand;
    }
    else if (operator == '-')
    {
        return firstOperand - secOperand;
    }
    else if (operator == '*')
    {
        return firstOperand * secOperand;
    }
    else if (operator == '/')
    {
        return firstOperand / secOperand
    }
    return secOperand;
}
function resetCalculator()
{
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.secondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

