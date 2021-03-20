function compareNumbers(number1, number2){
    return (number1 == number2);
}

console.log(compareNumbers(12, 12),
compareNumbers(012, 12),
compareNumbers(120, 12),
compareNumbers("12", 12),
compareNumbers("012", 12),
compareNumbers("120", 12));