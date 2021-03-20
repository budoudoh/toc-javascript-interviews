function calculator(number1, number2, operation){
    let let_result = 0;
    var var_result = 0;
    if(operation)
    {
        let let_result;
        var var_result;
        switch(operation){
            case "minus":
                let_result = number1 - number2;
                var_result = number1 - number2;
                break;
            case "times":
                let_result = number1*number2;
                var_result = number1*number2;
                break;
            case "divided by":
                let_result = number1/number2;
                var_result = number1/number2;
                break;
            case "mod":
                let_result = number1%number2;
                var_result = number1%number2;
                break;
            default:
                let_result = number1 + number2;
                var_result = number1 + number2;
                break;
        }
        console.log(`var_result equals ${var_result} & let_result equals ${let_result}`);
    }
    console.log(`var_result equals ${var_result} & let_result equals ${let_result}`);
}

calculator(10, 10, "plus");



