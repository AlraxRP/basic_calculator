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
    return parseFloat((num1 / num2).toFixed(2));
}

function operate(num1, num2, operator)
{
    let result;
    switch(operator)
    {
        case "+":
            result= add(num1, num2);
            break;

        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            result = divide(num1, num2);
            break;

        default:
            console.log("Error");
    }
    return result;
}

function addDigit(digit)
{
    if(operator)
    {
        if(num2)
        {
            if(num2 === "0")
            {
                num2 = digit;
            }
            else
            {
                num2 += digit;
            }
        }
        else
        {
            num2 = digit;
        }
    }
    else
    {
        if(num1)
        {
            if(num1 === "0")
            {
                num1 = digit;
            }
            else
            {
                num1 += digit;
            }
        }
        else
        {
            num1 = digit;
        }
    }
    display.value = num1 + operator + num2;
}

function addOperator(simbol)
{
    if(num2)
    {
        if(!(operator === "/" && num2 === "0"))
        {
            num1 = +operate(Number(num1),Number(num2),operator);
            num2 = ""
            operator = simbol;
        }
        else
        {
            alert("Cant divide by 0");
        }
    }
    else
    {
        if(!num1)
        {
            num1 = "0";
        }
    }
    operator = simbol;
    display.value = num1 + operator + num2;
}

function solveOperation()
{
    if(num2)
    {
        if(!(operator === "/" && num2 === "0"))
        {
            display.value = +operate(Number(num1),Number(num2),operator);
            num1 = "";
            num2 = "";
            operator = "";
        }
        else
        {
            alert("Cant divide by 0");
        }
    }
    else
    {
        alert("Invalid format");
    }
}

function clear()
{
    num1 = "";
    num2 = "";
    operator = "";
    display.value = " ";
}

function backspace()
{
    if(operator)
    {
        if(num2)
        {
            num2 = num2.slice(0,num2.length-1);
        }
        else
        {
            operator = "";
        }
    }
    else
    {

        if(num1)
        {
            num1 = num1.slice(0,num2.length-1);
        }
    }
    display.value = num1 + operator + num2;
}

function decimalPoint()
{
    if(operator)
    {
        if(num2)
        {
            if(!num2.includes("."))
            {
                num2 += ".";
            }
        }
        else
        {
            num2 = "0.";
        }
    }
    else
    {
        if(num1)
        {
            if(!num1.includes("."))
            {
                num1 += ".";
            }
        }
        else
        {
            num1 = "0.";
        }
    }
    display.value = num1 + operator + num2;
}


let num1 = "0";
let num2 = "";
let operator = "";

const inputButtonsLeft = document.querySelectorAll(".input-buttons-left .btnNumber");
const display = document.querySelector("#display");

inputButtonsLeft.forEach((button) => {
    button.addEventListener("click", () =>{
        const numberBtn = button.textContent;
        addDigit(numberBtn);
    });
});

const inputOperatorButtons = document.querySelectorAll(".input-buttons-right .btnInput");

inputOperatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const operatorBtn = button.textContent;
        addOperator(operatorBtn);
    });
});

const btnEqual = document.querySelector(".input-buttons-left .btnEqual");

btnEqual.addEventListener("click", () => solveOperation());

const btnClear= document.querySelector("#btnClear");

btnClear.addEventListener("click", () => clear());

const btnDelete = document.querySelector("#btnDelete");

btnDelete.addEventListener("click", () => backspace());

const btnDecimal = document.querySelector(".btnDecimal");

btnDecimal.addEventListener("click", () => decimalPoint());
