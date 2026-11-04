/*
  Tarea 6 · DWEC · Samuel Palacios Olmo
  Objetos y arrays.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Samuel",
  apellidos: "Palacios Olmo",
  edad: 21,
  curso: "2.º DAW",
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida1 = document.querySelector("#salida1");
  salida1.textContent = "";

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "mb-2");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    ul.append(li);
  });
  salida1.append(ul);

  const p = document.createElement("p");
  p.classList.add("fw-bold", "text-primary", "mb-0");
  p.textContent = estudiante.presentarse();
  salida1.append(p);

  console.log("Ejercicio 1: Ver ficha ->", estudiante);
}

function cumplirAnios() {
  estudiante.edad++;
  verFicha();
  console.log("Ejercicio 1: Cumplir años -> nueva edad =", estudiante.edad);
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
  console.log("Ejercicio 1: Quitar curso -> curso borrado (valor actual:", estudiante.curso, ")");
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("La lista de colores está vacía.");
    return;
  }
  const colorSalido = colores.pop();
  mostrarColores();
  document.querySelector("#aviso2").classList.add("d-none");
  console.log("Ejercicio 2: pop → color salido:", colorSalido, "| Restantes:", comoTexto(colores));
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("La lista de colores está vacía.");
    return;
  }
  const colorSalido = colores.shift();
  mostrarColores();
  document.querySelector("#aviso2").classList.add("d-none");
  console.log("Ejercicio 2: shift → color salido:", colorSalido, "| Restantes:", comoTexto(colores));
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  const mensaje3 = document.querySelector("#mensaje3");
  mensaje3.textContent = "Catálogo completo: " + productos.length + " productos.";
  console.log("Ejercicio 3: mostrar todos los productos. Total:", productos.length);
}

function ordenarPorPrecio() {
  let productosCopia = [...productos];
  productosCopia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(productosCopia);
  const mensaje3 = document.querySelector("#mensaje3");
  mensaje3.textContent = "Productos ordenados de más barato a más caro (sobre una copia).";
  console.log("Ejercicio 3: ordenar por precio (copia)");
}

function filtrarCaros() {
  let filtrados = productos.filter(function (p) {
    return p.precio > 50;
  });
  pintarProductos(filtrados);
  const mensaje3 = document.querySelector("#mensaje3");
  mensaje3.textContent = "Productos con precio superior a 50 €: " + filtrados.length + " encontrados.";
  console.log("Ejercicio 3: filtrar más de 50€:", filtrados.length);
}

function buscarProducto() {
  const input = document.querySelector("#buscarProducto");
  const texto = input.value.trim().toLowerCase();
  const mensaje3 = document.querySelector("#mensaje3");

  if (texto === "") {
    mensaje3.textContent = "Escribe un término para buscar en el catálogo.";
    return;
  }

  let encontrado = productos.find(function (p) {
    return p.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    pintarProductos([]);
    mensaje3.textContent = "undefined: No se ha encontrado ningún producto que coincida con '" + texto + "'.";
    console.log("Ejercicio 3: buscar producto -> undefined para:", texto);
  } else {
    pintarProductos([encontrado]);
    mensaje3.textContent = "Producto encontrado: " + encontrado.nombre + " (" + encontrado.precio.toFixed(2) + " €)";
    console.log("Ejercicio 3: buscar producto ->", encontrado);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Samuel Palacios Olmo",
  notas: [],
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    if (this.notas.length === 0) return 0;
    let suma = this.notas.reduce(function (acum, n) {
      return acum + n;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  const pMedia = document.querySelector("#media");
  contenedor.textContent = "";

  if (alumno.notas.length === 0) {
    pMedia.textContent = "Todavía no hay notas.";
    return;
  }

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1", "p-2");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedor.append(badge);
  });

  let m = alumno.media();
  pMedia.textContent = "Media de " + alumno.notas.length + " notas: " + m.toFixed(2);
  console.log("Ejercicio 4: notas actualizadas, media =", m);
}

function anadirNota() {
  const input = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  const valorStr = input.value;

  if (valorStr.trim() === "") {
    error.textContent = "La casilla no puede estar vacía.";
    error.classList.remove("d-none");
    return;
  }

  let notaNum = Number(valorStr);
  let guardado = alumno.anadirNota(notaNum);

  if (!guardado) {
    error.textContent = "Introduce una nota válida entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: error, nota no válida:", notaNum);
  } else {
    error.classList.add("d-none");
    input.value = "";
    mostrarNotas();
    console.log("Ejercicio 4: nota añadida:", notaNum);
  }
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  const error = document.querySelector("#error4");
  error.classList.add("d-none");
  console.log("Ejercicio 4: notas borradas");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  let dobles = numeros.map(function (n) {
    return n * 2;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "Doble (map): " + comoTexto(dobles);
  const p2 = document.createElement("p");
  p2.classList.add("mb-0", "text-muted");
  p2.textContent = "Array original intacto: " + comoTexto(numeros);
  salida.append(p1, p2);
  console.log("Ejercicio 5 - dobles (map):", dobles);
}

function verPares() {
  let pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "Pares (filter): " + comoTexto(pares);
  const p2 = document.createElement("p");
  p2.classList.add("mb-0", "text-muted");
  p2.textContent = "Array original intacto: " + comoTexto(numeros);
  salida.append(p1, p2);
  console.log("Ejercicio 5 - pares (filter):", pares);
}

function verSuma() {
  let suma = numeros.reduce(function (acum, n) {
    return acum + n;
  }, 0);
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "Suma (reduce): " + suma;
  const p2 = document.createElement("p");
  p2.classList.add("mb-0", "text-muted");
  p2.textContent = "Array original intacto: " + comoTexto(numeros);
  salida.append(p1, p2);
  console.log("Ejercicio 5 - suma (reduce):", suma);
}

function verCadena() {
  let pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });
  let dobles = pares.map(function (n) {
    return n * 2;
  });
  let suma = dobles.reduce(function (acum, n) {
    return acum + n;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "1. Pares (filter): " + comoTexto(pares);
  const p2 = document.createElement("p");
  p2.textContent = "2. Dobles (map): " + comoTexto(dobles);
  const p3 = document.createElement("p");
  p3.classList.add("fw-bold");
  p3.textContent = "3. Suma total de los dobles (reduce): " + suma;
  const p4 = document.createElement("p");
  p4.classList.add("mb-0", "text-muted");
  p4.textContent = "Array original intacto: " + comoTexto(numeros);
  salida.append(p1, p2, p3, p4);
  console.log("Ejercicio 5 - tres seguidos, resultado final:", suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  const div = document.createElement("div");
  div.classList.add("d-flex", "flex-wrap", "gap-2");

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-secondary", "p-2");
    badge.textContent = posicion + " · " + ciudad;
    div.append(badge);
  });
  contenedor.append(div);
}

function verSlice() {
  let trozo = ciudades.slice(2, 5);
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "slice(2, 5) devuelve: " + comoTexto(trozo);
  const p2 = document.createElement("p");
  p2.classList.add("mb-0");
  p2.textContent = "Ciudades que siguen en el array (" + ciudades.length + "): " + comoTexto(ciudades);
  salida.append(p1, p2);
  console.log("Ejercicio 6 - slice(2, 5):", trozo);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");
  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades. ¡Hay que pulsar 'Restaurar' primero!";
    console.log("Ejercicio 6 - Aviso: quedan menos de 3 ciudades.");
    return;
  }

  let eliminadas = ciudades.splice(2, 2);
  mostrarCiudades();
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "splice(2, 2) ha eliminado: " + comoTexto(eliminadas);
  const p2 = document.createElement("p");
  p2.classList.add("mb-0");
  p2.textContent = "Ciudades restantes (" + ciudades.length + "): " + comoTexto(ciudades);
  salida.append(p1, p2);
  console.log("Ejercicio 6 - splice(2, 2) eliminó:", eliminadas);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  const salida = document.querySelector("#salida6");
  salida.textContent = "Ciudades restauradas a su estado original.";
  console.log("Ejercicio 6 - Ciudades restauradas");
}

function buscarCiudad() {
  const input = document.querySelector("#buscarCiudad");
  const nombre = input.value.trim();
  const salida = document.querySelector("#salida6");

  if (nombre === "") {
    salida.textContent = "Escribe el nombre exacto de una ciudad para buscar.";
    return;
  }

  let esta = ciudades.includes(nombre);
  let indice = ciudades.indexOf(nombre);
  salida.textContent = "";

  const p1 = document.createElement("p");
  p1.classList.add("mb-0");
  p1.textContent = "Búsqueda de '" + nombre + "': includes() -> " + esta + " | indexOf() -> " + indice;
  salida.append(p1);
  console.log("Ejercicio 6 - Búsqueda '" + nombre + "': includes=" + esta + ", indexOf=" + indice);
}

mostrarCiudades();