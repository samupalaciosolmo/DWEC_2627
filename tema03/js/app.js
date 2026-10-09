/**
 * DWEC - Tema 3: Variables, tipos y conversiones
 * Archivo principal de JavaScript
 */

// ==========================================
// EJERCICIO 1. Variables y typeof
// ==========================================
function ejercicio1() {
  console.log("--- EJERCICIO 1: Variables y typeof ---");

  // 1 y 2. Declaración de variables de 6 tipos distintos usando const y let
  const numero = 25;                  // number
  const texto = "Hola";               // string
  const esVerdad = true;              // boolean
  const nada = null;                  // null
  let sinDefinir;                     // undefined (inicializada más tarde)
  const numeroGrande = 100n;          // bigint

  // Damos valor a la variable declarada con let
  sinDefinir = "Valor asignado a la variable let más tarde";

  // 3. Mostrar en consola el valor y typeof de cada variable
  console.log("1. Variable 'numero':", numero, "| typeof:", typeof numero);
  console.log("2. Variable 'texto':", texto, "| typeof:", typeof texto);
  console.log("3. Variable 'esVerdad':", esVerdad, "| typeof:", typeof esVerdad);
  console.log("4. Variable 'nada':", nada, "| typeof:", typeof nada); // Devuelve "object" por un bug histórico
  console.log("5. Variable 'sinDefinir':", sinDefinir, "| typeof:", typeof sinDefinir);
  console.log("6. Variable 'numeroGrande':", numeroGrande, "| typeof:", typeof numeroGrande);
}

// ==========================================
// EJERCICIO 2. Conversiones explícitas
// ==========================================
function ejercicio2() {
  console.log("--- EJERCICIO 2: Conversiones explícitas ---");

  // Conversiones con comentario de predicción y muestra en consola de valor y typeof
  
  // Predicción: "123" (string)
  const conv1 = String(123);
  console.log('String(123) -> Resultado:', conv1, '| typeof:', typeof conv1);

  // Predicción: 123 (number)
  const conv2 = Number("123");
  console.log('Number("123") -> Resultado:', conv2, '| typeof:', typeof conv2);

  // Predicción: NaN (number)
  const conv3 = Number("12abc");
  console.log('Number("12abc") -> Resultado:', conv3, '| typeof:', typeof conv3);

  // Predicción personal (fallo esperado): esperábamos NaN, pero sale 0 (number)
  const conv4 = Number("");
  console.log('Number("") -> Resultado:', conv4, '| typeof:', typeof conv4);

  // Predicción: 1 (number)
  const conv5 = Number(true);
  console.log('Number(true) -> Resultado:', conv5, '| typeof:', typeof conv5);

  // Predicción: false (boolean)
  const conv6 = Boolean(0);
  console.log('Boolean(0) -> Resultado:', conv6, '| typeof:', typeof conv6);

  // Predicción: true (boolean)
  const conv7 = Boolean("texto");
  console.log('Boolean("texto") -> Resultado:', conv7, '| typeof:', typeof conv7);

  // Predicción: false (boolean)
  const conv8 = Boolean("");
  console.log('Boolean("") -> Resultado:', conv8, '| typeof:', typeof conv8);
}

// ==========================================
// EJERCICIO 3. Coerción y comparaciones
// ==========================================
function ejercicio3() {
  console.log("--- EJERCICIO 3: Coerción y comparaciones ---");

  // 1. Probar expresiones que mezclan tipos
  console.log('Expresión "5" - 2:', "5" - 2, '| typeof:', typeof ("5" - 2));     // 3 (manda número)
  console.log('Expresión "5" + 2:', "5" + 2, '| typeof:', typeof ("5" + 2));     // "52" (manda cadena)
  console.log('Expresión "5" * "2":', "5" * "2", '| typeof:', typeof ("5" * "2")); // 10 (manda número)
  console.log('Expresión true + 1:', true + 1, '| typeof:', typeof (true + 1));   // 2 (true vale 1)

  // 2. Comparaciones con == y ===
  console.log("\n--- Comparaciones ---");
  console.log('5 == "5":', 5 == "5");     // true
  console.log('5 === "5":', 5 === "5");   // false (tipos distintos: number vs string)

  console.log('0 == false:', 0 == false);   // true
  console.log('0 === false:', 0 === false); // false (tipos distintos: number vs boolean)

  console.log('null == undefined:', null == undefined);   // true
  console.log('null === undefined:', null === undefined); // false (tipos distintos)
}

// ==========================================
// EJERCICIO 4. Tu ficha con plantillas de cadena
// ==========================================
function ejercicio4() {
  console.log("--- EJERCICIO 4: Plantillas de cadena ---");

  // 1. Declarar datos con const y let
  const nombre = "Samu";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "1º Curso";
  const aficion = "Programación";
  
  let horasEstudio = 10;
  horasEstudio += 5; // Sumamos horas con el operador +=

  // 2. Mensaje construido con plantilla de cadena (backticks)
  const mensajeBackticks = `Hola, soy ${nombre}, curso ${curso} del ciclo ${ciclo}. Mi afición es ${aficion} y esta semana he estudiado ${horasEstudio} horas.`;

  // Mostrar con alert() y en consola
  alert(mensajeBackticks);
  console.log("Mensaje con plantilla de cadena (backticks):");
  console.log(mensajeBackticks);

  // 3. Mismo mensaje concatenando con +
  const mensajeConcatenado = "Hola, soy " + nombre + ", curso " + curso + " del ciclo " + ciclo + ". Mi afición es " + aficion + " y esta semana he estudiado " + horasEstudio + " horas.";

  console.log("\nMensaje concatenado con (+):");
  console.log(mensajeConcatenado);

  // Comparar ambos mensajes con === (debe salir true)
  const sonIguales = mensajeBackticks === mensajeConcatenado;
  console.log("\n¿Ambos mensajes son exactamente iguales (===)?:", sonIguales);

  // 4. Indicación para el error en la consola del navegador
  console.log("\n[INSTRUCCIONES PARA LA CAPTURA DEL ERROR]");
  console.log("Escribe en esta misma consola: const prueba = 1; y luego prueba = 2;");
  console.log("Copia el error rojo que te salga y pégalo en la card del Ejercicio 4 del HTML.");
}