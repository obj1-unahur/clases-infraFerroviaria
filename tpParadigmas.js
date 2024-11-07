class Locomotora{
    constructor(){

    }
}

// hay varios tipos de vagones, asi que podriamos aplicar alguna herencia de esta clase
class Vagon{
    constructor(){

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