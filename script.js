const screen = document.querySelector(".screen");
const displayButtons = document.querySelectorAll(".displayButton");
const reset = document.querySelector(".reset");
const operatorHandler = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
const del = document.querySelector('.delete');
const decimal = document.querySelector(".decimal");


let previousNumber = "";
let currentNumber = "";
let display = "";
let operator = "";


function add(a, b)
{
	return a + b;
}

function subtract(a, b)
{
	return a - b;
}

function multiply(a, b)
{
	return a * b;
}

function divide(a, b)
{
	return a / b;
}


function operate(previousNumber, currentNumber, operator)
{
	previousNumber = parseFloat(previousNumber);
	currentNumber = parseFloat(currentNumber);

	if (!operator)
	{
		return undefined;
	}
	if (operator === "+")
	{
		return add(previousNumber, currentNumber)
	}

	else if (operator === "-")
	{
		return subtract(previousNumber, currentNumber);
	}

	else if (operator === "/")
	{
		return divide(previousNumber, currentNumber)
	}

	else if (operator === "*")
	{
		return multiply(previousNumber, currentNumber)
	}
}




displayButtons.forEach((button) => {

	button.addEventListener("click", () => {

		if (screen.value == "0")
		{
			screen.value = "";	
		}

		if (operator.length == 0)
		{
			if (button.value == '.' && previousNumber.includes('.'))
			{
				return;
			}
			screen.value += button.value;
			previousNumber += button.value;
		}

		if (operator.length == 1)
		{
			if (button.value == '.' && currentNumber.includes('.'))
			{
				return;
			}
			currentNumber += button.value;
			screen.value = currentNumber;
		}

			

	})
} )

operatorHandler.forEach((operators) => {
	operators.addEventListener("click", () => {

		
		operator = operators.value;

		
	})
})
reset.addEventListener("click", () => {

	screen.value = "0";
	previousNumber = ""
	currentNumber = "";
	display = "";
	operator = "";
})

calculate.addEventListener("click", () => {
	display = operate(previousNumber, currentNumber, operator);
	previousNumber = display;
	currentNumber = "";
	operator = "";
	screen.value = display;
})

del.addEventListener("click", () => {

	if(screen.value == "0")
	{
		screen.value == "0";
	}

	if (previousNumber.length == 1 && operator.length == 0 && currentNumber.length == 0)
	{
		previousNumber = "0";
		screen.value = previousNumber;
	}

	if (previousNumber.length >= 1 && currentNumber.length == 1)
	{
		currentNumber = "0";
		screen.value = currentNumber;

	}
	if (previousNumber.length > 1 && operator.length == 0 && currentNumber.length == 0)
	{
		previousNumber = previousNumber.slice(0, previousNumber.length - 1)
		screen.value = previousNumber;
	}

	if (previousNumber.length >= 1 && currentNumber.length > 1)
	{
		currentNumber = currentNumber.slice(0, currentNumber.length - 1);
		screen.value = currentNumber;

	}

})
