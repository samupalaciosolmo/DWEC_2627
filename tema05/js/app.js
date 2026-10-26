/*
  Tarea 5 · DWEC · Samuel Palacios Olmo
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  // El segundo párrafo, con querySelector y su clase (.segundo): resáltalo con la clase "bg-warning-subtle"
  const segundo = document.querySelector("#contenido .segundo");
  if (segundo) {
    segundo.classList.add("bg-warning-subtle");
  }

  // El tercero, con querySelectorAll("#contenido p") y su posición en la lista: ponlo en rojo con "text-danger"
  const parrafos = document.querySelectorAll("#contenido p");
  if (parrafos.length >= 3) {
    parrafos[2].classList.add("text-danger");
  }

  // Un console.log() que diga que se han aplicado los cambios
  console.log("Se han aplicado los cambios del ejercicio 1.");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const aviso2 = document.querySelector("#aviso2");

  if (contenido) {
    // Crea un <p> con document.createElement()
    const nuevoP = document.createElement("p");

    // Dale el texto «Párrafo nuevo N», donde N es el número de párrafos que habrá en #contenido
    const n = contenido.children.length + 1;
    nuevoP.textContent = `Párrafo nuevo ${n}`;

    // Cuélgalo al final de #contenido con append()
    contenido.append(nuevoP);

    // Ocultar el aviso si estaba visible
    if (aviso2) {
      aviso2.classList.add("d-none");
    }

    console.log(`Se ha añadido el párrafo nuevo ${n}.`);
  }
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const aviso2 = document.querySelector("#aviso2");

  if (contenido) {
    // Busca el último párrafo de #contenido (lastElementChild)
    const ultimo = contenido.lastElementChild;

    // Si es null (ya no queda ninguno), muestra el aviso #aviso2 quitándole la clase "d-none". Si no, bórralo con remove().
    if (!ultimo) {
      if (aviso2) {
        aviso2.classList.remove("d-none");
      }
      console.log("No quedan párrafos que eliminar.");
    } else {
      ultimo.remove();
      console.log("Se ha eliminado el último párrafo.");

      // Si tras borrar ya no quedan elementos, mostrar el aviso
      if (contenido.children.length === 0 && aviso2) {
        aviso2.classList.remove("d-none");
      }
    }
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Lo mismo con "mouseleave" (cuando el ratón sale) para quitar la clase.
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  // Un console.log() que diga en cuántos párrafos se ha activado (parrafos.length).
  console.log(`Resaltado activado en ${parrafos.length} párrafos.`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const inputTexto = document.querySelector("#nuevoTexto");
  const error4 = document.querySelector("#error4");
  const primero = document.querySelector("#primero");

  if (inputTexto && primero) {
    // Lee lo escrito en #nuevoTexto con value y quítale los espacios de los extremos con trim().
    const texto = inputTexto.value.trim();

    // Si está vacío, muestra el error #error4 (quítale "d-none") y no cambies nada.
    if (texto === "") {
      if (error4) {
        error4.classList.remove("d-none");
      }
      console.log("Error: El campo de texto está vacío.");
    } else {
      // Si no, pon ese texto en el primer párrafo de #contenido con textContent y oculta el error.
      if (error4) {
        error4.classList.add("d-none");
      }
      primero.textContent = texto;
      console.log("Texto del primer párrafo cambiado con textContent.");
    }
  }
}

function cambiarConHtml() {
  const inputTexto = document.querySelector("#nuevoTexto");
  const error4 = document.querySelector("#error4");
  const primero = document.querySelector("#primero");

  if (inputTexto && primero) {
    const texto = inputTexto.value.trim();

    // Lo mismo que cambiarTexto(), pero con innerHTML.
    if (texto === "") {
      if (error4) {
        error4.classList.remove("d-none");
      }
      console.log("Error: El campo de texto está vacío (innerHTML).");
    } else {
      if (error4) {
        error4.classList.add("d-none");
      }
      primero.innerHTML = texto;
      console.log("Texto del primer párrafo cambiado con innerHTML.");
    }
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function actualizarContadorTareas() {
  const listaTareas = document.querySelector("#listaTareas");
  const totalTareas = document.querySelector("#totalTareas");
  if (listaTareas && totalTareas) {
    totalTareas.textContent = listaTareas.querySelectorAll("li").length;
  }
}

function anadirTarea() {
  const tareaInput = document.querySelector("#tareaInput");
  const error5 = document.querySelector("#error5");
  const listaTareas = document.querySelector("#listaTareas");

  if (tareaInput && listaTareas) {
    // Lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
    const texto = tareaInput.value.trim();

    if (texto === "") {
      if (error5) {
        error5.textContent = "El campo de la tarea no puede estar vacío.";
        error5.classList.remove("d-none");
      }
      console.log("Error: Intento de añadir una tarea vacía.");
    } else {
      if (error5) {
        error5.classList.add("d-none");
      }

      // Crea un <li class="list-group-item"> con dos elementos dentro:
      // · un <input> de tipo "checkbox" con la clase "form-check-input",
      // · un <span> con el texto de la tarea (textContent).
      const li = document.createElement("li");
      li.className = "list-group-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-check-input me-2";

      const span = document.createElement("span");
      span.textContent = texto;

      li.append(checkbox);
      li.append(span);

      // Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
      listaTareas.append(li);
      tareaInput.value = "";

      // Actualiza #totalTareas con el número de <li> que hay en la lista.
      actualizarContadorTareas();
      console.log("Tarea añadida correctamente.");
    }
  }
}

function borrarCompletadas() {
  const error5 = document.querySelector("#error5");
  // Selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  const marcadas = document.querySelectorAll("#listaTareas input:checked");

  // Si no hay ninguna, avisa en #error5.
  if (marcadas.length === 0) {
    if (error5) {
      error5.textContent = "No hay ninguna tarea seleccionada para borrar.";
      error5.classList.remove("d-none");
    }
    console.log("Error: No hay tareas marcadas para borrar.");
  } else {
    if (error5) {
      error5.classList.add("d-none");
    }

    // Si hay, recórrelas con for…of y borra el <li> de cada una (el <li> es el padre de la casilla: parentElement).
    for (const checkbox of marcadas) {
      const li = checkbox.parentElement;
      if (li) {
        li.remove();
      }
    }

    // Actualiza #totalTareas.
    actualizarContadorTareas();
    console.log("Tareas completadas borradas correctamente.");
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // Con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768), lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  const datoPunto = document.querySelector("#datoPunto");
  let corte = "";
  if (ancho < 576) {
    corte = "xs (< 576 px)";
  } else if (ancho < 768) {
    corte = "sm (≥ 576 px)";
  } else if (ancho < 992) {
    corte = "md (≥ 768 px)";
  } else if (ancho < 1200) {
    corte = "lg (≥ 992 px)";
  } else if (ancho < 1400) {
    corte = "xl (≥ 1200 px)";
  } else {
    corte = "xxl (≥ 1400 px)";
  }
  if (datoPunto) {
    datoPunto.textContent = corte;
  }

  // El tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  const datoPantalla = document.querySelector("#datoPantalla");
  if (datoPantalla) {
    datoPantalla.textContent = `${window.screen.width} × ${window.screen.height} px`;
  }

  // La URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
  const datoUrl = document.querySelector("#datoUrl");
  if (datoUrl) {
    datoUrl.textContent = window.location.href;
  }

  const datoIdioma = document.querySelector("#datoIdioma");
  if (datoIdioma) {
    datoIdioma.textContent = window.navigator.language;
  }

  console.log("Datos de la ventana (BOM) actualizados.");
}