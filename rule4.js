var ops = ["subtraction", "multiplication", "division", "addition", "modulus"];

var calculator = {
    operations: ops
}

var betterCalculator = Object.create(calculator);

function Calculator(operations){
    this.operations = operations;
}

var bestCalculator = new Calculator(ops);

class BestestCalculator {
    constructor(operations){
        this.operations = operations;
    }
}

var bestestCalculator = new BestestCalculator(ops);

Object.prototype.performOperations = function(number1, number2){
    let results = {};
    for(let i = 0; i < this.operations.length; i++){
        let solution;
        switch(this.operations[i]){
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
        results[this.operations[i]] = solution;
    }
    return results;
}

console.log(
    calculator.performOperations(10, 10).multiplication, 
    betterCalculator.performOperations(10, 10).multiplication, 
    bestCalculator.performOperations(10, 10).multiplication, 
    bestestCalculator.performOperations(10, 10).multiplication
);