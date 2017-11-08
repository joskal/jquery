
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
### Selectores
#### Selectores b&aacute;sicos.
```js
/* Seleccionar etiquetas del DOM */
$("elemento")
/* Seleccionar id del DOM */
$("#idelemento")
/* Seleccionar clase del DOM */
$(".claseelemento")

/* seleccionar las etiquetas "p" */
$("p")

/*seleccionar las etiquetas p dentro de la clase .container*/
$(.container p)

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

#### Selectores de contenedores e hijos
```js
/*Seleccionamos los <a> dentro de los paafos <p> */
$("p > a")

/*Seleccionamos los enlaces dentro de los parrafos contenidos en la clase miclase de una lista*/
$("ul.miclase li > p > a")

/*Seleccionamos los enlaces precedidos inmediatamente del elemento div*/
$("div + a")

/*Seleccionamos los enlaces (elemento ‘a’) prececidos por cualquier hermano suyo en un ‘div'*/
$("div ~ a")

/*Seleccionamos cualquier elemento del DOM*/
$("*")
```

#### Selectores de atributo
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

/*Seleccionamos cualquier elemento del DOM*/
$("*")
 
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
#### Selectores de posici&oacute;n
```js
/* seleccionar el primer enlace en la web, elemento 'a' */
$("a:first")
/* seleccionar el último enlace en la web, elemento 'a' */
$("a:last")
/* seleccionar la fila par de una tabla, elemento tr */
$("tr:even")
/* seleccionar la fila impar de una tabla, elemento tr */
$("tr:odd")

/* seleccionar (elementos 'a') que sean el primer elemento hijo de su elemento padre */
$("a:first-child")

/* seleccionar (elementos 'a') que sean el último elemento hijo de su elemento padre */
$("a:last-child")

/* seleccionar (elementos 'a') que sean el primer elemento hijo de tipo 'a' de su elemento padre */
$("a:first-of-type")

/* seleccionar (elementos 'a') que sean el último elemento hijo de tipo 'a' de su elemento padre */
$("a:first-of-type")

/* seleccionar (elementos 'a') que sean el quinto elemento hijo de su elemento padre */
$("a:nth-child(5)")

/* seleccionar (elementos 'a') que sean el segundo elemento hijo de su elemento padre comenzando por el final */
$("a:nth-last-child(2)")

/* seleccionar (elementos 'a') que sean el segundo elemento hijo de tipo 'a' de su elemento padre */
$("a:nth-of-type(2)")

/* seleccionar (elementos 'a') que sean el cuarto elemento hijo de tipo 'a' de su elemento padre comenzando por el final */
$("a:nth-last-of-type(4)")

/* seleccionar (elementos 'a') que sean el único elemento hijo de su elemento padre */
$("a:only-child")

/* seleccionar (elementos 'a') que sean el único elemento hijo de tipo 'a' de su elemento padre */
$("a:only-of-type")
/* seleccionar el quinto elemento de una lista, el indice comienza en 0 */
$("ul li:eq(4)")	

/* seleccionar todos los elementos de una lista a partir de elemento 3, el indice comienza en 0 */
$("ul li:gt(2)")

/* seleccionar todos los elementos de una lista anteriores del elemento 4, el indice comienza en 0 */
$("ul li:lt(3)")
```

#### Selectores para inputs
```js
/* seleccionar todos los inputs */
$(":input")
 
/* seleccionar todos los input de tipo text */
$(":text")
 
/* seleccionar todos los input de tipo password */
$(":password")
 
/* seleccionar todos los input de tipo radio */
$(":radio")
 
/* seleccionar todos los input de tipo checkbox */
$(":checkbox")
 
/* seleccionar todos los input de tipo submit */
$(":submit")
 
/* seleccionar todos los input de tipo reset */
$(":reset")
 
/* seleccionar todos los input de tipo button */
$(":button")
 
/* seleccionar todos los elementos de tipo image */
$(":image")
 
/* seleccionar todos los elementos de tipo file */
$(":file")
 
/* seleccionar todos los input habilitados */
$(":enabled")
 
/* seleccionar todos los input deshabilitados */
$(":disabled")
 
/* seleccionar todos los input seleccionados (elementos option) */
$(":selected")
 
/* seleccionar todos los input checkeados (radio button) */
$(":checked")
```
#### Otros selectores
```js
/* seleccionar todos los input que no sean de tipo button */
$("input:not(:button)")

/* seleccionar todas las etiquetas de encabezados <h1>, <h2>, <h3>... */
$(":header")

/* seleccionar todos los elmentos animados */
$(":animated")
	 
/* seleccionar el elemento en el que está actualmente el foco */
$(":focus")

/* seleccionar el elemento en el que está actualmente el foco */
$(":focus")

/* seleccionar el elemento que contiene el texto 'Hola' */
$(":contains('Hola')")

/* seleccionar todos los párrafos (elemento 'p')  que contienen enlaces (elemento 'a') */
$("p:has(a)")

/* seleccionar todos los elementos vacíos */
$(":empty")

/* seleccionar todos los elementos visibles */
$(":visible")

/* seleccionar todos los elementos párrafos (elemento 'p') visibles */
$("p:visible")

/* seleccionar todos los elementos no visibles */
$(":hidden")

/* seleccionar todos los elementos párrafos (elemento 'p') no visibles */
$("p:hidden")

/* seleccionar el elemento padre o raíz */
$(":root")

/* seleccionar los elementos con hijos no vacíos */
$(":parent")
```

#### Selectores, ejemplos.

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
