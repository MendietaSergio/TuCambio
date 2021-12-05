const mongoose = require("mongoose");
let fecha = new Date()
fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
console.log(fecha);
const listClientSchema = mongoose.Schema({
  envia: {
    type: String,
  },
  nomCompleto: {
    type: String,
  },
  correoPersonal: {
    type: String,
  },
  telefono: {
    type: String,
  },
  campoAdicional1: {
    type: String,
  },
  campoAdicional2: {
    type: String,
  },
  recibeAbreviatura: {
    type: String,
  },
  enviaAbreviatura: {
    type: String,
  },
  cantEnviar: {
    type: String,
  },
  recibe: {
    type: String,
  },
  cantRecibe: {
    type: String,
  },
  orden: {
    type: String,
  },
  estado: {
    type: String,
  },
  created_at: {
    type: String,
    default: fecha
  },
});

module.exports = mongoose.model("listClient", listClientSchema);
