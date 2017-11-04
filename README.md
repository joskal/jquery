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
