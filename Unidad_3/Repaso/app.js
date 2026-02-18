"use strict";
console.log("JS cargado ✅");

const a = 10;
const b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Resto:", a % b);

const nombre = "Compi";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`);

const firstWord = "frase";
const secondWord = "concatenada";

console.log(`Una ${firstWord} mejor ${secondWord}`);
const magicalWord = "<strong> Magical Word</strong>";
const template = `
<div class"container">
    ${magicalWord}
</div>
`;
console.log(template);

const templateSB = "<div class\"container\">" + magicalWord + "</div>";
console.log(templateSB);

console.log("Comparacion",5 > 3);
console.log("Comparacion",5 < 3);

console.log("Comparacion",5==5);
console.log("Comparacion",5!=5);

console.log("Comparacion",(10>1)===(1>2));
console.log("Comparacion",(10>1)===(1<2));

