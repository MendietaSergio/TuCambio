const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcrypt');
console.log("changepassvalidation");
module.exports = [
    //SEGUIR DESDE ACA
    body('passwordOld').custom(function (value, { req }) {
        return db.Usuarios.findOne({
            where: {
                id: req.session.user.id
            }
        })
            .then(user => {
                console.log("value");
                    console.log(value);
                    console.log("req.body");
                    console.log(req.body);
                    console.log("user.password");
                    console.log(user.password);
                if (!bcrypt.compareSync(value, user.password)) {
                    return Promise.reject('La contraseña actual no es la misma.')
                }
            })
            .catch(err => {
                return Promise.reject('La contraseña actual no es la misma.')
            })
    })
]