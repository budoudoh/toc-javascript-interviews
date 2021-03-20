var values = [5, 4, 3, 2, 1];

var operations = {
    "subtraction": "-",
    "multiplication": "*",
    "division": "%",
    "addition": "+",
    "modulus": "%"
};

var operation_keys = Object.keys(operations);
var random_index = Math.floor(Math.random()*operation_keys.length);
var random_operation = operation_keys[random_index];

var reduced  = values.reduce((prev, next) =>{
    return eval(`${prev}${operations[random_operation]}${next}`);
});

() => { 
    console.log(`This calculator resulted in ${reduced} when reducing the array of values with the ${random_operation} operation`);
};