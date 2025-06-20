

var boton = document.getElementById("btnProcesar");

boton.addEventListener("click",ValidarDatos);

var inputAnio = document.getElementById("txtAnioNacimiento");

inputAnio.addEventListener("keyup", function(event) {
    var valor = event.target.value;
    MostrarConsola(valor);

    var teclaPresionada = event.key;

    console.log(teclaPresionada);

});



function MostrarConsola(nuevoValor){
    console.log("El nuevo valor es: " + nuevoValor);
}


function ValidarDatos(){
    var Nombre = document.getElementById("txtNombre").value;
    var Apellido = document.getElementById("txtApellido").value;
    var Salario = document.getElementById("txtSalario").value;
    var AnioNacimiento = document.getElementById("txtAnioNacimiento").value;

    var AnioActual = 2025;

    if(Salario>5000){
        alert("Mucho sueldo")
        return;
    }
    if((AnioActual - AnioNacimiento)<18){
        alert("Tas chiquito")
        return;
    }

    alert(Nombre + " " + Apellido + " " + AnioNacimiento + " " + Salario )
}
