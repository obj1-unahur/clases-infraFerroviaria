class Locomotora{
    constructor(){

    }
}

// hay varios tipos de vagones, asi que podriamos aplicar alguna herencia de esta clase
class Vagon{
    constructor(){

    }
}
// Vagones de pasajeros
// Para definir un vagón de pasajeros, debemos indicar el largo y el ancho medidos en metros, si tiene o no baños, y si está o no ordenado.

// A partir de estos valores, la cantidad de pasajeros que puede transportar un vagón se calcula de esta forma:

// si el ancho es hasta 3 metros, entran 8 pasajeros por cada metro de largo.
// si el ancho es de más de 3 metros, entran 10 pasajeros por cada metro de largo.
// Si el vagón no está ordenado, restar 15 pasajeros.

// P.ej.:

// un vagón de pasajeros de 10 metros de largo y 2 de ancho puede llevar hasta 80 pasajeros si está ordenado, 65 pasajeros si no.
// otro vagón, también de 10 metros de largo, pero de 4 metros de ancho, puede llevar hasta 100 pasajeros si está ordenado, 85 pasajeros si no.
// La cantidad máxima de carga que puede llevar un vagón de pasajeros depende de si tiene o no baños:

// si tiene baños, entonces puede llevar hasta 300 kilos.
// si no, hasta 800 kilos.
// El peso máximo de un vagón de pasajeros se calcula así: 2000 kilos, más 80 kilos por cada pasajero, más el máximo de carga que puede llevar.
class VagonPasajeros extends Vagon{
    constructor({ancho,largo,tieneBaño,estaOrdenado}){
        this.ancho = ancho
        this.largo = largo
        this.tieneBaño = tieneBaño
        this.estaOrdenado = estaOrdenado


        this.capacidad = getCapacidad()
    }

    getCapacidad(){
    }
}
// una formacion es un tren
class Formacion{
    constructor({locomotora, vagones}){
        this.locomotora = locomotora
        this.vagones = vagones
    }
}

class Deposito{
    // el deposito puede tener varias formaciones
    constructor({formaciones,locomotoras}){
        this.formaciones = formaciones
        this.locomotoras = locomotoras
    }

    addLocomotoraFormacion(formacion,...locomotoras){
        if (formacion in this.formaciones){
            formacion.locomotora.append(...locomotoras) // deberiamos verificar si las locomotora no estan en otra formacion.
        }
    }
}



export { Formacion, Locomotora, Vagon, Deposito}