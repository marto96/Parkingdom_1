<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Registro Mensualidad</title>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet"> 
	<link rel="stylesheet" href="css/estilos.css">
</head>
<body>
	<div class="contenedor">
		<header>
			<h1>Registro Mensualidades</h1>
			<div>
				<button id="btn_cargar_usuarios" class="btn active">Cargar Registros</button>
			</div>
		</header>
		<main>
			<form action="" method="" id="formulario" class="formulario">
				<input type="text" name="placa" id="placa" placeholder="Placa">
				<input type="text" name="valor" id="valor" placeholder="Valor Mensualidad">
				<input type="date" name="fecha_inicio" id="fecha_inicio" placeholder="Fecha Inicio">
				<input type="date" name="fecha_fin" id="fecha_fin" placeholder="Fecha Fin">
				<button type="submit" class="btn">Agregar</button>
			</form>
			<div class="error_box" id="error_box">
				<p>Se ha producido un error.</p>
			</div>
			<table id="tabla" class="tabla">
				<thead>
				<tr>
					<th>ID</th>
					<th>Placa</th>
					<th>Fecha Inicio</th>
					<th>Fecha Fin</th>
					<th>Estado</th>
					<th>Valor Mes</th>
					<th>Opciones</th>
				</tr>
				</thead>
				<tbody id="tabla">
					
				</tbody>
			</table>
			<div class="loader" id="loader"></div>
		</main>
	</div>
<!--		<script src="js/ajax.js"></script>-->
	<script src="js/main.js"></script>
</body>
</html>