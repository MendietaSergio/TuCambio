var express = require('express');
var router = express.Router();

//CONTROLADORES
const indexController = require('../controller/indexController');
const apiValorController = require('../controller/apiController');

//VALIDACION
const formValidation = require('../validation/formValidation');

/* GET home page. */
router.get('/',formValidation, indexController.home);
router.post('/api/form',apiValorController.processForm);
router.post('/form',indexController.processForm)

router.post('/apis/valor', apiValorController.getValorEntrada);
router.post('/apis/valores', apiValorController.getValorSalida);




module.exports = router;
