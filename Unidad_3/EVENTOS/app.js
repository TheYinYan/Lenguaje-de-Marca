"use strict";
console.log("JS cargado ✅");

const nombre = "Samuel";

// Gestion de eventos
// 1ª forma: atributo HTML ❌(MALA) 
// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 2ª forma: API JS setAttribute - Añadir atributo HTML
// const boton = document.getElementById("btn");
// boton.setAttribute("onclick", "saludar()");

// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 3ª forma: addEventListener ✅(Más Mejor)
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// boton.addEventListener("click",() => {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// Formas de pasar la funcion a addEventListene
// A) Funnción definida aparte y pasar su referencia (la "clasica") 
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// function saludar() {
//     texto.textContent = `Salida: Hola ${nombre}`;
// };

// // boton.addEventListener("click", saludar);

// // B) El error  típico: Poner () (se ejecuta al cargar)
// //  boton.addEventListener("click", saludar()); // ❌ MAL
// //  boton.addEventListener("click", saludar); // ✅ Bien

// // C) Función anónima (muy común)
// boton.addEventListener("click", function () {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// // D) Función flecha (de la más usadas actualmente)
// boton.addEventListener("click", () => {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// // ¿Y si hace falta pasarle parámetros?
// function suma(num1, num2) {
//     texto.textContent = num1 + num2;
// }
// // boton.addEventListener("click",()=>suma(4,6));

// // Variante con funcion anonima
// boton.addEventListener("click", function () {
//     suma(10, 5);
// });

// // Mini-reto: contador de clicks + bontón resert
// // Reglas: 
// // no se puede usar el onclick ni setAttribute.
// // No usar 
// // usamos a addEventListener

// // En cada click mostrar: "Salida: has hecho X click(s)"
// // En resert: poner contador a 0 y mostrar "Salida: contador 0"
// const boton = document.getElementById("btn");
// const Reset = document.getElementById("btnReset");
// const texto = document.querySelector(".salida");

// let nclick = 0;

// boton.addEventListener("click", () => {
//     nclick++;
//     texto.textContent = `Salida: has hecho ${nclick} click(s)`;
// });

// Reset.addEventListener("click", () => {
//     nclick = 0;
//     texto.textContent = `Salida: contador 0`;
// });

// Mini-reto (avanzado): Combinar click + array para mostrar mensajes distitos seqún el click.
const boton = document.getElementById("btn");
const texto = document.querySelector(".salida");
const Reset = document.getElementById("btnReset");

let nclick = 0;
const mensajes = [
    "Si llegas aquí, podrías ser de 1DAW.",
    "No vas mal, estás alcanzando cierto nivel. Pareces Arbeloa.",
    "Uff! Esto ya es otra cosa. Flick estaría orgulloso.",
    "Te has subido al gran FUNESBUQUE."
];

boton.addEventListener("click", () => {
    texto.textContent = `Salida:  ${mensajes[nclick]}`;
    nclick++;
    if (nclick == mensajes.length) nclick = 0;
});

Reset.addEventListener("click", () => {
    nclick = 0;
    texto.textContent = `Salida: (aún nada)`;
});