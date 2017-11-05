# jQuery on()
Nos permite asignar eventos a los distintos elementos del DOM.
## $(selector).on(evento, [childSelector], [parametros], handler, [mapeo])

* **selector** (obligatorio): Elemento del DOM al que queremos asignar un evento.
* **evento** (obligatorio): Evento que queremos controlar en el selector.
* **childSelector** (opcional): Selección del nodo hijo dentro del elemento. Este nodo hijo debe de estar dentro de nodo especificado en selector.
* **parametros** (opcional): Parámetros a pasar a la función.
* **handler** (obligatorio): Función callback a ejecutar cuando se produzca el evento.
* **mapeo** (opcional): Mapeos realizados para cada evento, a cada mapeo se le asigna una función, pudiendo ser esta función diferente a la de los demás mapeos.

La forma **on()** es mas completa que esta otra:
### $(selector).evento(handler);
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
Mapeo de eventos a un elemento del DOM
```js
$(document).ready(function(){
  $("#elementocontrolado").on({
    change:function(){alert('El input ha cambiado de valor');},
    click:function(){alert('Has hecho click en el input');}
  });
});
```

En algunas ocasiones nos interesar&aacute; apagar los eventos de un elemento
**off() Nos permitir&aacute; desconectar eventos previamente asignados a un elemento
```js
$("#apagar").on("click", function(){
  $("botones").off("click");
});
```
