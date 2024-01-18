"use strict"

/* Ejercicio_3
En base al resultado del ejercicio anterior agrupar en un array únicamente las palabras que tengan mas de 3 letras.*/
let phrase = 'La programación web es fundamental para el progreso.';

// Separar la frase en palabras
let wordsArray = phrase.split(' ');

let filteredWords = wordsArray.filter(word => word.length > 3);

alert(`Palabras con más de 3 letras: ${filteredWords.join(', ')}`);