var btn_cargar = document.getElementById('btn_cargar_usuarios');
var error_box = document.getElementById('error_box');
var tabla = document.getElementById('tabla');
var loader = document.getElementById('loader');

var placa = document.getElementById('placa');
var valor = document.getElementById('valor');
var obj = document.getElementById('fecha_inicio');
var obj3 = document.getElementById('fecha_fin');
//obj.value = setFormato(new Date());

var usuario_placa,
	usuario_fecha_inicio,
	usuario_fecha_fin;

obj.addEventListener('focusout', function () {
	AddMes();
});

function AddMes() {
	var fecha = new Date(obj.value);
	fecha.setMonth(fecha.getMonth() + 1);
	obj3.value = setFormato(fecha);
	obj3.setAttribute("disabled", "true");
}

function setFormato(fecha) {
	var day = ("0" + fecha.getDate()).slice(-2);
	var month = ("0" + (fecha.getMonth() + 1)).slice(-2);
	//var date = (day) + "-" + (month) + "-" + fecha.getFullYear();
	var date = fecha.getFullYear() + "-" + (month) + "-" + (day);
	return date;
}

function cargarUsuarios() {
	tabla.innerHTML = '<thead><tr><th>ID</th><th>Placa</th><th>Fecha Inicio</th><th>Fecha Fin</th><th>Estado</th><th>Valor Mes</th><th></th></tr></thead>';

	var peticion = new XMLHttpRequest();
	peticion.open('GET', 'pagos.php');

	loader.classList.add('active');
	peticion.onload = function () {
		var datos = JSON.parse(peticion.responseText);
		console.log(datos);
		if (datos.error) {
			error_box.classList.add('active');
		} else {

			for (var i = 0; i < datos.length; i++) {
				var elemento = document.createElement('tr');
				elemento.innerHTML += ("<td>" + datos[i].id + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].Placa + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].Fecha_Inicio + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].Fecha_Fin + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].Estado + "</td>");
				elemento.innerHTML += ("<td>" + datos[i].Valor_Mes + "</td>");
				elemento.innerHTML += ("<td><div class='botones'> <button class='editar_btn'> <img class='editar' style='width:20px;height:30px;' src='../../imagenes/editar.svg'/></button><button class='eliminar_btn'> <img class='eliminar' style='width:20px;height:30px;' src='../../imagenes/eliminar.svg'/></button></div></td>");

				tabla.appendChild(elemento);

			}

		}
	}


	peticion.onreadystatechange = function () {
		if (peticion.readyState == 4 && peticion.status == 200) {
			loader.classList.remove('active');
		}
	}
	peticion.send();

}

function agregarUsuarios(e) {
	e.preventDefault();

	var peticion = new XMLHttpRequest();
	peticion.open('POST', 'insertar.php');

	usuario_placa = formulario.placa.value.trim();
	usuario_fecha_inicio = formulario.fecha_inicio.value.trim();
	usuario_fecha_fin = formulario.fecha_fin.value.trim();


	if (formulario_valido()) {
		error_box.classList.remove('active');
		var parametros = 'placa=' + usuario_placa + '&fecha_inicio=' + usuario_fecha_inicio + '&fecha_fin=' + usuario_fecha_fin;
		console.log(parametros);

		peticion.setRequestHeader("Content_Type", "application/x-www-form-urlencoded");

		loader.classList.add('active');

		peticion.onload = function () {
			cargarUsuarios();
			formulario.placa.value = '';
			formulario.fecha_inicio.value = '';
			formulario.fecha_fin.value = '';
		}

		peticion.onreadystatechange = function () {
			if (peticion.readyState == 4 && peticion.status == 200) {
				loader.classList.remove('active');
			}
		}
		peticion.send(parametros);

	} else {
		error_box.classList.add('active');
		error_box.innerHTML = 'Por favor completa el formulario correctamente';
	}

}

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
placa.addEventListener('focus', function (e) {
	error_box.classList.remove('active');
	valor.value = '';
	valor.setAttribute("disabled", "false");
});
placa.addEventListener('focusout', function (e) {
	var equipo = document.getElementById('placa').value;
	if (placa.value == "") {
		error_box.classList.add("active")
		error_box.style.background = "orange";
		error_box.innerHTML = "Por favor digite una placa que se encuentre registrada";
	} else {

		var respuesta = 0;

		//instanciamos el objetoAjax
		ajax = objetoAjax();

		//Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
		ajax.open("POST", "consulta.php", true);

		//cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
		ajax.onreadystatechange = function () {

			//Cuando se completa la petición, mostrará los resultados
			if (ajax.readyState == 4 && ajax.status == 200) {

				//El método responseText() contiene el texto de nuestro 'consultar.php'. Por ejemplo, cualquier texto que mostremos por un 'echo'
				respuesta = (ajax.responseText)
				//console.log(respuesta);
				if (respuesta != "error") {
					valor.value = "$ " + respuesta;
					valor.setAttribute("disabled", "true");
				} else {
					error_box.classList.add('active');
					error_box.innerHTML = 'La placa ingresada no tiene mensualidad, Verifique por favor.';
				}
			}
		}
		//Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		var parametro = "placa=" + equipo;
		//console.log(parametro);
		//enviamos las variables a 'consulta.php'
		ajax.send(parametro)
	}

});

btn_cargar.addEventListener('click', function () {
	cargarUsuarios();
});


formulario.addEventListener('submit', function (e) {
	agregarUsuarios(e);
});

function formulario_valido() {
	if (usuario_placa == '') {
		return false;
	} else if (usuario_fecha_inicio == '') {
		return false;

	} else if (usuario_fecha_fin == '') {
		return false;
	}
	return true;

}
