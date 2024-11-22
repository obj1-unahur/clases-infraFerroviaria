import { Formacion,VagonPasajeros, VagonCarga,VagonDormitorio} from "./tpParadigmas.js";

//Testing

//                                                  PRUEBAS PRIMER TREN

let tren1 = new Formacion({
    vagones: [
        new VagonPasajeros({ancho: 4, largo:10,tieneBaño: true, estaOrdenado: true}),
        new VagonPasajeros({ancho: 2, largo:7,tieneBaño: false, estaOrdenado: false}),

        new VagonCarga({cargaIdeal: 6800, cantMadera: 5}),
        new VagonDormitorio({cantCompartimientos:8, cantCamas:3})
    ]

})

console.log("FOMRACION 1\n\n")

console.log("ANTES DEL MANTENIMIENTO")
console.log("cantidad de pasajeros: ",tren1.cantidadPasajeros())
console.log("Tiene vagones populares? ",tren1.vagonesPopulares())
console.log("Es un tren de carga? ",tren1.esCarguera())
console.log("Dispersión de pesos:", tren1.dispersionPeso())
console.log("Cantidad de baños: ",tren1.cantidadBaños())
console.log("")


tren1.mantenimientoVagones()

console.log("DESPUÉS DEL MANTENIMIENTO")
console.log("cantidad de pasajeros: ",tren1.cantidadPasajeros())
console.log("Tiene vagones populares? ",tren1.vagonesPopulares())
console.log("Es un tren de carga? ",tren1.esCarguera())
console.log("Dispersión de pesos:", tren1.dispersionPeso())
console.log("Cantidad de baños: ",tren1.cantidadBaños())

//Bien

//                                                       PRUEBAS SEGUNDO TREN
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n\n")
console.log("FORMACION 2\n\n")

let tren2 = new Formacion({
    vagones: [
        new VagonCarga({cargaIdeal: 8000, cantMadera: 1}),
        new VagonDormitorio({cantCompartimientos:15, cantCamas:4})
    ]

})

console.log("ANTES DEL MANTENIMIENTO")
console.log("cantidad de pasajeros: ",tren2.cantidadPasajeros())
console.log("Tiene vagones populares? ",tren2.vagonesPopulares())
console.log("Es un tren de carga? ",tren2.esCarguera())
console.log("Dispersión de pesos:", tren2.dispersionPeso())
console.log("Cantidad de baños: ",tren2.cantidadBaños())
console.log("")

tren2.mantenimientoVagones()
console.log("DESPUÉS DEL MANTENIMIENTO")
console.log("cantidad de pasajeros: ",tren2.cantidadPasajeros())
console.log("Tiene vagones populares? ",tren2.vagonesPopulares())
console.log("Es un tren de carga? ",tren2.esCarguera())
console.log("Dispersión de pesos:", tren2.dispersionPeso())
console.log("Cantidad de baños: ",tren2.cantidadBaños())
console.log("")