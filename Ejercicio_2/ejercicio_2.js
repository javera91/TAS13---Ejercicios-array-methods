"use strict"

/* Ejercicio_2
Separar por palabras y mostrar cuantas palabras tiene la siguiente frase:*/
let phrase = 'La programación web es fundamental para el progreso.';

let wordsArray = phrase.split(' ');

let numberOfWords = wordsArray.length;

alert(`La frase tiene ${numberOfWords} palabras.`);