const mongoose = require("mongoose");
// let fecha = new Date();
// fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

// let hora = new Date().toLocaleString("en-US", {timeZone: 'America/Argentina/Buenos_Aires'})
// console.log("HORA=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// console.log(hora.toLocaleString());

// hora = hora.toLocaleString()
// const atrapaPuntos = (hora) => {
//   let largo = 0;
//   let nuevaHora = "";
//   let doblePunto = 0;
//   while (largo != 19) {
//     nuevaHora += hora[largo];
//     largo++; 
//     if (hora[largo] == ":") {
//       doblePunto++;
//     }
//     if (doblePunto == 2) {  
//       largo = 19;
//     }
//   }
//   console.log(nuevaHora);
//   return (nuevaHora = nuevaHora.split("").join(""));
// };
const date = new Date();

let stringDate = date.toLocaleString("en-US", {timeZone: 'America/Argentina/Buenos_Aires'});

const splitDate = stringDate.split(' ');

const formattedDate = splitDate.map((current, index) => { 
  const horaIndex = 1;
  if(index === horaIndex){
    const horaSplited = current.split(':');
    horaSplited.pop();
    return horaSplited.join(':');
  }
  return current
}).join(' ').replace(',', ' -')
 console.log(formattedDate);
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
    default: formattedDate,
  },
});

module.exports = mongoose.model("listClient", listClientSchema);
