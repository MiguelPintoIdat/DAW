 
 
 


 function ComprarCelular(){
        var marca = $("#txtMarca").val();
        var modelo = $("#txtModelo").val();
        var color = $("#txtColor").val();
        var cantidad = $("#txtCantidad").val();

            CelularFormulario = new Celular(color, modelo, marca,1000);

            var PrecioFinal = CelularFormulario.obtenerPrecioFinal(cantidad);

            alert("Precio Final: " + PrecioFinal);

 }