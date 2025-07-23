class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    makeSound(){
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal{
    constructor(name, type, raza){
        super(name, type);
        this.raza = raza;
    }
    makeSound(){
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.name} corre alegremente`);
    }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.makeSound();

perro1.nuevoMetodo = function(){
    console.log("Este es un metodo");
};
//alterar el prototipo de la clase Perro
Perro.prototype.segundoMetodo = function(){
    console.log("Es otro nuevo metodo");
}