"use strict";

const app1 = document.querySelector("#app2");

const a = 12;
const b = 5;

const suma = a + b;
const resta = a - b;
const division = a / b;
const resto = a % b;

app1.innerHTML = `<p class="suma">Suma: ${suma}</p>
                  <p class="resta">Resta: ${resta}</p>
                  <p class="division">División: ${division}</p>
                  <p class="resto">Resto: ${resto}</p>
                    `;