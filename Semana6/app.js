

function OcultarElemento(){
    $("#Contenedor").hide();

} 

function MostrarElemento(){
    $("#Contenedor").show();
} 

function ObtenerValor(){
    //var valor = document.getElementById("txtNombre").value
    //document.getElementById("lblResultado").textContent = "Resultado: " + valor


    var valor = $("#txtNombre").val()

    $("#lblResultado").text("Resultado: " + valor)


}