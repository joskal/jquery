# jQuery
Apuntes sobre jQuery

```js
<script>
jQuery('ul').addClass('textoVerde');
</script>
```

```js
<script>
$('ul').addClass('textoVerde');
</script>
```
Ambas formas de selecci&oacute;n son analogas, pero se prefiere la segunda **$(ul)**, por comodidad.
Y además, en este formato se debe colocar al final del body, si no, no funcionará.

### $(document).ready(function(){ });
### $(function(){ });
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
### Encapsulamiento
Consiste en usar una funcion an&oacute;nima y autoejecutable **(function(){ })();** e introducir en ella todas las variables y funciones que conforman un script o plugin, las cuales se ejecutar&aacute;n de forma local, no global. De esta forma evitaremos que colisionen con otros scripts que definamos. 
```js
//Función anónima autoejecutable
(function(){
  var a="'a' es Local dentro de una función anónima";
  alert(a);
}());
```
