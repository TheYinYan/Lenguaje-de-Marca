"use strict";
// OBJETOS (clave -> valor)
const carta = {
    cafe: { precio: 1.2, emoji: "☕", texto: "Café", alergenos: [] },
    te: { precio: 1.1, emoji: "🍵", texto: "Té chai", alergenos: [] },
    pitufo: { precio: 1.8, emoji: "🥪", texto: "Pitufo mixto", alergenos: ["gluten"] },
    donut: { precio: 2, emoji: "🍩", texto: "Donut", alergenos: ["gluten", "huevo"] }
};
// ELEMENTOS HTML DEL DOM
const selectProducto = document.getElementById("selectProducto");
const tablaMenu = document.getElementById("tablaMenu");
const infoProducto = document.getElementById("infoProducto");

// Como acceder al valor de una clave
const producto = "pitufo";
console.log(`El precio del ${producto} es ${carta[producto].precio}€`);

// Método para obtener las claves
const claves = Object.keys(carta);

// Rellenar el select
for (const clave of claves) {
    const option = document.createElement("option");
    option.value = clave
    option.textContent = `${carta[clave].texto} ${carta[clave].emoji}`
    selectProducto.appendChild(option)
}

// Rellenar Tabla
selectProducto.addEventListener('change', (event) => {
    const selec = event.target.value;
    const prod = carta[selec];

    console.log(selec);
    console.log(prod);

    tablaMenu.innerHTML = `
    <tr>
        <td>${selec}</td>
        <td>${prod.emoji}</td>
        <td>${prod.texto}</td>
        <td>${prod.precio}€</td>
        <td>${prod.alergenos}</td>
    </tr>`
});
