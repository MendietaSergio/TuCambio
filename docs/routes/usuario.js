var express = require('express');
var router = express.Router();

//CONTROLADORES.
const userController = require('../controller/userController.js');
const apiEditController = require('../controller/apiController.js');

//MIDDLEWARES
const redirect = require('../middlewares/redirect.js');
const redirectAdmin = require('../middlewares/redirectAdmin.js');

//VALIDACION.
const loginValidation = require('../validation/loginValidation.js');
const changePassValidation = require('../validation/changePassValidation.js');

//LOGIN Y PROCESO DE LOGIN.
router.get('/',redirect, userController.login);
router.post('/',redirect,loginValidation, userController.processLogin);

//EDIT Y PROCESO DE EDIT.
router.get('/editar',redirectAdmin,userController.edit);
router.post('/api/edit',apiEditController.processEdit);
router.post('/api/viewCoeficiente',apiEditController.processViewCoeficiente);

//PROFILE Y PROCESO DE ACTUALIZACIÓN PASSWORD.
router.get('/profile',redirectAdmin,userController.profile);
router.post('/profile',changePassValidation,userController.processProfileEdit);

//SALIDA DE LA CUENTA.
router.get('/logout',userController.logout);

//LISTA DE CLIENTES.
router.get('/listaclientes',redirectAdmin,userController.listOrders);
router.get('/list',redirectAdmin, userController.list)
router.post('/search', userController.search)

//ACTUALIZACIÓN DEL ESTADO
router.post('/update',userController.update)
//ELIMINACIÓN DE CLIENTE
router.post('/delete',userController.delete)
module.exports = router;
