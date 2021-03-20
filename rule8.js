function calculator(number1, number2, operation){
    let solution;
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
    return solution;
}

function calculateSolution(){
    var solution = calculator(10, 10, "division");
    function calculateNestedSolution(){
        var solution = calculator(10, 10, "addition");
        function calculateDoubleNestedSolution(){
            var solution = calculator(10, 10, "subtraction");
            function calculateTripleNestedSolution(){
                var solution = calculator(10, 10, "multiplication");
            }
            calculateTripleNestedSolution();
        }
        calculateDoubleNestedSolution();
    }
    calculateNestedSolution();
    return solution;
    
}

console.log(calculateSolution());

