function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }

}
// se accede a la variable dentro de la funcion y a la funcion anidada dentro de la función
greeting();
// esto no puede ejecutarse ya que la variable a la que se está intentando acceder no esta dentro del alcance (en este case su alcance es dentro de la funcion 'greeting')
// A este concepto se le llama clousure scope
console.log(userName);