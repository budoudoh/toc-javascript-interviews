function slowCalculator(number1, number2, operation){
    let solution = 0;
    setTimeout(() => {
        switch(operation){
            case "subtraction":
                solution = number1 - number2;
                break;
            case "multiplication":
                solution = number1*number2;
                break;
            case "division":
                solution = number1/number2;
                break;
            case "modulus":
                solution = number1%number2;
                break;
            default:
                solution = number1+number2;
                break;
        }
        
    }, 3000);
    return solution;
}

console.log(slowCalculator(10, 10, "multiplication"));