# Curso de Fundamentos de Javascript

## ¿Cómo declarar y asignar variables en JavaScript?
Con la palabra clave `let` o `const`.
```javascript
let cajaDeAndy = "Woody";
console.log(cajaDeAndy);
```

* `let:` Declarar variables que pueden cambiar su valor durante la ejecución del programa.
```javascript
let contador = 0;
contador += 1;
```
* `const:` Declarar variables cuyo valor no cambiará una vez asignado.
```javascript
const PI = 3.14159;
```

## ¿Cuáles son los tipos de datos en JS?
### Tipos de datos primitivos
***Son inmutables y no tienen métodos***.
* **String:** Cadenas de texto encerradas en comilas simples o dobles.
```javascript
let nombre = 'tere';
```
* **Number:** Datos numéricos que permiten representar valores enteros o decimales.
```javascript
let edad = 25;
```
* **Boolean:** Son valores lógicos que solamente pueden ser `true` o `false`.
```javascript
let esMayorDeEdad = true;
```
* **Null:** Representa intencionalmente la ausencia de un valor. Es útil para señalar que una variable está vacía.
``` javascript
let sinValor = null;
```
* **Undefined:** Indica que una variable ha sido declarada pero no tiene un valor asignado. Generalmente asignado por JavaScript.
```javascript
let sinDefinir;
```
* **Symbol:** Ofrece valores únicos, ideales para identificar propiedades de objetos de manera única.
```javascript
let idUsuario = Symbol('único');
```
* **BigInt:** Permite representar números enteros grandes más allá de `Number.MAX_SAFE_INTEGER`.
```javascript
let numeroGrande = 9007199254740991n;
```

### Tipos de datos complejos
Más dinámicos y se utilizan para almacenar colección de valores y entidades más complejas.
* **Objetos(Object):** Permiten almacenar datos como pares clave-valor. Ideal para representar entidades.
```javascript
let carro = {
    marca: 'Tesla',
    modelo: 'Model S'
};
```
* **Arrays:** Útiles para almacenar listas de valores. Pueden contener cualquier tipo de dato y son extensibles.
```javascript
let frutas = ['manzana', 'banano', 'uvas'];
```
* **Funciones(Function):** Bloques de código reutilizables que ejecutan una tarea específica.
```javascript
function saludar(nombre){
    console.log('Hola ' + nombre);
}
```

## Dato `number` en JS
* **Enteros y decimales:**
```javascript
let entero = 42;
let decimal = 3.14;
console.log(typeof entero); // "number"
console.log(typeof decimal); // "number"
```
* **Notación científica:** 
```javascript
let cientifico = 5e3; //equivale a 5000
```

* **Infinity y NaN:** Números infinitos usa `Infinity`, mientras que un cálculo o valor indefinido se representa como `NaN (Not a Number)`
```javascript
let infinito = Infinity;
let noNumero: Nan;
```

### Dilemas con la precisión
Al sumar 0.1 y 0.2, podríamos esperar 0.3, pero el resultado podría ser un número decimal largo y preciso.
```javascript
let resultado = 0.1 + 0.2; 
console.log(resultado); // Imprime algo como 0.30000000004
```
Podemos usar `.toFixed()` para redondear a un número fijo de decimales.
```javascript
console.log(resultado.toFixed(2)); // "0.30"
```

## Conversión en JS
* **Conversión implícita:** JavaScript la realiza automáticamente sin que el programador precise intervención, como en el caso de sumar un número con un booleano.
* **Conversión explícita:** El programador decide convertir manualmente un tipo de dato a otro, por ejemplo, transformando un booleano en un string o en un número.

```javascript
let booleano = true;
let booleanToString = booleano.toString(); // convierte a "true"
let booleanToNumber = Number(booleano); // convierte a 1
```

## Typecasting explícito
Se refiere a convertir tipos de datos de manera explícita.
```javascript
const integer = parseInt("42");
console.log(typeof integer); // numnber
```

## Typecasting implícito
No hay intervención explícita del programador.
```javascript
const resultado = "5" + 3;
console.log(resultado); //53
```
***Si hay al menos un `string`, JS concatena, de lo contrario, suma.***

