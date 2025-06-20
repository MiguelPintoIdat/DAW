
//Variable - "string"

const Inmutable = "Este texto no cambia";
var Texto = "Texto de semana 4"




function OperacionesMatematicas(){ 
// 1. Obtener los elementos
// 2. Obtener los valores de los elementos
// 3. Realizar Operaciones con esos valores
// Operaciones:
// -> Concatenar , Restar , Multiplicar, Dividir
// -> Mostrar el Resultado 

var elementoA = document.getElementById("PrimerValor");
var elementoB= document.getElementById("SegundoValor");

var valorA = elementoA.value
var valorB = elementoB.value

alert(valorA)
alert(valorB)

}


function EvaluandoDatos(numero){

    var texto = "";

    if(numero >=18 ){
        texto = "Numero correcto";
    }else{
        return;
    }

    alert(texto)
}

function FuncionPrueba(){
    let TextoLet = "Este es un texto let"
    console.log(TextoLet)

    return ;
    
}




function Practicando(primerValor,segundoValor){
    var mensaje = "";
    
    if(primerValor > segundoValor){
        mensaje = "El primero ganó";
    }else if(segundoValor > primerValor){
        mensaje = "El segundo ganó";
    }else{
        return;
    }
    alert (mensaje);
}





