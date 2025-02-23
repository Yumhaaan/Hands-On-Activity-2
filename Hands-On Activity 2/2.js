function addNumber(a, b){
    return a + b;
}

let userInput = prompt("Enter Number 1: ");
userInput = Number(userInput);

let userInput2 = prompt("Enter Number 2: ");
userInput2 = Number(userInput2);

let totalValue = addNumber(userInput, userInput2);
alert(totalValue);