### ¿Cómo funciona la estructura básica de Switch?

La estructura de un Switch comienza definiendo una expresión entre paréntesis. Esta expresión es la condición a evaluar. Después, mediante la creación de múltiples casos (case), se especifica qué debe suceder si la expresión coincide con un valor determinado.

```javascript
let expresion = 'papayas';

switch (expresion) {
    case 'naranjas':
        console.log('Las naranjas cuestan 20 pesos el kilo.');
        break;
    case 'manzanas':
        console.log('Las manzanas cuestan 43 pesos el kilo.');
        break;
    case 'plátanos':
        console.log('Los plátanos cuestan 30 pesos el kilo.');
        break;
    case 'mangos':
    case 'papayas':
        console.log('Los mangos y las papayas cuestan 25 pesos el kilo.');
        break;
    default:
        console.log('Lo siento, no contamos con ' + expresion);
}
```
La instrucción `break` en un `Switch` es crucial porque evita la ejecución de casos posteriores una vez que se ha encontrado un true.

* ***break:*** Interrumpe la ejecución del `Switch` de manera que, una vez validado un caso, no se continúa evaluando los siguientes.
* ***default:*** Se utiliza como el "else" de un `Switch`, proporcionando una salida cuando ninguna condición es verdadera.

***`Switch` es ideal cuando se debe evaluar una sola variable o expresión contra múltiples valores literales.***

## Loop for-of
Se utiliza sobre objetos iterables, como arrays o strings.
```javascript
let canasta = ['manzana', 'pera', 'naranja', 'uva'];

for (let fruta of canasta){
    console.log(fruta);
}
```

## Loop for-In
Se centra en objetos innumerables. Los objetos son estructuras de datos que permiten almacenar información de manera más compleja que los arreglos o cadenas.
```javascript
//Ejemplo de objeto
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
};

for (let fruta in listaDeCompras){
    console.log(fruta); //imprime la propiedad
    console.log(listaDeCompras[fruta]); // imprime el valor de la propiedad
}
```

## Ciclo doWhile
Asegura que ciertas tareas se repitan, garantizando así la ejecución de eventos hasta alcanzar el resultado esperado, siempre y cuando se cumpla una condición.
```javascript
let contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 10);
```

## Funciones en JS
```javascript
function calculateDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}
```

### Funciones puras
Propiedades fundamentales de las funciones:
* **Determinismo:** Dada una entrada particular, una función pura siempre produce la misma salida. Esto significa que no importa cuántas veces llames a la función con los mismos argumentos, el resultado será siempre el mismo.
* **Ausencia de efectos secundarios:** Estas funciones no alteran estados fuera de su propio entorno. No modifican variables globales ni interaccionan con elementos externos al código, como bases de datos o APIs.

Algunos efectos secundarios:
* **Modificar variables globales:** Acceder y alterar variables fuera del alcance local de una función puede resultar en funciones impuras.
* **Modificar parámetros:** Cambiar los valores de los argumentos pasados a una función también genera efectos no deseados.
* **Solicitudes HTTP:** Llamadas a servicios externos o APIs pueden producir cambios basados en respuestas externas.
* **Impresión de mensajes:** Tanto `console.log` como `alert` son ejemplos de funciones que producen salidas visibles o auditables.
* **Manipulación del DOM:** Interacciones con la estructura del documento en navegadores, alterando su contenido o apariencia.
* **Consultas de tiempo:** Obtener la hora o fecha actual afecta al estado del programa de forma impredecible.

## Arrow Functions
Beneficios de las arrow functions:
* **Concisión:** Al eliminar la palabra "function" y usar una flecha =>, el código se vuelve más compacto.
* **Vinculación léxica del `this`:** Las Arrow Functions no tienen su propio contexto de `this`, lo cual es un alivio en situaciones donde se necesita mantener un contexto fijo.
```javascript
//Funcion tradicional
const saludo = function(nombre) {
    return `Hola ${nombre}`;
};

//Arrow Function
const saludoNuevo = (nombre) => `Hola ${nombre}`;
```
La simplicidad de las arrow functions nos permite usar retornos implícitos, lo que significa que no necesitamos escribir explícitamente `return` ni las llaves { } cuando todo el cuerpo de la función es una expresión.
```javascript
//Retorno implícito
const saludoImplicit = nombre => `Hola ${nombre}`;
const saludoCompleto = (nombre, apellido) => `Hola, soy ${nombre} ${apellido}`;
```

