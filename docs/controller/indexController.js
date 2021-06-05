const db = require('../database/models');
const nodeMailer = require('nodemailer');
//PRUEBANODEMAILER@GMAIL.COM
// var smtpConfig = {
//     host: 'smtp.gmail.com',
//     secureConnection: true,
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'pruebanodemailers@gmail.com',
//         pass: 'aduwbhzuypeuefam'
//     },
//     tls: {
//         rejectUnauthorized: false,
//         secureProtocol: "TLSv1_method"
//     }
// };
//tucambio.ok@gmail.com PRUEBA
var smtpConfig = {
    host: 'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.USER_MAIL_CONTACT,
        pass: process.env.USER_PASSWORD_CONTACT
    },
    tls: {
        rejectUnauthorized: false,
        secureProtocol: "TLSv1_method"
    }
};
var transporter = nodeMailer.createTransport(smtpConfig);
// var smtpConfig = {
//     host: process.env.HOST_MAIL,
//     secureConnection: true,
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: process.env.USER_MAIL,
//         pass: process.env.USER_PASSWORD
//     },
//     tls: {
//         rejectUnauthorized: false,
//         secureProtocol: "TLSv1_method"
//     }
// };
var transporter = nodeMailer.createTransport(smtpConfig);
module.exports = {
    home: (req, res) => {
        db.MediosDePagos.findAll()
            .then((pagos) => {
                res.render('index', {
                    title: "Tu cambio - CAMBIÁ FÁCIL Y SEGURO",
                    css: 'index.css',
                    pagos: pagos,
                    script: "funcionHome.js",
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
                    script: "funcionHome.js",
                    JQueryForm: "JQueryForm.js"
                })
            })
            .catch(error => {
                res.send(error)
            })
    },
    contactForm: (req, res) => {
        res.render('contactForm', {
            title: "Contáctenos - Tu Cambio",
            css: 'contactForm.css',
            contactForm: "contactForm.js",
        })
    },
    processContactForm: (req, res) => {
        let content = req.body;
        let mailOptions = {
            from: `Tu cambio - Datos de contacto <>`,
            to: process.env.USER_MAIL_CONTACT,
            subject: 'Datos de contacto',
            html: `
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tu cambio</title>
            </head>
            <body style="color:black;">
            <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
                <h1 style="color:black;">¡Hola Lucas!</h1>
                <small style="color:black;">Estos son los datos de la persona que se quiere comunicar con usted:</small>

                <small style="color:black;">Email: ${content.email}</small>
                <small style="color:black;">Asunto: ${content.asunto}</small>
                <small style="color:black;">Comentario: ${content.comentario}</small>


                <small style="color:black;"> Un cordial saludo...
                El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></small>
            </body>
            </html>
            `
        }
        transporter.sendMail(mailOptions, function (errors, info) {
            if (errors) {
                console.log("Correo no enviado");
            } else {
                console.log("Correo enviado " + info.response);
            }
            console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
        })
        return res.redirect('/')
    },
    aboutUs: (req, res) => {
        res.render('aboutUs', {
            title: "Acerca de Nosotros",
            css: 'aboutUs.css',
            aboutUs: "aboutUs.js",
        })
    },
    frequentQuestions: (req, res) => {
        res.render('frequentQuestions', {
            title: "Preguntas Frecuentes",
            css: 'frequentQuestions.css',
            frequentQuestions: "frequentQuestions.js",
        })
    }
}