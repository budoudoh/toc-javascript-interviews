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

slowCalculator(10, 10, "multiplication")
.then(solution => console.log(solution))
.catch(error => console.error(error));


