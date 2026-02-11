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
    let result;
    switch(operator)
    {
        case "+":
            result= add(num1, num2);
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
    return result;
}


let num1 = "";
let num2 = "";
let operator = "";

const inputButtonsLeft = document.querySelectorAll(".input-buttons-left .btnInput");
const display = document.querySelector("#display");

inputButtonsLeft.forEach((button) => {
    button.addEventListener("click", () =>{
        if(!operator)
        {
            if(!(button.textContent === "0" && !num1))
            {
                num1 = num1 + button.textContent;
                display.value = num1 + operator + num2;
            }
        }
        else
        {
            if(!(button.textContent === "0" && !num2))
            {
                num2 = num2 + button.textContent;
                display.value = num1 + operator + num2;
            }
        }
    });
});

const inputOperatorButtons = document.querySelectorAll(".input-buttons-right .btnInput");

inputOperatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(num1 && num2)
        {
            num1 = +operate(Number(num1),Number(num2),button.textContent);
            num2 = "";
            operator = button.textContent;
            display.value = num1 + operator + num2;
        }
        else
        {
            operator = button.textContent;
            display.value = num1 + operator + num2;
        }
    });
});
