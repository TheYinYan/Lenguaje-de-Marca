# [🧮 Calculadora – Ejercicio 02 UD 03](https://theyinyan.github.io/Calculadora/)

## 📚 Módulo

**Lenguajes de Marcas y Sistemas de Gestión de Información**
C.F.G.S. Desarrollo de Aplicaciones Multiplataforma

---

## 📌 Descripción del proyecto

Este proyecto consiste en el desarrollo de una **calculadora web funcional** utilizando **HTML5, CSS3 y JavaScript**, aplicando los conocimientos adquiridos en la Unidad Didáctica 03.

La aplicación permite realizar operaciones matemáticas básicas y operaciones inmediatas, gestionando correctamente la entrada de datos, los errores y el estilo visual dinámico según la operación realizada.

---

## 🎯 Objetivos de aprendizaje

Este proyecto contribuye al desarrollo del siguiente Resultado de Aprendizaje:

**RA 3. Accede y manipula documentos web utilizando lenguajes de script de cliente.**

Especialmente en los siguientes criterios:

* Manipulación del DOM.
* Gestión de eventos.
* Creación y modificación de elementos web.
* Control dinámico de estilos mediante JavaScript.
* Validación de datos en el lado cliente.

---

## 🛠️ Tecnologías utilizadas

* **HTML5** – Estructura del documento.
* **CSS3** – Estilos y diseño visual.
* **JavaScript (ES6)** – Lógica y funcionalidad de la calculadora.

---

## 📂 Estructura del proyecto

El proyecto sigue la estructura obligatoria especificada en la práctica:

```
/proyecto-calculadora
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── imagenes/
│   ├── inverso.svg
│   ├── cuadrado.svg
│   ├── raiz.svg
│   ├── retroceso.svg
│   └── calculator-icon-windows-v1.ico
```

---

## 🖥️ Funcionalidades implementadas

### 🔢 Entrada numérica

* Números del 0 al 9.
* Punto decimal (solo uno por número).
* Límite máximo de 12 dígitos.
* Gestión correcta de ceros a la izquierda.

### ➕ Operaciones básicas

* Suma (+)
* Resta (-)
* Multiplicación (×)
* División (/)

### ⚡ Operaciones inmediatas

* Inverso (1/x)
* Cuadrado (x²)
* Raíz cuadrada (√)

### 🎛️ Controles

* CE (Borrar entrada)
* C (Borrar todo)
* ⌫ Retroceso
* = Igual

---

## 🎨 Comportamiento visual dinámico

* El resultado cambia de color según la operación realizada.
* Cada operación tiene su propio color definido en CSS.
* Los errores se muestran en color rojo.
* El punto decimal se deshabilita cuando ya está en uso.
* Botones deshabilitados muestran opacidad reducida y cursor `not-allowed`.

---

## ⚠️ Gestión de errores

La calculadora muestra **"Error"** cuando:

* Se divide entre cero.
* Se calcula la raíz cuadrada de un número negativo.
* Se intenta calcular el inverso de 0.

---

## ⌨️ Funcionalidad adicional (opcional)

La calculadora permite el uso del teclado:

| Tecla     | Función        |
| --------- | -------------- |
| 0–9       | Números        |
| .         | Punto decimal  |
| +         | Suma           |
| -         | Resta          |
| * / x     | Multiplicación |
| Enter / = | Igual          |
| Backspace | Retroceso      |
| c         | Borrar todo    |
| i         | Inverso        |
| s         | Cuadrado       |
| r         | Raíz           |

---

## 🎨 Estilos destacados

* Diseño centrado vertical y horizontalmente.
* Uso de fuente tipo display digital (`Segment7Standard`).
* Uso de colores diferenciados por operación.
* Interfaz inspirada en calculadora digital moderna.
* Cabecera fija arriba y pie de página fijo abajo.

---

## 📌 Autor

**Samuel Ruizmartin**
C.F.G.S. Desarrollo de Aplicaciones Multiplataforma

---