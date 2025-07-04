class Celular {

	constructor(color, modelo, marca, precio) {
		this.color = color;
		this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
	}

	obtenerPrecioFinal(cantidad){
        return cantidad * this.precio;
    }

}
