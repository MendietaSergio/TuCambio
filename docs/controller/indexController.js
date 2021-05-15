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
        pass: USER_PASSWORD_CONTACT
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
        console.log("arriba de req.body processcontactform");
        console.log(req.body);
        let content = req.body;
        let mailOptions = {
            from: `Tu cambio - Datos de contacto ${process.env.USER_MAIL}`,
            to: process.env.USER_MAIL,
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
            <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="http://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
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
//         let mailOptionsNodemailer = {
//             from: `Tu cambio - Datos de contacto`,
//             to: 'tucambio.ok@gmail.com',
//             subject: 'Datos de contacto',
//             html: `
//             <html lang="es">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Tu cambio</title>
//             </head>
//             <body style="background-color:rgb(43, 128, 87);">
//             <div style="margin: 30px;">
//             <a href="https://www.tucambio.com.ar"><img
//             style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400"
//             src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
//     <small style="color:black; font-size: 20px;">¡Hola!</small>
//     <br>
//     <br>
//     <small style="color:black; font-size: 20px;">Estos son los datos de la persona que se quiere comunicar con usted:</small>
//     <br>
//     <br>
//     <small style="color:black; font-size: 20px;">Email: ${content.email}</small>
//     <br>
//     <small style="color:black; font-size: 20px;">Asunto: ${content.asunto}</small>
//     <br>
//     <small style="color:black; font-size: 20px;">Comentario: ${content.comentario}</small>
//     <br>
//     <br>
// <br>
//     <small style="color:black; font-size: 20px;"> Un cordial saludo...
//         El equipo de <a href="https://www.tucambio.com.ar"></a></small>
//             </body>
//             </html>
//             `
//         }
        transporter.sendMail(mailOptionsNodemailer, function (errors, info) {
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
        console.log("acerca de nosotros");
        res.render('aboutUs', {
            title: "Acerca de Nosotros",
            css: 'aboutUs.css',
            aboutUs: "aboutUs.js",
        })
    },
    frequentQuestions: (req, res) => {
        console.log("preguntas frecuentes");
        res.render('frequentQuestions', {
            title: "Preguntas Frecuentes",
            css: 'frequentQuestions.css',
            frequentQuestions: "frequentQuestions.js",
        })
    }
}