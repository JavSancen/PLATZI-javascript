function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
        // solo var puede llamarse en function scope
        // si var se convirtiera a let o const ya no podria llamarse desde function scope
    }
    console.log(fruit1);
}

fruits();

