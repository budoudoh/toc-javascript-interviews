var calculations = ["9 divided by 3", "8 minus 2", "5 times 4", "6 plus 1", "10 mod 7"];
var calculations_regex = /([0-9]+?) ([\D]+?) ([0-9]+?)/;
var results = [];
calculations.forEach((calculation) => {
    let matches = calculations_regex.exec(calculation);

    let number1 = parseInt(matches[1]);
    let number2 = parseInt(matches[3]);
    let operation = matches[2].trim();
    let result;

    switch(operation){
        case "minus":
            result = number1 - number2;
            break;
        case "times":
            result = number1*number2;
            break;
        case "divided by":
            result = number1/number2;
            break;
        case "mod":
            result = number1%number2;
            break;
        default:
            result = number1 + number2;
            break;
    }

    results.push(result);
});

console.log(results);