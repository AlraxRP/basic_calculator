function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    if(num2 === 0) return null;

    return parseFloat((num1 / num2).toFixed(2));
}

function operate(num1, num2, operator)
{
    switch(operator)
    {
        case "+":
            console.log(add(num1, num2));
            break;

        case "-":
            console.log(subtract(num1, num2));
            break;

        case "*":
            console.log(multiply(num1, num2));
            break;

        case "/":
            console.log(divide(num1, num2));
            break;

        default:
            console.log("Error");
    }
}

let num1;
let num2;
let operator;