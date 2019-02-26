<?php
include "../../seguridad/seguridad.php";

?>
<?php
try{
    $conexion = new PDO('mysql:host=localhost;dbname=parkingdom','root','',array( PDO::ATTR_EMULATE_PREPARES=>false,
    PDO::MYSQL_ATTR_DIRECT_QUERY=>false,
    PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
));

   $placa = $_POST['placa'];
$fecha_inicio = $_POST['fecha_inicio'];
$fecha_fin = $_POST['fecha_fin'];
$estado = "activo";

      
        $statement = $conexion->prepare("INSERT INTO `parkingdom`.`mensualidad` (`placa`, `fecha_inicio`, `fecha_fin`, `estado`) VALUES (:placa,:fecha_inicio,:fecha_fin,:estado)");
        $statement->bind_param(':placa', $placa);
        $statement->bind_param(':fecha_inicio', $fecha_inicio);
        $statement->bind_param(':fecha_fin', $fecha_fin);
        $statement->bind_param(':estado', $estado);
    
    if($statement->execute()){
        $respuesta = "correcto";
    }else {
           $respuesta = "incorrecto";

        }
        echo $respuesta;
}catch(PDOException $e){
    echo "Error: " . $e->getMessage();
}




?>
