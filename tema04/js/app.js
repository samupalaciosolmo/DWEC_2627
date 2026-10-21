/*
  Tarea 4 · DWEC · Samuel Palacios Olmo
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("Error: No se puede dividir entre 0 (genera Infinity).", "danger");
    console.warn("Dividir: división entre cero detectada");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("Error: No se puede calcular el módulo con divisor 0 (genera NaN).", "danger");
    console.warn("Módulo: módulo entre cero detectado");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números para poder comparar.", "danger");
    console.warn("¿Cuál es mayor?: falta algún número");
  } else if (n1 > n2) {
    mostrar(`El número 1 (${n1}) es mayor que el número 2 (${n2}).`, "info");
    console.log(`¿Cuál es mayor?: ${n1} es mayor que ${n2}`);
  } else if (n2 > n1) {
    mostrar(`El número 2 (${n2}) es mayor que el número 1 (${n1}).`, "info");
    console.log(`¿Cuál es mayor?: ${n2} es mayor que ${n1}`);
  } else {
    mostrar(`Ambos números son iguales (${n1}).`, "info");
    console.log(`¿Cuál es mayor?: ${n1} y ${n2} son iguales`);
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1 para comprobar la paridad.", "danger");
    console.warn("¿Par o impar?: falta el número 1");
  } else if (!Number.isInteger(n1)) {
    mostrar("Aviso: El número tiene decimales, no es ni par ni impar.", "warning");
    console.warn("¿Par o impar?: el número tiene decimales");
  } else {
    const paridad = (n1 % 2 === 0) ? "par" : "impar";
    mostrar(`El número ${n1} es ${paridad}.`, "success");
    console.log(`¿Par o impar?: ${n1} es ${paridad}`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function validarBucle(veces) {
  if (Number.isNaN(veces)) {
    mostrar("Error: Falta indicar el número de repeticiones en el número 1.", "danger");
    console.warn("Bucle: falta el número de repeticiones");
    return false;
  }
  if (!Number.isInteger(veces)) {
    mostrar("Error: El número de repeticiones debe ser un número entero.", "danger");
    console.warn("Bucle: el número tiene decimales");
    return false;
  }
  if (veces > MAXIMO_REPETICIONES) {
    mostrar(`Error: El número de repeticiones supera el máximo permitido (${MAXIMO_REPETICIONES}).`, "danger");
    console.warn("Bucle: supera MAXIMO_REPETICIONES");
    return false;
  }
  return true;
}

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarBucle(veces)) return;

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    contador++;
    anadirLinea(`for · repetición ${i} de ${veces}`);
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Bucle for completado: ${contador} vueltas.`);
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarBucle(veces)) return;

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    contador++;
    anadirLinea(`while · repetición ${i} de ${veces}`);
    i++;
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Bucle while completado: ${contador} vueltas.`);
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarBucle(veces)) return;

  let contador = 0;
  let i = 1;

  if (veces <= 0) {
    contador++;
    anadirLinea(`do...while · repetición 1 de ${veces} (ejecución forzada por estructura)`);
  } else {
    do {
      contador++;
      anadirLinea(`do...while · repetición ${i} de ${veces}`);
      i++;
    } while (i <= veces);
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Bucle do...while completado: ${contador} vueltas.`);
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarBucle(veces)) return;

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    contador++;
    const colorBadge = (i % 2 === 0) ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Badges for completado: ${contador} vueltas.`);
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarBucle(veces)) return;

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    contador++;
    const colorBadge = (i % 2 === 0) ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    i++;
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Badges while completado: ${contador} vueltas.`);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarBucle(veces)) return;

  let contador = 0;
  let i = 1;

  if (veces <= 0) {
    contador++;
    anadirBadge(1, "primary");
  } else {
    do {
      contador++;
      const colorBadge = (i % 2 === 0) ? "primary" : "secondary";
      anadirBadge(i, colorBadge);
      i++;
    } while (i <= veces);
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Badges do...while completado: ${contador} vueltas.`);
}