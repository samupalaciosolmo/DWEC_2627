# Práctica 4: Calculadora y bucles - DAW

## Descripción de la actividad
Página web interactiva desarrollada con **Bootstrap 5** y **JavaScript moderno** que implementa una calculadora completa de operaciones aritméticas avanzadas, validación de entradas numéricas, comparaciones condicionales lógicas, operador ternario y estructuras de control de iteración (`for`, `while` y `do...while`) tanto en formato de texto como mediante componentes dinámicos (`badges`).

## Evidencias (Capturas de pantalla)
Las capturas se encuentran almacenadas en la carpeta `capturas/` con los siguientes contenidos:

1. **`pagina_entera.png`**: Vista general de la aplicación web ejecutándose en el navegador, mostrando el nombre completo del alumno en la barra de navegación y en el pie de página.
2. **`movil.png`**: Comprobación del diseño adaptativo (*Responsive Design*) mediante el modo dispositivo de las herramientas de desarrollo (F12).
3. **`division_cero.png`**: Captura del manejo de errores al intentar realizar una división o módulo entre cero, mostrando un mensaje de alerta en rojo (`danger`) junto con el rastro correspondiente en la consola del navegador.
4. **`bucles_texto_cero.png`**: Comprobación del comportamiento de las estructuras de bucle al introducir el número 0 o valores negativos.
5. **`bucles_badges.png`**: Ejecución de los bucles con generación de `badges` alternos según la paridad de la iteración mediante el uso del operador ternario.

## Reflexión técnica (Diferencias entre bucles)
Los bucles `for`, `while` y `do...while` son estructuras iterativas fundamentales, pero presentan diferencias clave en su comportamiento lógico:
* **`for`**: Se utiliza principalmente cuando conocemos de antemano el número exacto de iteraciones que va a realizar el bucle. Agrupa la inicialización, la condición y el incremento en una sola línea.
* **`while`**: Es un bucle condicional de entrada controlada. Evalúa la condición **antes** de ejecutar el bloque de código por primera vez, por lo que si la condición es falsa inicialmente, el código interno no se ejecuta nunca.
* **`do...while`**: Es un bucle de salida controlada. A diferencia del `while`, evalúa la condición **después** de ejecutar el bloque de instrucciones. Esto garantiza que el contenido del bucle se ejecute **al menos una vez**, independientemente de si la condición es falsa desde el inicio. Esto se evidenció claramente al probar los bucles con el número 0 o números negativos: mientras que `for` y `while` omiten por completo la ejecución, el `do...while` realiza obligatoriamente la primera iteración antes de validar la salida.

## Fuentes consultadas
* [Documentación oficial de JavaScript en MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [Guía de componentes y rejilla de Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## Uso de IA
Se han empleado herramientas de asistencia de IA como apoyo conceptual para contrastar la sintaxis de los bucles con `do...while` ante entradas numéricas nulas y para optimizar la estructura de las clases adaptativas de Bootstrap. Todo el código resultante ha sido revisado, adaptado e integrado de forma manual.