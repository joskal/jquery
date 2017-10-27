# jQuery
Apuntes sobre jQuery

```js
<script>
jQuery('ul').addClass('textoVerde');
$('ul').addClass('textoVerde');
</script>
```
Ambas formas son analogas, pero se prefiere la segunda **$(ul)**, por comodidad.
Y además, en este formato se debe colocar al final del body, si no, no funcionará.

Para que el script en jquery funcione sin problemas, ya sea en el head o el body,
debemos hacerlo de la siguiente forma:
```js
$(document).ready(function(){
   $('ul').addClass('textoVerde');
});
```
Esta forma quiere decir que el script se ejecutara un vez cargada completamente la pagina.

La siguiente es analoga a la anterior, pero mas corta
```js
$(function(){
   $('ul').addClass('textoVerde');
});
```

## Selectores y Encadenamiento

El encadenamiento evita tener que recorrer el DOM cada vez que actuamos sobre un elemento.

En la forma siguiente el DOM recorre el documento buscando tres veces el elemento **img**
```js
$("img").attr("src","img/profesor.jpg");
$("img").removeClass("img-circle");
$("img").addClass("img-thumbnail");
```
Pero ya en esta otra, con el encadenamiento, el DOM recorre la pagina una sola vez.
```js
$("img")
   .attr("src","img/profesor.jpg")
   .removeClass("img-circle")
   .addClass("img-thumbnail");
```
### Modificar elementos
Modificar el html de los tags **p** contenidos en el elemento div que tiene la clase **.prueba**
```js
$(".prueba")
  .find("p")
  .html("Saludo, acabamos de sustituir el contenido de este elemento");
```
Asignar un atributo css a cada uno de los elementos de una lista
```js
$("ul li")
  .eq(0).css("color","red").end()
  .eq(1).css("color","blue").end()
  .eq(2).css("color","yellow").end()
  .eq(3).css("color","purple").end()
  .eq(4).css("color","green").end();
 ```
 Agregar una clase a cada elemento de la lista
```js
$("ul li")
  .eq(0).addClass('morado').end()
  .eq(1).addClass('rojo').end()
  .eq(2).addClass('azul').end()
  .eq(3).addClass('verde').end()
  .eq(4).addClass('naranja').end();
```
Eliminar una clase de un elemento de la lista
```js
$("ul li")
  .eq(0).removeClass('morado').end();
```

## Eventos
