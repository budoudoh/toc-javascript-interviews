var number1 = 8;
var number2 = 10;

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
        case "modulus":
            result = number1%number2;
        default:
            result = number1 + number2;
            break;
    }

    return result;
}

function doSomeMath(number1, number2, math_function){
    return math_function(number1, number2);
}

function doSomeDifferentMath(number1, number2){
    number1 = number2;
    number2 = 50;
    return number1 + number2;
}

console.log(doSomeMath(number1, number2, calculator));

