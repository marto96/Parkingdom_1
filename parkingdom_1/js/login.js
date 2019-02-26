 function objetoAjax() {
     var xmlhttp = false;
     try {
         xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (e) {

         try {
             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (E) {
             xmlhttp = false;
         }
     }

     if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
         xmlhttp = new XMLHttpRequest();
     }
     return xmlhttp;
 }

 function enviarDatos() {

     //Recogemos los valores introducimos en los campos de texto
     var equipo = document.login.usuario.value;
     var dorsal = document.login.password.value;
     var respuesta = 0;
  
     //instanciamos el objetoAjax
     ajax = objetoAjax();

     //Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
     ajax.open("POST", "login.php", true);

     //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
     ajax.onreadystatechange = function () {

         //Cuando se completa la petición, mostrará los resultados
         if (ajax.readyState == 4) {

             //El método responseText() contiene el texto de nuestro 'consultar.php'. Por ejemplo, cualquier texto que mostremos por un 'echo'
             respuesta = (ajax.responseText)
             if (respuesta == "si") {
                 //alert("adsf");
                 window.location.href = 'menu.php';
             } else if (respuesta == "no") {
                 var modal = document.getElementById('myModal');
                 var span = document.getElementsByClassName("close")[0];
                 var span1 = document.getElementsByClassName("close")[1];


                 modal.style.display = "block";
                 span.onclick = function () {
                     modal.style.display = "none";
                     login.usuario.value = '';
                     login.password.value = '';
                 }
                 span1.onclick = function () {
                     modal.style.display = "none";
                     login.usuario.value = '';
                     login.password.value = '';
                 }
                 window.onclick = function (event) {
                     if (event.target == modal) {
                         modal.style.display = "none";
                     }
                 }
                 //alert("hgjhm");
             }
             //console.log(respuesta);
         }
     }

     //Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
     ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

     //enviamos las variables a 'consulta.php'
     ajax.send("&usuario=" + equipo + "&password=" + dorsal)

 }


 function recuperar() {
     var modal1 = document.getElementById('myModal1');
     //var btn1 = document.getElementById("myBtn1");
     var span2 = document.getElementsByClassName("close1")[0];
     //console.log(span2);
     correo_rec.value = '';
     modal1.style.display = "block";
     span2.onclick = function () {
         modal1.style.display = "none";
     }
     window.onclick = function (event) {
         if (event.target == modal1) {
             modal1.style.display = "none";
         }
     }
     //            var Recuperar = prompt("ingresa tu correo de recuperacion", "");
     //
     //            if (Recuperar != null) {
     //                alert("Tu correo de recuperacion es " + Recuperar);
     //            } else {
     //                alert("no has ingresado un correo")
     //            }
 }
