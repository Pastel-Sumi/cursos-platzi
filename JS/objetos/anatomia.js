/* 
Estructura de datos

key /value

objeto {
    propiedad: valor,
    propiedad: valor,
    }
*/

const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: "Avenida insurgentes N°187",
        ciudad: "CDMX"
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
};

console.log(persona);
persona.saludar();

//Añadir objeto
persona.telefono = "555-555-5555";
console.log(persona.telefono);

persona.despedir = () =>{
    console.log("Adios!");
};

persona.despedir();

delete persona.telefono;
delete persona.despedir;