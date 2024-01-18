"use strict"

/* Ejercicio_1
Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el vector.*/
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
//Mostrar en un alert: "Si se encuentra" o "No se encuentra"
let userInput = prompt("Ingresa un nombre:");

let nameFound = students.includes(userInput);

if (nameFound) {
  alert(`El nombre "${userInput}" se encuentra en el vector.`);
} else {
  alert(`El nombre "${userInput}" no se encuentra en el vector.`);
}