### Vinculación léxica
```javascript
const personajeFicticio = {
    nombre: "tio Ben",
    mensajeConFuncionTradicional: function(mensaje) {
        console.log(`${this.nombre} dice: ${mensaje}`);
    },
    mensajeConArrowFunction: (mensaje) => {
        console.log(`${this.nombre} dice: ${mensaje}`);
    }
};

personajeFicticio.mensajeConFuncionTradicional("Un gran poder conlleva una gran responsabilidad");
personajeFicticio.mensajeConArrowFunction("Cuidado con el Dr. Octopus");
```

## Scope en JS
Con `var` las variables tienen un scope a nivel de función, mientras que `let` y `const` se limitan al bloque en el que se declaran. Esta distinción es vital para evitar errores y entender cómo se ejecuta el código.
```javascript
const productName = "laptop";
const price = 899;
const brand = "techCode";

function getProductInfo(){
    const productName = "smarthphone";
    const price = 499;
    return `${productName} costs ${price} and is of brand ${brand}`; 
}
console.log(getProductInfo());
```

## Arrays 
1) Usando `new Array()`: Este enfoque requiere el uso de la palabra clave `new` seguida de `Array()`. Aunque es menos común, verás este método en proyectos más antiguos.
```javascript
const fruits = new Array('apple', 'banana','orange');
console.log(fruits);
```
2) Sintaxis literal del array: Este es el método más utilizado. Consiste en usar corchetes [] para definir los elementos del array.
```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
```
* Arrays con distintos tipos de datos:
```javascript
const mixedArray = ['text', true, 42, { ingredient: 'sugar', quantity: 'one cup' }, false];
console.log(mixxedArray);
```
*Ejemplos de uso de Arrays:
```javascript
const firstFruit = fruits[0];
console.log(firstFruit); //Output:_ apple

const numberOfFruits = fruits.length;
console.log(numberOfFruits); // Output: 3
```

* Agregar un elemento a un array:
```javascript
let frutas = ['apple', 'banana', 'orange'];
frutas.push('watermelon');
console.log (frutas);
```

* **Inmutabilidad en arrays:** Creando un nuevo array en lugar de modificar el existente.
```javascript
const frutas = ['apple', 'banana', 'orange'];
const nuevasFrutas = frutas.concat(['grape', 'kiwi']);
console.log(frutas);
console.log(nuevasFrutas);

//Comprobar si una variable es un array
const isArray = Array.isArray(frutas);
console.log(isArray); // true

// Sumar elementos de un array
const numbersArray = [1,2,3,4,5];
let suma = 0;

for (let i=0; i < numbersArray.length; i++){
    suma += numbersArray[i];
}

console.log(`La suma de todos los elementos del array es: ${suma}`); //La suma es 15
```

### Método push (arrays)
Agraga uno o más elementos al final de un array. Además de modificar el array original, también devuelve la nueva longitud del mismo.
```javascript
let countries = ['USA', 'CANADA', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

console.log (countries); // ['USA', 'Canada', 'UK', 'Germany', 'Australia']
console.log(newCountries); // 5
```
* Útil para añadir elementos consecutivos a un array.
* Utilizado frecuentemente en pilas donde los datos se añaden al final.

### Método pop (arrays)
Remueve el último elemento de un array, devolviendo dicho elemento y modificando el array original en el proceso.
```javascript
let countries = ['USA', 'Canada', 'UK', 'Germany', 'Australia'];
const removedCountry = countries.pop();

console.log(removedCountry); // 'Australia'
console.log(countries); // ['USA', 'Canada', 'UK', 'Germany']
```
* Perfecto para eliminar elementos sin comprometer la estructura inicial del array.
* Adecuado en funciones que requieran el último elemento de un array, como algoritmos de last in, first out (LIFO).

