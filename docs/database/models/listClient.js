const mongoose = require("mongoose");
let fecha = new Date();
fecha =
  fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
console.log(fecha);
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
    default: fecha,
  },
});

module.exports = mongoose.model("listClient", listClientSchema);
