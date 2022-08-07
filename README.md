# clousure-scope-notes

El scope tiene tres formas:

- Global
- Function
- Block


El "Scope" determina la accesibilidad de variables, objetos y funciones desde diferentes parte del código.

Global se instancia en Window

Al no declarar una variable y solo la asignamos por defecto pasa a ser una variable "Global"

Block Scope
Esta es una implementación actual de ECMAScript que implica:

La variable definida dentro de un bloque, solo puede ser llamada dentro de este bloque.

Esto implica dejar atras el uso de var y comenzar a implementar "let" & "const"

¿Y qué es un bloque?
Es todo aquello definido dentro de "handle bars" = {}


REASIGNACIÓN Y DECLARACIÓN

Se puede declarar reasignar y usar pero no es una forma infalible de inmutabilidad, en areglos y objetos, se agregan valores a la referencia.


MODO ESTRICTO
Es aquel donde se vuelve necesario asignar y declarar la variable


CLOUSURE
Permiten acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
A diferencia de otros conceptos como funciones, variables u otros. Los clousures no son siempre utilizados.

Aprender el concepto es saber identificar cuando lo estás utilizando. Probablemente, es que ya lo has usado cientos de veces.

Tienes una clousure cuando una función cualquiera accede a una variable fuera de su contexto.

Las funciones pueden reasignarse para fines prácticos.



HOISTING
El hosting solo aplica a variables declaradas con var, si intentamos hacer un ejemplo similar con let o const tendremos errores.

Es importante recalcar que el Hoisting en las funciones, solo afecta a aquellas que estén escritas con la sintaxis de “Function Declaration”, si intentamos con otras sintaxis, arrow o function expression, nos mandará un error.

Es una elevacion que hay que cuidar en la logica de cada bloque de código, observarla nos permite entender la lógica con la que opera el lenguaje.