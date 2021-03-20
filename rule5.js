function PerformAllOperations(number1, number2, operations){
    let results = [];
    do{
        let solution;
        let operation = operations.shift();
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
        results.push(solution);
    }
    while(operations.length > 0)
    return results;
}

var operations = ["subtraction", "multiplication", "division", "addition", "modulus"];
var results = PerformAllOperations(10, 10, operations);

console.log(`This calculator got ${results} for the following operations: ${operations}`);