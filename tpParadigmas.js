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

class vagonPasajeros {

    constructor(largo, ancho, tieneBaño, estaOrdenado){
        this.largo = largo
        this.ancho = ancho
        this.baño = tieneBaño
        this.estaOrdenado = estaOrdenado
    }

    tieneBaño(){return this.baño}
    
    pasajerosPorMetro(){
        return this.ancho <= 3 ? 8*this.largo:100*this.largo 
    }

    cantidadPasajeros() {
        return this.estaOrdenado ? this.pasajerosPorMetro() : this.pasajerosPorMetro()-15
    }

    cargaMaxima(){return this.tieneBaño ? 300 : 800}

    pesoMaximo(){return 2000+this.cantidadPasajeros()*80+this.cargaMaxima()}


}

class vagonCarga {
    constructor(cargaMaximaIdeal, maderasSueltas){
        this.cargaMaximaIdeal = cargaMaximaIdeal
        this.maderasSueltas = maderasSueltas
    }

    cargaMaxima(){return this.cargaMaximaIdeal-this.maderasSueltas*400}
    cantidadPasajeros(){return 0}
    tieneBaño(){return false}
    pesoMaximo(){return 1500 + this.cargaMaxima()}
}


class vagonDormitorios {
    constructor(compartimientos, camas){
        this.compartimientos = compartimientos
        this.camas = camas
    }

    tieneBaño(){return true}
    cantidadPasajeros(){this.compartimientos * this.camas}
    cargaMaxima(){return 1200}
    pesoMaximo(){return 4000 + this.cantidadPasajeros()*80 + this.cargaMaxima()}
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