//1. TIpo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal);

//2. NOtación cientifica
const cientifico = 5e3

//3. Infinito y NaN
const infinito = Infinity;
const noNumero = NaN;

//Precisión
const resultado = 0.1 + 0.2;
console.log(resultado)
console.log(resultado.toFixed(3))

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)