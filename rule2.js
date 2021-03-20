var calculator = function(number1, number2, operation){
    let result;

    switch(operation){
        case "subtraction":
            result = number1 - number2;
            break;
        case "multiplication":
            result = number1*number2;
            break;
        case "division":
            result = number1/number2;
            break;
        default:
            result = number1 + number2;
            break;
    }

    return result;
}

function doSomeMath(number1, number2, math_function){
    return math_function(number1, number2);
}

console.log(doSomeMath(8, "10", calculator));