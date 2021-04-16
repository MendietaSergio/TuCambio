const db = require('../database/models');
module.exports = {
    home: (req, res) => {
        db.MediosDePagos.findAll()
            .then((pagos) => {
                res.render('index', {
                    title: "Tu cambio - CAMBIÁ FÁCIL Y SEGURO",
                    css: 'index.css',
                    pagos: pagos,
                    script: "imgList.js",
                    JQueryForm: "JQueryForm.js"
                })
            })
            .catch(error => {
                res.send(error)
            })

    },
    processForm: (req, res) => {        
        db.MediosDePagos.findAll()
            .then((pagos) => {
                res.render('index', {
                    title: "Tu cambio - CAMBIÁ FÁCIL Y SEGURO",
                    css: 'index.css',
                    pagos: pagos,
                    script: "imgList.js",
                    JQueryForm: "JQueryForm.js"
                })
            })
            .catch(error => {
                res.send(error)
            })
    }
}