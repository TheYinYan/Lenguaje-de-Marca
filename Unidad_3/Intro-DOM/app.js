"use strict";
console.log("JS cargado ✅");

const app = document.querySelector("#app");
const nombre = "1º DAM, incultos";

app.textContent = `Hola`;

app.innerHTML = `<div> 
    Hola <strong>
        ${nombre}.
    </strong>
</div>`;

// Métodos modernos getters y setters 
console.log(app.getHTML());
const cod = ` <strong>Despierta Ismael</strong>`
app.setHTMLUnsafe(cod);

// Crear elementos HTML
const contenedor = document.createElement("section");
console.log(contenedor.isConnected); //false --> Porque no esta conectado
contenedor.innerHTML= "Estoy creando una seccion a través del método createElement";
// Lo insertamos 
document.body.appendChild(contenedor);
console.log(contenedor.isConnected); //true --> Porque esta conectado

const seccion = contenedor; //No esta haciendeo una copia, sino una referencia al mismo elemento

//Si queremos copiar clonar:
const section = contenedor.cloneNode(true); 

// En un Div vacio hacer:
    //1. Texto HTML en negritas clase
    //2. Crear otro div dentro del 1 Div
    //3. EL 2 div texto HTML en negritas
    //4. Strong pertenece a la clase Strong
const ej1 = document.querySelector(".ej1")
ej1.innerHTML = `
    <strong>
        Primer texto
    </strong>
    <div>
        <strong class="green">Segundo texto</strong>
    </div>
`
console.log(ej1.getHTML());

// Otra forma
const ejercicio = document.querySelector(".ejercicio");
ejercicio.innerHTML = `Hola tonotos`;

const div = document.createElement("div");
const strong = document.createElement("strong");
strong.textContent = `Malaga FC 3 - 0 Burgo`;

div.appendChild(strong);
ejercicio.appendChild(div);
strong.className = ("green");