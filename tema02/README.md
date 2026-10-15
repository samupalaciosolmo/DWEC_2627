# Tarea Tema 2: Navegadores y Primera Página Interactiva

Este proyecto consiste en un sitio web básico de dos páginas desarrollado para la asignatura de Desarrollo Web en Entornos Cliente (DWEC). Está maquetado utilizando componentes de Bootstrap y contiene lógica interactiva programada en JavaScript externo.

---

## Parte A: Navegadores y motores (Reflexiones)

### ¿Por qué casi todos los navegadores comparten motor?
Hoy en día, la mayoría de los navegadores comerciales (como Chrome, Edge y Opera) utilizan el motor Blink de Chromium. Esto ocurre porque desarrollar y mantener un motor web desde cero requiere una cantidad inmensa de recursos y tiempo. Al unificar esfuerzos en una base de código común de código abierto, las empresas optimizan la velocidad y la compatibilidad general de la web. 
Fuera de este ecosistema quedan principalmente Mozilla Firefox con Gecko y Apple Safari con WebKit. 
Para quien desarrolla una web, esta unificación facilita enormemente el trabajo de maquetación, reduciendo las incoherencias visuales drásticas. Sin embargo, también genera el peligro de un monopolio técnico donde una sola compañía (Google) dicte los estándares de la industria, obligando a adaptar los desarrollos a sus propios criterios de renderizado.

### Reflexión de compatibilidad y pruebas
Si un cliente me encarga una web, realizaría las primeras pruebas en **Google Chrome para móviles (Android)** y **Safari para móviles (iOS)**, seguidos de Chrome y Firefox en escritorio. La razón fundamental es que el tráfico actual se concentra masivamente en dispositivos móviles. Probar en Safari es crítico porque utiliza WebKit y suele comportarse de forma distinta a la base de Chromium; omitirlo podría causar que los usuarios de iPhone vean la web completamente desconfigurada.

---

## Parte B: Interacción con JavaScript

El comportamiento dinámico se aloja de manera exclusiva en el archivo externo `js/app.js`, manteniendo el código HTML limpio de bloques de script intrusivos. Se han implementado tres funciones asociadas a eventos:
* **Saludar:** Ejecuta un mensaje interactivo mediante `alert()`.
* **Simular un error:** Registra un fallo técnico controlado en la consola usando `console.error()`.
* **¿Qué navegador soy?:** Consulta y expone el valor nativo de la propiedad `navigator.userAgent`.

---

## Parte C: Evidencias y Explicación

### Explicación "Quién hace qué" (Botón de Saludar)
Para el botón "Saludar", las responsabilidades de la arquitectura web se dividen de la siguiente manera:
1. **HTML (`interaccion.html`):** Define estructuralmente el botón (`<button>`) y utiliza el atributo `onclick="saludar()"` para actuar como el nexo que dispara la acción ante el clic del usuario.
2. **Bootstrap (CSS):** Aplica las clases de diseño visual (`btn btn-success btn-lg`). Se encarga de que tenga el color verde de éxito, esquinas redondeadas, transiciones suaves al pasar el cursor y un tamaño adaptable a la pantalla sin necesidad de CSS personalizado.
3. **JavaScript (`js/app.js`):** Contiene la lógica operativa dentro de la función `saludar()`. Detiene momentáneamente el hilo de ejecución para abrir el cuadro de diálogo `alert()` en pantalla y escribe el registro correspondiente en la consola del navegador.

### Comparativa de UserAgent
Al inspeccionar las cadenas devueltas por `navigator.userAgent`, se observan fragmentos de texto cruzados (como la presencia de *Mozilla*, *AppleWebKit* y *Safari* de forma simultánea en navegadores que son, por ejemplo, Google Chrome). 
Esto sucede por **razones históricas de compatibilidad**. Antiguamente, los servidores web filtraban el contenido y bloqueaban a los navegadores que no fuesen Mozilla o que no usaran ciertos motores avanzados. Para evitar ser bloqueados o recibir páginas web en texto plano, los navegadores nuevos empezaron a añadir el nombre de sus competidores a su propia cadena de identificación. Así engañaban a los servidores garantizando que siempre se les sirviera la versión moderna y enriquecida de la web.

---

## Fuentes Consultadas
* **Can I Use:** Especificaciones de soporte para etiquetas semánticas avanzadas (https://caniuse.com).
* **MDN Web Docs:** Documentación técnica sobre la propiedad `navigator.userAgent` y manejo de eventos.

## Uso de IA
Se utilizó un asistente de IA exclusivamente para estructurar las plantillas iniciales del marcado HTML y optimizar la redacción técnica de las explicaciones históricas sobre las cadenas de texto en los navegadores. El código JavaScript final fue revisado de manera manual para asegurar el cumplimiento exacto de la rúbrica.
