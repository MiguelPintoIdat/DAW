
var Mensaje = "";

function MostrarMensajes(numero){

    if(numero == 0){
        Mensaje = "Primer Mensaje";
    }else if (numero == 1){
        Mensaje = "Segundo Mensaje";  
    }else{
        Mensaje = "Otro Número";
    }

    console.log(Mensaje);
}

MostrarMensajes(3);