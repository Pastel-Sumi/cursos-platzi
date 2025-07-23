const greeting = function(name){
    return `Hi, ${name}`;
}

//Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`;
}

//Arrow function - implicit return
const newGreetingImplicit = (name) => `Hi, ${name}`;

//Lexical binding
const fictionalCharacter = {
    name: "Uncle Ben",
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}` );
    },
    messageWithArrowFunction: (message) =>{
        console.log(`${this.name} says: ${message}` );
    }
}

fictionalCharacter.messageWithTraditionalFunction("Lmao");
fictionalCharacter.messageWithArrowFunction("Lmao"); //Throws undefined