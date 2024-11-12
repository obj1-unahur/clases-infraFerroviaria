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

class VagonDePasajeros{
    constructor({ancho,largo,tieneBaño,estaOrdenado}){
        this.ancho = ancho
        this.largo = largo
        this.tieneBaño = tieneBaño
        this.estaOrdenado = estaOrdenado
    }

    maxPasajeros(){
        // si el ancho es hasta 3 metros, entran 8 pasajeros por cada metro de largo.
        // si el ancho es de más de 3 metros, entran 10 pasajeros por cada metro de largo.
        // Si el vagón no está ordenado, restar 15 pasajeros.

        let pasajerosPorMetros = this.ancho <= 3 ? 8 * this.largo : 10 * this.largo;
        return !this.estaOrdenado ? pasajerosPorMetros - 15 : pasajerosPorMetros;
    }

    maxPeso(){
        // si tiene baños, entonces puede llevar hasta 300 kilos.
        // si no, hasta 800 kilos.
        // El peso máximo de un vagón de pasajeros se calcula así: 2000 kilos, más 80 kilos por cada pasajero, más el máximo de carga que puede llevar.
        
        let kBaños = this.tieneBaño ? 300 : 800;
        let kPasajeros = this.capacidadPasajeros() * 80
        return 2000 + kPasajeros + kBaños;
    }
}
// No puede llevar pasajeros, y no tiene baños.
class VagonDeCarga {
    constructor({cargaMaxIdeal,maderasSueltas = 0}){
        this.cargaMaxIdeal = cargaMaxIdeal
        this.maderasSueltas = maderasSueltas
    }
    
    maxCarga(){
        return 8000 - (400 * this.maderasSueltas)
    }

    maxPeso(){
        // Un vagón de carga puede llevar hasta su carga máxima ideal, menos 400 kilos por cada madera suelta.
        // Su peso máximo es de 1500 kilos más el máximo de carga que puede llevar.
        return 1500 + this.maxCarga()
    }

    setMaderasSueltas(maderasSueltas){
        this.maderasSueltas = Math.max(0,maderasSueltas)
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



export { Formacion, Locomotora, Vagon, Deposito, VagonDePasajeros, VagonDeCarga}