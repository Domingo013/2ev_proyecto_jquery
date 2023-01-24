/**
	@file Contiene el modelo de la vista de menú de navegación de la aplicación
	@autor Domingo Miño Redondo
**/

/**
	Implementa una vista del menú de navegación.
**/
export class VistaNav{
	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param header {HtmlheaderElement} header de HTML en el que se desplegará la vista.
	**/
	constructor(controlador, header){
		this.controlador = controlador
		this.header = header
		//this.liListar = this.header.getElementsByTagName('li')[1]
		this.liListar = $("#listar")
		//this.liAnadir = this.header.getElementsByTagName('li')[2]
		this.liAnadir = $("#anadir")
		//this.liModificar = this.header.getElementsByTagName('li')[3]
		this.liModificar = $("#modificar")
		//this.spanAnadir = document.getElementById('anadir2')
		this.spanAnadir = $("#anadir2")

		//this.liListar.onclick = this.pulsarListar.bind(this)
		this.liListar.click(this.pulsarListar.bind(this))
		//this.liAnadir.onclick = this.pulsarAnadir.bind(this)
		this.liAnadir.click(this.pulsarAnadir.bind(this))
		//this.liModificar.onclick = this.pulsarModificar.bind(this)
		this.liModificar.click(this.pulsarModificar.bind(this))
		//this.spanAnadir.onclick = this.pulsarAnadir.bind(this)
		this.spanAnadir.click(this.pulsarAnadir.bind(this))

	}
	/**
		Atención a la pulsación sobre el listar
	**/
	pulsarListar(){
		this.controlador.pulsarNavListar()
	}
	/**
		Atención a la pulsación sobre el añadir
	**/
	pulsarAnadir(){
		this.controlador.pulsarNavAnadir()
	}
	/**
		Atención a la pulsación sobre la modificación
	**/
	pulsarModificar(){
		this.controlador.pulsarNavModificar()
	}
}
