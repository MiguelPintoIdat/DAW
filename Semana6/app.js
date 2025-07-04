

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

function CambiarEstilos(){

    $("#Contenedor").css({
        "background-color": "green",
        "width": "500px",
        "height": "500px"
    });
}

function CambiarRojo(){
    $("#Contenedor").removeClass('ContenedorAzul')
    $("#Contenedor").addClass('ContenedorRojo')
}

function CambiarAzul(){
    $("#Contenedor").removeClass('ContenedorRojo')
    $("#Contenedor").addClass('ContenedorAzul')
}

function AlternarClases(){

    var claseActual = $("#Contenedor").attr('class')

    if(claseActual.includes("ContenedorRojo")){
        $("#Contenedor").removeClass('ContenedorRojo')
        $("#Contenedor").addClass('ContenedorAzul')
    }
    else if(claseActual.includes("ContenedorAzul"))
    {
        $("#Contenedor").removeClass('ContenedorAzul')
        $("#Contenedor").addClass('ContenedorRojo')
    }

}
