import * as tp from "./tpParadigmas.js";

let locomotora1 = new tp.Locomotora()
let locomotora2 = new tp.Locomotora()

let vagon1 = new tp.Vagon()
let vagon2 = new tp.Vagon()

let formacion1 = new tp.Formacion({locomotora: [locomotora1,locomotora2], vagones: [vagon1,vagon2]})

let deposito = new tp.Deposito({formaciones: formacion1})

// un vagón de pasajeros de 10 metros de largo y 2 de ancho puede llevar hasta 80 pasajeros si está ordenado, 65 pasajeros si no.
let vagonPasajero = new tp.VagonDePasajeros({ancho: 2, largo:10,estaOrdenado: true})
console.log("capacidad vagonPasajero1",vagonPasajero.maxPasajeros()) // => 80

// otro vagón, también de 10 metros de largo, pero de 4 metros de ancho, puede llevar hasta 100 pasajeros si está ordenado, 85 pasajeros si no.
let otroVagonPasajero = new tp.VagonDePasajeros({ancho: 4, largo:10,estaOrdenado: true})
console.log("capacidad vagonPasajero2",otroVagonPasajero.maxPasajeros()) // => 100

// P.ej. un vagón de carga con carga máxima ideal 8000 kilos con 5 maderas sueltas puede llevar hasta 6000 kilos; si cambiamos la cantidad de maderas sueltas a 2, entonces puede llevar hasta 7200 kilos.
let vagonCarga1 = new tp.VagonDeCarga({cargaMaxIdeal: 8000, maderasSueltas: 5})

console.log("vagon de carga - capacidad:",vagonCarga1.maxCarga())
vagonCarga1.setMaderasSueltas(2)
console.log("vagon de carga - capacidad:",vagonCarga1.maxCarga())