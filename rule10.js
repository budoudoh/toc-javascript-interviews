function slowCalculator(number1, number2, operation){
    let solution = 0;
    const myPromise = new Promise((resolve, reject) =>{
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
            resolve(solution);
        }, 3000);
    });
    return myPromise;
}

console.log(slowCalculator(10, 10, "multiplication"));


