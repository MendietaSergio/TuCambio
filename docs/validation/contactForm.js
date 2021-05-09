const { check } = require('express-validator');

module.exports = [
    check('asunto')
    .isLength({
        min:1
    }).withMessage("Debe ingresar el asunto."),

    check('email')
    .isEmail()
    .isLength({ 
        min:1
    }).withMessage("Debe ingresar un mail valido."),

    check('comentario')
    .isLength({
        min:10,max:280
    })
    .withMessage("Debe escribir un comentario."),
]