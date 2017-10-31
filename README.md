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
### Seleccionar elementos
#### Selectores b&aacute;sicos.
Con el “.” seleccionamos una clase, con el “#” seleccionamos un id y con el tag de la etiqueta una etiqueta
```js
/* Seleccionar etiquetas del DOM */
$("elemento")
/* Seleccionar id del DOM */
$("#idelemento")
/* Seleccionar clase del DOM */
$(".claseelemento")

/* seleccionar las etiquetas "p" */
$("p")

/* seleccionar los elementos con id="inicio" */
$("#inicio")

/* seleccionar los elementos con clase="principal" */
$(".principal")

/* seleccionar los elementos con id="inicio" con clase="principal" y que son etiqueta "p" */
$("p#inicio.principal")

/* seleccionar las etiquetas "a" con clase="principal" dentro de una etiqueta "p" */
$("p a.principal")

/* seleccionar los elementos con id="inicio" o clase ="principal" */
$("#inicio,.principal")

/* seleccionar todos los elementos */
$("*")

/* seleccionar todas las etiquetas "p", "a" y "div" */
$("p,a,div")
```

Seleccionar una posición dentro de un elemento padre:
```js
/* seleccionar el quinto elemento de una lista, el indice comienza en 0 */
$("ul li:eq(4)")	

/* seleccionar todos los elementos de una lista a partir de elemento 3, el indice comienza en 0 */
$("ul li:gt(2)")

/* seleccionar todos los elementos de una lista anteriores del elemento 4, el indice comienza en 0 */
$("ul li:lt(3)")
```
Seleccionar seg&uacute;n el tipo de atributo
```js
/* seleccionar los elementos con el atributo href */
$("[href]")
/* seleccionar los elementos con el atributo src */
$("[src]")
/* seleccionar los elementos con el atributo class */
$("[class]")
/* seleccionar los elementos con el atributo id */
$("[id]")

/* seleccionar elementos con atributo href=index.html */
$("[href='index.html']")
 
/* seleccionar elementos con atributo href distinto a index.html */
$("[href!='index.html']")
 
/* seleccionar elementos con atributo src que finalicen con .png */
$("[src$='.png']")
 
/* seleccionar elementos con atributo src que comiencen con 'imagen.jpg' o con atributo src ='imagen.jpg' */
$("[src|='imagen.jpg']")
 
/* seleccionar elementos con atributo title que comiencen con 'alergia' */
$("[title^='alergia']")
 
/* seleccionar elementos con atributo title que contengan la palabra específica 'alergia' */
$("[title~='alergia']")
 
/* seleccionar elementos con atributo title que contengan la palabra 'alergia' */
$("[title*='alergia']")
```

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
 Agregar una clase a un id 
 ```js
$("#ident").addClass("rojo")
 ```
 Eliminar una clase de un id
 ```js
$("#ident").removeClass("rojo")
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
