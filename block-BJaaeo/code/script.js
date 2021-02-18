let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
});
var screen = document.querySelector("input");
var inputText = "";
var operandA, operandB = "";
var operation = "";
function handleClick(e) { console.log(e.target.innerText);
    if (e.target.innerText == "C") {
        inputText = "";
        screen.setAttribute("value", "");
    }
    else if (e.target.innerText == "+") {
        operandA = Number(inputText);
        inputText = "";
        operation = "+";
        screen.value = "Enter second number";
    }
    else if (e.target.innerText == "-") {
        operandA = Number(inputText);
        inputText = "";
        operation = "-";
        screen.value = "Enter second number";
    }
    else if (e.target.innerText == "*") {
        operandA = Number(inputText);
        inputText = "";
        operation = "*";
        screen.value = "Enter second number";
    }
    else if (e.target.innerText == "/") {
        operandA = Number(inputText);
        inputText = "";
        operation = "/";
        screen.value = "Enter second number";
    }
    else if (e.target.innerText == "=") {
        operandB = Number(inputText);
        inputText = "";
        if (operation == "+") {

            screen.value = operandA + operandB;
        }
        else if (operation == "-") {

            screen.value = operandA - operandB;
        }
        else if (operation == "*") {

            screen.value = operandA * operandB;
        }
        else if (operation == "/") {

            screen.value = operandA / operandB;
        }
    }


    else {
        inputText = inputText + e.target.innerText;
        screen.setAttribute("value", inputText);
    }

}