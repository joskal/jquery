# jQuery on()
Nos permite asignar eventos a los distintos elementos del DOM.
## $(selector).on(evento, childSelector, parametros, funcion, mapeo)

* **selector** (obligatorio): Elemento del DOM al que queremos asignar un evento.
* **evento** (obligatorio): Evento que queremos controlar en el selector.
* **childSelector** (opcional): Selección del nodo hijo dentro del elemento. Este nodo hijo debe de estar dentro de nodo especificado en selector.
* **parametros** (opcional): Parámetros a pasar a la función.
* **funcion** (obligatorio): Función callback a ejecutar cuando se produzca el evento.
* **mapeo** (opcional): Mapeos realizados para cada evento, a cada mapeo se le asigna una función, pudiendo ser esta función diferente a la de los demás mapeos.

Ejemplo1:
```js
/*Interceptamos el evento click del id #parrafo
y visualizamos una alerta en pantalla*/

$(document).ready(function(){
  $("#parrafo").on("click",function(){
    alert('Has hecho click en el párrafo');
     });
});
```
Asignaci&oacute;n de varios eventos a un elemento.
```js
/*Detectar los eventos dblclick y change (cambio de valor)*/
$(document).ready(function(){
  $("#elementocontrolado").on("dblclick change",function(){
    alert('Función on() activada.');
  });
});
```
