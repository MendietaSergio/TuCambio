var express = require('express');
var router = express.Router();

//CONTROLADORES
const indexController = require('../controller/indexController');
const apiValorController = require('../controller/apiController');

//VALIDACION
const formValidation = require('../validation/formValidation');
const contactForm = require('../validation/contactForm')

/* GET home page. */
router.get('/',formValidation, indexController.home);

router.get('/contactenos',indexController.contactForm);
router.post('/contactenos',contactForm,indexController.processContactForm);

router.get('/acerca-de-nosotros',indexController.aboutUs);
router.get('/preguntas-frecuentes', indexController.frequentQuestions);

router.post('/api/form',apiValorController.processForm);

router.post('/apis/valor', apiValorController.getValorEntrada);
router.post('/apis/valores', apiValorController.getValorSalida);

// router.post('/contacto', indexController.processContactForm);




module.exports = router;
