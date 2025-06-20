class Celular {

	constructor(color, peso, ram, marca, resolucion) {
		this.color = color;
		this.peso = peso;
		this.ram = ram;
		this.marca = marca;
		this.resolucion = resolucion;
		this.encendido = false;
	}

	presionarBotonEncendido() {
		if (!this.encendido) {
			alert("Celular encendido");
			this.encendido = true;
		} else {
			alert("Celular apagado");
			this.encendido = false;
		}
	}

	tomarFoto() {
		if (this.encendido) {
			alert(`Foto tomada con una resolución de: ${this.resolucion}`);
		} else {
			alert("No se puede tomar una foto porque el celular está apagado");
		}
	}

	infoCelular() {
		return `
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		RAM: <b>${this.ram}</b><br>
		Marca: <b>${this.marca}</b><br>
		Resolución: <b>${this.resolucion}</b><br>
		`;
	}
}
