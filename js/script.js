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
    });
});
