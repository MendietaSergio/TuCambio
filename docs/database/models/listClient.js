const mongoose = require("mongoose");
// let fecha = new Date();
// fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

let hora = new Date();
console.log("HORA=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(hora.toLocaleString());
hora = hora.toLocaleString()
const atrapaPuntos = (hora) => {
  let largo = 0;
  let nuevaHora = "";
  let doblePunto = 0;
  while (largo != 19) {
    nuevaHora += hora[largo];
    largo++; 
    if (hora[largo] == ":") {
      doblePunto++;
    }
    if (doblePunto == 2) {  
      largo = 19;
    }
  }
  console.log(nuevaHora);
  return (nuevaHora = nuevaHora.split("").join(""));
};

const listClientSchema = mongoose.Schema({
  estado: {
    type: String,
  },
  orden: {
    type: Number,
  },
  nombreCompleto: {
    type: String,
  },
  correoElectronico: {
    type: String,
  },
  telefono: {
    type: String,
  },
  campoAdicional1: {
    type: String,
  },
  campoAdicional1Valor: {
    type: String,
  },
  campoAdicional2: {
    type: String,
    default: "-",
  },
  campoAdicional2Valor: {
    type: String,
    default: "-",
  },
  recibe: {
    type: String,
  },
  envia: {
    type: String,
  },
  created_at: {
    type: String,
    default: atrapaPuntos(hora),
  },
});

module.exports = mongoose.model("listClient", listClientSchema);
