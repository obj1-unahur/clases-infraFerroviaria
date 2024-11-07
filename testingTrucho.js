import * as tp from "./tpParadigmas.js";

let locomotora1 = new tp.Locomotora()
let locomotora2 = new tp.Locomotora()

let vagon1 = new tp.Vagon()
let vagon2 = new tp.Vagon()

let formacion1 = new tp.Formacion({locomotora: [locomotora1,locomotora2], vagones: [vagon1,vagon2]})

let deposito = new tp.Deposito({formaciones: formacion1})

console.log(deposito)