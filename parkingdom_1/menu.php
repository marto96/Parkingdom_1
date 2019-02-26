<?php
include "seguridad/seguridad.php";
?>
<?php
   
    ?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Menú</title>
	<link rel="shorcut icon" type="image/x-icon" href="imagenes/favicon.ico">
	<link rel="stylesheet" href="css/estilos.css" type="text/css">
	<!--    <link rel="stylesheet" href="css/preloader.css" type="text/css">-->
	<!--    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">-->
	<script src="js/jquery.min.js" type="text/javascript"></script>
</head>
<header>
	<div class="container">
		<div class="wrap">

			<div class="widget">
				<div class="fecha">
					<p id="diaSemana" class="diaSemana"></p>
					<p id="dia" class="dia"></p>
					<p>de</p>
					<p id="mes" class="mes"></p>
					<p>del</p>
					<p id="year" class="year"></p>
				</div>

				<div class="reloj">
					<p id="horas" class="horas"></p>
					<p>:</p>
					<p id="minutos" class="minutos"></p>
					<p>:</p>
					<div class="caja-segundos">
						<p id="ampm" class="ampm"></p>
						<p id="segundos" class="segundos"></p>
					</div>

				</div>
				<div class="nombre">
					<p>BIENVENIDO
						<?php echo $_SESSION['usuario']; ?>
					</p>
					<a class="salir" href="cerrar_session.php?tk=<?php echo$_SESSION['token'];?>"><img src="imagenes/salir.png" class="img_salir" href="cerrar_session.php?tk=<?php echo$_SESSION['token'];?>" /></a>
				</div>
			</div>

		</div>
		<div class="prueba">
			<!--<p class="titulo">Cupos</p>-->
			<div class="moto">
				<p class="subtitulo">Motocicleta</p>
				<div class="img_moto"></div>
				<div>
					<p>Total cupos:</p>
					<p id="tipo1" type="number">50</p>
					<p>Cupos ocupados:</p>
					<p id="tipo2" type="number" class="tipo2 cant_moto_ocup">

					</p>
					<p>Cupos disponibles:</p>
					<p id="tipo3" type="number" class="tipo3 cant_moto_disp">
					</p>
				</div>
			</div>
			<div class="auto">
				<p class="subtitulo">Automovil</p>
				<div class="img_auto"></div>
				<div>
					<p>Total cupos:</p>
					<p id="tipo1" type="number">50</p>
					<p>Cupos ocupados:</p>
					<p id="tipo4" type="number" class="tipo2 cant_auto_ocup">
					</p>
					<p>Cupos disponibles:</p>
					<p id="tipo5" type="number" class="tipo3 cant_auto_ocup">
					</p>
				</div>
			</div>


		</div>
	</div>

</header>

<body>
	<section>
		<div class="loader"></div>
		<div class="count"></div>
	</section>

	<!--    <div class="preloader">
        <div class="loader"></div>
    </div>

    <!--Tabs -->
	<div class="tab">
		<div class="botones">
			<li class=""><a id="myBtn" class="boton-m bt1"><span>Entrada Vehículo</span></a></li>
			<li class=""><a id="myBtn1" class="boton-m bt2"><span>Salida Vehículo</span></a></li>
			<li class=""><a id="myBtn3" class="boton-m bt3"><span>Reportes</span></a></li>
			<li class=""><a id="myBtn4" class="boton-m bt4"><span>Mensualidades</span></a></li>
			<!--<li class="" onclick="" ><a class="boton-m bt5" href="javascript: ventanaCrear();"><span>Crear</span></a></li> -->
			<li class=""><a id="myBtn5" class="boton-m bt7"><span>Cliente</span></a></li>
			<li class=""><a id="myBtn6" class="boton-m bt8"><span>Usuario</span></a></li>
		</div>
	</div>

	<div id="myModal" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<div class="cuadros">
				<span class="close">&times;</span></div>
			<iframe id="test" src="modulos/ingreso/ingreso_vista.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>
	<div id="myModal1" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close1">&times;</span>
			<iframe  id="test1" src="modulos/salida/salida_vista.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>
	<div id="myModal2" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close2">&times;</span>
			<iframe   id="test2" src="modulos/salida/salida_vista2.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>
	<div id="myModal3" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close3">&times;</span>
			<iframe  id="test3" src="modulos/reportes/reportes_vista.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>
	<div id="myModal4" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close4">&times;</span>
			<iframe  id="test4" src="modulos/pagos/pagos_vista.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>

	<div id="myModal5" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close5">&times;</span>
			<iframe  id="test5" src="modulos/crear/crear_cliente.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>
	<div id="myModal6" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close6">&times;</span>
			<iframe  id="test6" src="modulos/crear/crear_operario.php" style="width:100%;height:640px;"></iframe>
		</div>

	</div>



	<script>
		$(document).ready(function() {
			$(".jm-loadingpage").fadeOut("slow");
		});

	</script>
	<script src="js/funciones.js" type="text/javascript"></script>

</body>
<footer>
	<h5>Parkingdom 2019 - Todos los derechos reservados</h5>
</footer>

</html>
