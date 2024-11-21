class Locomotora{
    constructor(){

    }
}
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

    maxPasajeros(){
        return this.estaOrdenado ? this.capacidadPasajeros() : this.capacidadPasajeros() - 15;
    }
    cargaMax(){
        return this.tieneBaño() ? 300 : 800
    }

    maxPeso(){        
        return 2000 + this.maxPasajeros() * 80 + this.cargaMax();
    }
}

class VagonCarga extends AbsVagon{
    constructor({CargaIdeal,CantMadera}){
        super(AbsVagon)
        this.CargaIdeal = CargaIdeal
        this.CantMadera = CantMadera
    }
    tieneBaño(){return false}
    maxPasajeros(){return 0}
    cargaMax(){return this.CargaIdeal - this.CantMadera * 400}
    maxPeso(){      

        return 1500 + this.cargaMax()
    }
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
            formacion.locomotora.push(...locomotoras) // deberiamos verificar si las locomotora no estan en otra formacion.
        }//cambié un append por push
    }
    cantidadPasajeros(tren){return tren.vagones.reduce((acum, pasajeros) => acum + pasajeros.maxPasajeros(),0) }

    vagonesPopulares(tren){return tren.vagones.reduce((acum,vagon)=>acum + (vagon.maxPasajeros() > 50 ? 1 : 0),0)}

    esCarguera(tren){return tren.vagones.every(vagon => vagon.cargaMax() >= 1000 )}

    dispersionPeso(tren){
        let pesos = tren.vagones.map(vagon => vagon.maxPeso());
        return Math.max(...pesos) - Math.min(...pesos)}

    cantidadBaños(tren){return tren.vagones.reduce((acum, baños) => acum + (baños.tieneBaño()?1: 0), 0)}

    mantenimiento(tren){

        tren.vagones.forEach(vagon => {
            if(vagon instanceof VagonCarga){
                vagon.CantMadera= Math.max(vagon.CantMadera - 2, 0)
            } else if(vagon instanceof VagonPasajeros) {
                vagon.estaOrdenado = true
            }

        });
    }
}


export { Formacion, Locomotora, Deposito, VagonPasajeros, VagonCarga,VagonDormitorio}