## Objetos en JS
Estructuras de datos que permiten agrupar información en un formato de "propiedad-valor".
```javascript
const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Avenida Insurgentes número 187",
    ciudad: "Ciudad de México"
  }
  saludar: function(){ //Metodo
    return `Hola, mi nombre es ${this.nombre}`;
  }
};

console.log(persona.saludar()); // Imprime "Hola, mi nombre es John"
```

### Aplicaciones prácticas de los objetos
* **Modelado de entidades:** Permiten modelar cualquier cosa del mundo real, como usuarios, productos o vehículos.

* **Reutilización de código:** Los objetos pueden contener métodos reutilizables, facilitando la creación de código modular.

* **Mantenimiento y escalabilidad:** Fomentan un diseño de código organizado y escalable, manejable a medida que los proyectos crecen.

* **Interacción y dinámica:** Agregan dinamismo a las aplicaciones al permitir la ejecución de funciones específicas del objeto.

```javascript
// Agregar propiedades y métodos
persona.telefono = '555-555-5555';

persona.despedir = () => {
  console.log('Adiós');
};

console.log(persona.telefono); // Imprime: 555-555-5555
persona.despedir(); // Imprime: Adiós

// Eliminar propiedades y métodos
delete persona.telefono;
delete persona.despedir;
```

### Funciones constructoras
Una función constructora es una forma de crear múltiples objetos con estructura similar sin necesidad de duplicar código. La función constructora tiene ciertas peculiaridades:

* **Nombre en mayúscula:** Iniciamos el nombre de la función constructora con una letra mayúscula para indicar que esta función se utilizará para crear objetos.
* **Estructura como una función regular:** Aunque tiene nombre específico, la estructura es similar a una función regular, pasando los datos necesarios como parámetros.

```javascript
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Crear instancias con new
const persona1 = new Persona('Juan', 'Pérez', 30);
const persona2 = new Persona('Diego', 'De Granda', 35);

// Agregar propiedades individuales
persona1.nacionalidad = 'Mexicano';

//Utilizar prototype (añade una propiedad o método a todas las instancias)
Persona.prototype.telefono = '555-555-5555';

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar(); // "Hola, me llamo Juan Pérez"
persona2.saludar(); // "Hola, me llamo Diego De Granda"
```

## Clases en JS
```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Instancias de una clase
const persona1 = new Persona('Mariana', 25);
persona1.saludar(); // Hola, mi nombre es Mariana y tengo 25 años.
```
Beneficios de clases en POO:
* **Simplicidad y claridad:** La sintaxis de las clases resulta más natural y sencilla para quienes provienen de otros lenguajes de programación orientados a objetos.
* **Reutilización de código:** Los blueprints permiten crear múltiples objetos similares sin necesidad de redefinir sus características cada vez.
* **Organización del código:** Al separar claramente métodos y propiedades, las clases facilitan el mantenimiento y la comprensión del código.
* **Encapsulamiento:** Aunque JavaScript no implementa encapsulamiento de manera robusta como otros lenguajes, las clases permiten una mejor centralización de propiedades y métodos.

### Prototipos en JS
Un prototipo en JavaScript es un objeto del cual otros objetos heredan propiedades y métodos. Al crear una función constructora (o clase constructora), JavaScript automáticamente genera un prototipo asociado a esa función, que se usa como un "molde" para crear instancias de objetos.

```javascript
function Persona(nombre, edad, altura, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.nacionalidad = nacionalidad;
}

Persona.prototype.saludar = function() {
    return `Hola, mi nombre es ${this.nombre}, ¿cómo te llamas tú?`;
};

var jose = new Persona('José', 30, 1.70, 'colombiano');
```

El uso de prototipos en JavaScript permite crear funciones que se comparten entre todas las instancias de una misma clase constructora, evitando así la duplicación y optimizando el uso de memoria. Además, facilita la extensión de objetos sin la necesidad de redefinir métodos para cada instancia nueva.