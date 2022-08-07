// Lo que está pasando en la elevación es:
// var nameOfDog; // Undefined
// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

// var hopper; // Esta variable se elevo con Hoisting como undefined
// function nameOfDog() {
//     console.log(`El mejor perrito es ${hopper}`); // tambien la funcion se eleva segun el orden de la logica// 
// }

// nameOfDog();
// function nameOfDog() {
//    console.log(`El mejor perrito es ${hopper}`);
// }
//
// var hopper = 'Hopper';


function nameOfDog() {
    var hopper = 'Hopper';
    console.log(`El mejor perrito es ${hopper}`);
}

nameOfDog();
// Esta ultima seria la manera apropiada