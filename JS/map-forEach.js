//Methods that iterate over an array.
//Methods that DO NOT modify the original array (Immutability)

//map()

const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map(num => num * num);
console.log(numbers);
console.log(squareNumbers);

//forEach()
const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));
console.log(colors)
console.log(iteratedColors);

//Exercise: Fahrenheit to Celsius convention
const temperaturesInFahrenheit = [32,68,95,104,212];

const temperaturesInCelsius = temperaturesInFahrenheit.map(temperature => (5/9) * (temperature- 32));
console.log(temperaturesInFahrenheit);
console.log(temperaturesInCelsius);

//Exercise: Sum of elements in an array
const newNumbers = [1,2,3,4,5];
let sum = 0;

newNumbers.forEach(number => sum+=number);
console.log("Suma de una array, sum: "+ sum);