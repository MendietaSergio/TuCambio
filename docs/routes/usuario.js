var express = require('express');
var router = express.Router();

//CONTROLADORES.
const userController = require('../controller/userController.js');
const apiEditController = require('../controller/apiController.js');
//VALIDACION.
const loginValidation = require('../validation/loginValidation.js');
const changePassValidation = require('../validation/changePassValidation.js');
//LOGIN Y PROCESO DE LOGIN.
router.get('/', userController.login);
router.post('/',loginValidation, userController.processLogin);
//EDIT Y PROCESO DE EDIT.
router.get('/edit',userController.edit);
router.post('/api/edit',apiEditController.processEdit);
//PROFILE Y PROCESO DE ACTUALIZACIÓN PASSWORD.
router.get('/profile',userController.profile);
router.post('/profile',changePassValidation,userController.processProfileEdit);
//SALIDA DE LA CUENTA.
router.get('/logout',userController.logout);
module.exports = router;
