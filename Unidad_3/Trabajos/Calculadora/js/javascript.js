
let valorAct = "0"; // Lo que se ve en pantalla
let valorAnt = null; // Numero anterior 
let operadorAct = null; // +, -, *, /
let resultadoMostrado = false; // Para saber si hay que empezar un nuevo número 
let puntodecimal = true; //Si se puede usar o no el punto decimal

// Obtento los elementos de la web necesarios a partir del DOM
const botonesNumeros = [...document.querySelectorAll(".numero")]; // Devuelve un Array apartir de NodeList
const pantalla = document.querySelector(".panel");
const botonesOperador = [...document.querySelectorAll(".operador")];
const botonIgual = document.querySelector("#igual");
const botonDecimal = document.querySelector("#decimal");
const borrarEntradas = document.querySelector("#Borrar-entrada");
const borrarTodos = document.querySelector("#Borrar-todo");
const eliminar = document.querySelector("#eliminar");

// Metodo forEach() [Arrays]
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => {
        mostrarNumeroPantalla(boton.textContent);
    });
});

botonesOperador.forEach(boton => {
    boton.addEventListener("click", () => {
        manejarOperador(boton.textContent);
    });
});

eliminar.addEventListener("click", retroceder)
borrarTodos.addEventListener("click", borrarTodo);
borrarEntradas.addEventListener("click", borrarEntrada);
botonDecimal.addEventListener("click", mostrarPuntoPantalla)
botonIgual.addEventListener("click", calcularOperacion);

/**
 * @brief Ejecuta la inicialización de la calculadora una vez que el DOM está completamente cargado.
 *
 * Esta función prepara todo lo necesario para que la calculadora funciones, incluyendo la configuración de la interfaz, los valores iniciales de las variables necesarias y la vinculación de eventos a los controles.
 *
 */
document.addEventListener('DOMContentLoaded', () => {
});

/**
 * @brief Deshabilita el botón del punto decimal en la calculadora.
 *
 * Cambia el estado del botón para evitar que el usuario introduzca múltiples puntos decimales en un mismo número. 
 * Además, actualiza su clase CSS para reflejar visualmente que está deshabilitado.
 *
 */
function deshabilitarPunto() {
    botonDecimal.classList.replace("decimal", "deshabilitado");
    puntodecimal = false;
}

/**
 * @brief Habilita nuevamente el botón del punto decimal en la calculadora.
 *
 * Esta función restaura la capacidad de usar el punto decimal, normalmente después de haber introducido una operación o un número válido.
 * Además, actualiza su clase CSS para reflejar visualmente que está activo.
 *
 */
function habilitarPunto() {
    botonDecimal.classList.replace("deshabilitado", "decimal");
    puntodecimal = true;
}


/**
 * @brief Actualiza el contenido mostrado en la pantalla de la calculadora.
*
* Esta función se encarga de mostrar en la pantalla el número con el que se opera, aplicando controles para evitar desbordamientos visuales o resultados demasiado largos.
*
* - Si el número supera los 12 caracteres o no es finito, se redondea a 12 dígitos.
* - Si el resultado redondeado es un número entero, elimina la parte decimal.
* - Si tiene decimales, elimina ceros innecesarios al final.
* - Si el número es corto y válido, se muestra tal cual.
*
*/
function actualizarPantalla() {
    while (valorAct.length > 12) {
        valorAct = valorAct.slice(0, -1);
    }
    if (!String(valorAct).includes(".")) {
        habilitarPunto();
    }
    pantalla.textContent = valorAct;
}


/**
 * @brief Muestra un número en la pantalla gestionando correctamente la entrada.
 *
 * Esta función controla la lógica al introducir un dígito en la calculadora:
 *
 * - Si previamente se ha mostrado un resultado de una operación, se inicia una nueva entrada reemplazando el valor actual por el número pulsado.
 * - Si el valor actual es 0, se sustituye por el nuevo número pulsado para evitar acumulación de ceros a la izquierda.
 * - En cualquier otro caso permite formar números de varias cifras.
 *
 * @param {string} numero - El dígito que el usuario ha pulsado (0–9).
 *
 */
function mostrarNumeroPantalla(numero) {
    pantallaColorNormal();
    if (resultadoMostrado) {
        pantalla.textContent = valorAct;
        resultadoMostrado = false;

    } else if (valorAct === "0") {
        valorAct = numero;
    } else {
        valorAct += numero;
    }
    actualizarPantalla();
}

/**
 * @brief Agrega un punto decimal a la pantalla de la calculadora.
 *
 * Comprueba si ya se ha mostrado un resultado o si el número actual no contiene un punto.
 * Si corresponde, agrega un punto y actualiza la pantalla.
 * Deshabilita el botón de punto para evitar múltiples decimales.
 */
function mostrarPuntoPantalla() {
    if (puntodecimal) {
        valorAct += "."
    }
    deshabilitarPunto();
    actualizarPantalla();
}

/**
 * @brief Gestiona de forma correcta la operación matemática que hemos seleccionado (suma, resta, multiplicación, división).
 * 
 * Esta función gestiona la operación matemática seleccionada asegurando que:
 *
 * - Se guarda la operación matemática seleccionada para luego aplicarla.
 * - Se guarda el número que había escrito en la pantalla.
 * - Se resetea el valor actual para poner el número a 0.
 *
 */
