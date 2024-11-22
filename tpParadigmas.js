// clase abstracta que nos sirve para realizar una especie de interface, asi de esta manera facilitar el polimorfimos
class AbsVagon{
    constructor(){
        if (new.target === AbsVagon) {
            throw new Error("No se puede instanciar una clase abstracta directamente")
          }
    }
    tieneBaño() {
        throw new Error("Debe implementar el método 'tieneBaño'")
    }
    capacidadPasajeros() {
        throw new Error("Debe implementar el método 'capacidadPasajeros'")
    }
    maxPasajeros() {
        throw new Error("Debe implementar el metodo 'maxPasajeros'")
    }
    cargaMax() {
        throw new Error("Debe implementar el metodo 'cargaMax'")
    }
    maxPeso() {
        throw new Error("Debe implementar el metodo 'maxPeso'")
    }
    mantenimiento(){
        throw new Error("Debe implementar 'mantenimiento'")
    }
}

// Vagones de pasajeros
// Para definir un vagón de pasajeros, debemos indicar el largo y el ancho medidos en metros, si tiene o no baños, y si está o no ordenado.

class VagonPasajeros extends AbsVagon{
    constructor({ancho,largo,tieneBaño,estaOrdenado}){
        super(AbsVagon)
        this.ancho = ancho
        this.largo = largo
        this.baño = tieneBaño
        this.estaOrdenado = estaOrdenado
    }
    tieneBaño(){return this.baño}

    capacidadPasajeros(){return this.ancho <= 3 ? 8 * this.largo : 10 * this.largo}

    maxPasajeros(){return this.estaOrdenado ? this.capacidadPasajeros() : this.capacidadPasajeros() - 15;}
    cargaMax(){return this.tieneBaño() ? 300 : 800}
    maxPeso(){return 2000 + this.maxPasajeros() * 80 + this.cargaMax();}
    mantenimiento(){this.estaOrdenado = true}
}

class VagonCarga extends AbsVagon{
    constructor({cargaIdeal,cantMadera}){
        super(AbsVagon)
        this.cargaIdeal = cargaIdeal
        this.cantMadera = cantMadera
    }
    tieneBaño(){return false}
    maxPasajeros(){return 0}
    cargaMax(){return this.cargaIdeal - this.cantMadera * 400}
    maxPeso(){return 1500 + this.cargaMax()}
    mantenimiento(){this.cantMadera = Math.max(this.cantMadera-2, 0)}
}

class VagonDormitorio extends AbsVagon{
    constructor({cantCompartimientos,cantCamas}){
        super(AbsVagon)
        this.cantCompartimientos = cantCompartimientos
        this.cantCamas= cantCamas
    }

    tieneBaño(){return true}
    maxPasajeros(){ return this.cantCompartimientos * this.cantCamas}
    cargaMax(){return 1200 }
    maxPeso(){ return 4000 + this.maxPasajeros() * 80 + this.cargaMax()}
    mantenimiento(){}
}


// una formacion es un tren
class Formacion{
    constructor({vagones = []}){
        this.vagones = vagones
    }

    mantenimientoVagones(){
        this.vagones.forEach(vagon => {vagon.mantenimiento()})
    }

    cantidadPasajeros(){return this.vagones.reduce((acum, pasajeros) => acum + pasajeros.maxPasajeros(),0) }
    
    vagonesPopulares(){return this.vagones.reduce((acum,vagon)=>acum + (vagon.maxPasajeros() > 50 ? 1 : 0),0)}
    
    esCarguera(){return this.vagones.every(vagon => vagon.cargaMax() >= 1000 )}
    
    dispersionPeso(){
        let pesos = this.vagones.map(vagon => vagon.maxPeso());
        return Math.max(...pesos) - Math.min(...pesos)
    }

    cantidadBaños(){return this.vagones.reduce((acum, baños) => acum + (baños.tieneBaño()?1: 0), 0)}
}


export { Formacion, VagonPasajeros, VagonCarga,VagonDormitorio}