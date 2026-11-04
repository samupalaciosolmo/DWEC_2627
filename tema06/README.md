# Tarea 6 · Objetos y arrays

**Autor:** Samuel Palacios Olmo · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27[cite: 5]


Carpeta que contiene la solución completa de la Tarea 6 de DWEC, estructurada con la interfaz web maquetada en Bootstrap, la lógica implementada en JavaScript y las capturas de pantalla de los seis ejercicios[cite: 2, 5]. Para probarlo, abre el proyecto en VS Code, inicia **Live Server** y mantén la consola abierta (F12) para verificar el rastreo de las funciones[cite: 5, 7].

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

Vista general de la página con mi nombre completo visible en la barra de navegación, los tres colores iniciales, el catálogo completo de productos, la interfaz de notas y las 8 ciudades iniciales numeradas[cite: 2, 3, 4, 5, 9].

### b) Ejercicios 1 y 2: la ficha y los colores

<img src="capturas/b-ej1-ej2.png" alt="La ficha de estudiante y la lista de colores" width="600">

Ficha de estudiante actualizada tras invocar `cumplirAnios()` y lista de colores modificada dinámicamente mediante la inserción con `push()` y la extracción con `pop()` y `shift()`[cite: 3, 5].

### c) Ejercicio 3: el catálogo ordenado por precio

![La tabla de productos ordenada por precio](capturas/c-ej3-ordenado.png)

Catálogo ordenado de más barato a más caro mediante el método `sort()` con una función de comparación numérica, aplicado sobre una copia del array obtenida con el operador spread (`[...productos]`) para no alterar el catálogo original[cite: 4, 5].

### d) Ejercicio 4: las notas y la media

![Las notas con su color y la media](capturas/d-ej4-notas.png)

Listado de notas añadidas con validación estricta de campos vacíos y rangos, representadas mediante `badges` dinámicos (verdes para notas $\ge 5$ y rojos para suspensos) junto a la media calculada con `reduce()`[cite: 4, 5].

### e) Ejercicio 5: los tres métodos seguidos

![El resultado de filter, map y reduce encadenados](capturas/e-ej5-cadena.png)

Resultado de los tres pasos encadenados sobre el array numérico: filtrado de elementos pares con `filter()`, transformación a sus dobles con `map()` y cálculo de la suma total con `reduce()`, obteniendo como resultado final 60[cite: 4, 5].

### f) Ejercicio 6: después de splice y de buscar una ciudad

![Las ciudades después de splice y una búsqueda](capturas/f-ej6-splice.png)

Estado de las ciudades tras aplicar `splice(2, 2)` (eliminando dos elementos a partir del índice 2) y el resultado de la búsqueda de una ciudad concreta utilizando los métodos `includes()` e `indexOf()`[cite: 4, 5].

## Reflexión

En JavaScript, es fundamental distinguir entre los métodos que mutan (modifican) el array original y los que devuelven uno nuevo[cite: 5]. Métodos como `push()`, `pop()`, `shift()` y `splice()` alteran directamente la estructura base de la lista; por ejemplo, en el ejercicio 6, el uso de `splice(2, 2)` modifica permanentemente el array de ciudades reduciendo su longitud[cite: 3, 4, 5]. Por el contrario, métodos como `slice()` y las funciones de transformación como `map()` o `filter()` generan copias o nuevos arrays sin afectar al original[cite: 3, 4, 5]. Por esta misma razón, en el ejercicio 3 se ordena una copia utilizando el operador spread (`[...productos]`), evitando alterar el catálogo base y preservando el orden predeterminado de los datos originales[cite: 4, 5].

## Fuentes

- [Documentación oficial de JavaScript (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript)[cite: 7]
- [Apuntes y guion de la Tarea 6 de DWEC - Diego Rodero Pulido](https://github.com/DRodero/DWEC)[cite: 2]

## Uso de IA

- **Herramienta:** Gemini.
- **Para qué:** Orientación sobre la sintaxis de los métodos de arrays y revisión de la redacción técnica del README.
- **Qué hice después:** Verifiqué el funcionamiento de todo el código en la consola del navegador, adapté las funciones estrictamente a las restricciones de la tarea (sin funciones flecha) y redacté las explicaciones de forma personalizada[cite: 3, 5, 7].