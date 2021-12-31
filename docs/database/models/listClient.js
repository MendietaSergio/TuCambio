const mongoose = require("mongoose");

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
