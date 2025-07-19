//Explicit type casting

const string = '42'
const integer = parseInt(string);
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
conse.log(decimal)
console.log(typeof decimal)

// Implicit type casting
const suma = '5' + 3
console.log(suma)

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const sumWithNumber = 2 + true;
console.log(sumWithNumber);