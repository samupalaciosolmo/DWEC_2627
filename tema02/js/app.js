// Función para el Botón 1: Saludar
function saludar() {
    // Muestra una ventana emergente en el navegador
    alert("¡Hola! Bienvenido a mi primera página interactiva.");
    // Deja una traza informativa en la consola
    console.log("Se ha ejecutado la función saludar().");
}

// Función para el Botón 2: Simular un error
function simularError() {
    // Registra un error en la consola (solo lo ve el desarrollador con F12)
    console.error("ERROR SIMULADO: Se ha producido un fallo en la conexión con la base de datos.");
}

// Función para el Botón 3: ¿Qué navegador soy?
function detectarNavegador() {
    // Guarda el userAgent del navegador en una variable
    let informacionNavegador = navigator.userAgent;
    
    // Lo muestra en una alerta al usuario
    alert("Tu navegador es:\n" + informacionNavegador);
    
    // Lo muestra como una advertencia amarilla en la consola
    console.warn("Información de UserAgent consultada: ", informacionNavegador);
}
