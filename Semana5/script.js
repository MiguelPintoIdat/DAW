//Con esto creamos un nuevo Celular
 Celular1 = new Celular("Negro", "50g", "16gb", "Samsung", "1920x1080");
 Celular2 = new Celular("Blanco", "80g", "30gb", "iPhone", "4K");
 Celular3 = new Celular("Rosado", "65g", "8gb", "Motorola", "Full HD");

//Llamamos a las funciones
Celular1.presionarBotonEncendido();
Celular1.tomarFoto();

Celular2.tomarFoto();

//Al nosotros usar el document.write para mostrar la info es necesario usar el backtick para poder
//Llamar al método y mostrar la información en la pagina

document.write(`
	${Celular1.infoCelular()}<br><br>
	${Celular2.infoCelular()}<br><br>
	${Celular3.infoCelular()}<br><br>
`)
