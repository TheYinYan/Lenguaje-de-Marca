"use strict";

// Arrays
const juegos = ["Zelda", "Minecraft", "Counter-Striker"];
console.log("Primero:", juegos[0]);

console.log("Juegos:", juegos);
console.log("Cantidad", juegos.length + " juegos");

juegos.push("FIFA");
console.log("Juegos tras push:", juegos);
juegos.pop();
console.log("Juegos tras pop:", juegos);

const mixto = ["hola", 42, true, { juego: "Minecraft", pegi: 12 }, [1, 2, 3]];
console.log("Array mixto:", mixto);
console.log(`Eleminto 0 (${mixto[0].constructor.name}): ${mixto[0]}`);
console.log(`Eleminto 1 (${mixto[1].constructor.name}): ${mixto[1]}`);
console.log(`Eleminto 2 (${mixto[2].constructor.name}): ${mixto[2]}`);
console.log(`Eleminto 3 (${mixto[3].constructor.name}): ${mixto[3]}`);
console.log(`Eleminto 4 (${mixto[4].constructor.name}): ${mixto[4]}`);

console.log(typeof mixto[0], typeof mixto[1], typeof mixto[2], typeof mixto[3], typeof mixto[4]);

// Objetos
const alumno = {
    nombre: "Samuel",
    curso: "1º DAM",
    edad: 18,
    repetidor: false
};

console.log("Alumno:", alumno);
console.log("Nombre:", alumno.nombre);

alumno.nombre = "Samuel Ruiz";
console.log("Nombre cambiado:", alumno.nombre);

console.log(alumno.edad.constructor.name);

console.log(alumno.toString());
console.log(`Alumno:\nNombre - ${alumno.nombre}\nCurso - ${alumno.curso}\nEdad - ${alumno.edad} años\nRepetidor - ${alumno.repetidor}`);

const producto = {
    nombre: "Lego Star Wars",
    precio: 20,
    stock: false,
    toString: function () {
        return `Producto: ${this.nombre} - Precio: ${this.precio}€ - Stock: ${this.stock}`;
    }
};

console.log(producto.toString());

// Funciones
const total = function name(precio, unidades) {
    return precio * unidades;
};

console.log("Total 9.99 * 3 =", total(9.99, 3));
console.log(total(9.99, 3).constructor.name);

// Funciones flechas (arrow function)
// const name = function(params) => { cuerpo };

const flecha = (precio, unidades) => precio * unidades;

console.log("Total 12.50 * 7 =", flecha(12.50, 7));

// Definir objetos en una Array
const productos = [
    { name: "Lego", precio: 20 },
    { name: "Microondas", precio: 50 },
    { name: "PC", precio: 2000 }
];

// Pasar los parametros uno a uno 
const suma = function (precio1, precio2, precio3) {
    return (precio1 + precio2 + precio3);
};

// Pasar el objeto
const suma2 = function (obj1, obj2, obj3) {
    return (obj1.precio + obj2.precio + obj3.precio);
};

// Funcion flecha
const sumaFlecha = (obj1, obj2, obj3) => (obj1.precio + obj2.precio + obj3.precio);

console.log(`En la cesta hay:
${productos[0].name} con precio ${productos[0].precio}€
${productos[1].name} con precio ${productos[1].precio}€
${productos[2].name} con precio ${productos[2].precio}€
`);

console.log(`Total compra es de (suma) ${suma(productos[0].precio, productos[1].precio, productos[2].precio)}€`);
console.log(`Total compra es de (suma2) ${suma2(productos[0], productos[1], productos[2])}€`);
console.log(`Total compra es de (sumaFlecha) ${sumaFlecha(productos[0], productos[1], productos[2])}€`);