function manejarOperador(operador) {
    operadorAct = operador;
    valorAnt = valorAct;
    valorAct = "0";
    resultadoMostrado = false;
    habilitarPunto();
}

/**
 * @brief Realiza la operación matemática indicada por el operador almacenado.
 *
 * Esta función toma los valores de los números seleccionados por el usuario, aplica el operador seleccionado y muestra el resultado en pantalla.
 * Gestiona también el caso especial de división entre cero, mostrando "Error".
 *
 */
function calcularOperacion() {
    if (operadorAct === null || valorAnt === null) return;

    let num1 = parseFloat(valorAnt);
    let num2 = parseFloat(valorAct);
    let resultado;

    switch (operadorAct) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "x":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                valorAct = "Error"
                // Poner a Rojo
                pantalla.classList.replace("color-normal", "color-error");
                actualizarPantalla();
                return;
            }
            resultado = num1 / num2;
            break;
    }
    valorAct = resultado;
    aplicarColorResultado(operadorAct);
    actualizarPantalla();
    resultadoMostrado = true;
}

/**
 * @brief Restaura el color por defecto de la pantalla de la calculadora.
 *
 * Establece la clase CSS correspondiente al estado visual normal de la pantalla.
 *
 */
function pantallaColorNormal() {
    pantalla.className = "panel color-normal";
}
/**
 * @brief Borra el número introducido actualmente en la pantalla.
 *
 * Restablece la entrada actual a 0.
 *
 */
function borrarEntrada() {
    pantallaColorNormal();
    habilitarPunto();
    valorAct = "0";
    actualizarPantalla();
}
/**
 * @brief Restablece completamente la calculadora a su estado inicial.
 *
 * Reinicia todos los valores almacenados, incluidos el número actual, el número anterior, el operador activo y el indicador de resultado mostrado.
 * También actualiza la pantalla, restaura el color normal y habilita el punto decimal.
 *
 */
function borrarTodo() {
    valorAct = "0";
    valorAnt = null;
    operadorAct = null;
    resultadoMostrado = false;

    habilitarPunto();
    pantallaColorNormal();
    actualizarPantalla();
}
/**
 * @brief Elimina el último carácter del número mostrado en pantalla.
 *
 * Gestiona el borrado dígito a dígito. Si se había mostrado un resultado previo reinicia la pantalla a 0. Si se elimina un punto decimal, vuelve a habilitarse que se pueda seleccionar.
 * Cuando solo queda un carácter, la pantalla vuelve a mostrar 0.
 *
 */
function retroceder() {
    if (valorAct.slice(-1) === ".") {
        habilitarPunto();
    }
    valorAct = valorAct.slice(0, -1);

    if (valorAct === "") {
        valorAct = "0";
    }

    actualizarPantalla();
}

/**
 * @brief Realiza operaciones inmediatas sobre el número mostrado.
 *
 * Soporta las siguientes operaciones:
 * - Inverso (1/x)
 * - Cuadrado (x²)
 * - Raíz cuadrada (√x)
 *
 * Gestiona errores como división entre cero o raíz cuadrada de un número negativo, mostrando "Error" en pantalla y cambiando el color de la misma.
 *
 * @param {string} operacion - La operación a realizar: 'inverso', 'cuadrado' o 'raiz'.
 *
 */
function operacionInmediata(operacion) {

}

/**
 * @brief Aplica un color específico a la pantalla según la operación realizada.
 *
 * Cambia la clase CSS de la pantalla para reflejar visualmente el tipo de operación que se acaba de ejecutar, tanto para operaciones binarias (+, -, ×, /) como operaciones inmediatas (inverso, cuadrado, raíz).
 *
 * @param {string} operador - Operación realizada: '+', '-', '×', '/', 'inverso', 'cuadrado', 'raiz'.
 *
 */
function aplicarColorResultado(operador) {
    pantallaColorNormal();
    switch (operador) {
        case "+":
            pantalla.classList.replace("color-normal", "color-suma");
            break;
        case "-":
            pantalla.classList.replace("color-normal", "color-resta");
            break;
        case "x":
            pantalla.classList.replace("color-normal", "color-multiplica");
            break;
        case "/":
            pantalla.classList.replace("color-normal", "color-divide");
            break;
    }
}

/**
 * @brief Gestiona la entrada de teclado para la calculadora.
 *
 * Permite controlar la calculadora mediante teclas:
 * - Números 0-9: Números del 0 al 9.
 * - Punto decimal: Tecla punto.
 * - Operadores: Teclas +, -, *, /.
 * - Calcular resultado: Enter o =.
 * - Backspace: Retrocede un carácter.
 * - Tecla 'C' o 'c': Ejecuta la funcionalidad de borrar todo.
 * - Tecla 'i': Calcula el inverso.
 * - Tecla 's': Calcula el cuadrado.
 * - Tecla 'r': Calcula la raíz cuadrada
 *
 * @param {KeyboardEvent} teclaevento - Evento de teclado capturado.
 *
 */

window.addEventListener('keydown', (teclaevento) => {
});