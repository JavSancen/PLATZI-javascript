// variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignación
var a = 'aa' // redeclaración

// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


// Ejemplo de asignar una variable sin declararla (variable Global)

function countries() {
    country = 'Colombia';
// Note que no se asignó valor a var 'country' previamente.
    console.log(country);
}
// El ouput es un Colombia, Colombia porque la var 'country' fue asignada por defaul como global al no haberse declarado un valor previamente.
countries();
console.log(country);
