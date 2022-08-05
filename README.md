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