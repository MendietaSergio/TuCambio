const db = require('../database/models');
const nodeMailer = require('nodemailer');
var smtpConfig = {
    host: process.env.HOST_MAIL,
    secureConnection: true,
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
        secureProtocol: "TLSv1_method"
    }
};
var transporter = nodeMailer.createTransport(smtpConfig);
const estructuraHTML = (content) => {
    let wallet;
    let iban;
    let cbuAlias;
    let correoCuenta1;
    let correoCuenta2;
    if (content.content.recibe === "Bitcoin" || content.content.recibe == "DAI" || content.content.recibe == "Tether") {
        wallet = "Wallet de " + content.content.recibe + ": " + content.content.campoAdicional2;
        console.log(wallet);
        let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="color:black;">
        <li>Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta ${content.content.correoPersonal}</li>
        <li>Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta wallet ${content.content.campoAdicional2}</li>
        </ul>

        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="color:black;">
        <li>Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li>Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li>En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li>Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>

        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </body>
    </html>
    `;
        return contentHTML;
    } else if (content.content.recibe == "Wise" == content.content.recibe == "Transferencia Bancaria en Euros") {
        iban = "IBAN de " + content.content.recibe + ": " + content.content.campoAdicional2;
        console.log(iban);
        let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="color:black;">
        <li>Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta ${content.content.correoPersonal}</li>
        <li>Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta IBAN ${content.content.campoAdicional2}</li>
        </ul>

        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="color:black;">
        <li>Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li>Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li>En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li>Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>

        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </body>
    </html>
    `;
        return contentHTML;
    } else if (content.content.recibe == "Transferencia Bancaria en pesos" || content.content.recibe == "MercadoPago(Saldo en Cuenta)" || content.content.recibe == "Ualá") {
        cbuAlias = "CBU/Alias de " + content.content.recibe + ": " + content.content.campoAdicional2;
        console.log(cbuAlias);
        let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="color:black;">
        <li>Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta ${content.content.correoPersonal}</li>
        <li>Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta con CBU/Alias ${content.content.campoAdicional2}</li>
        </ul>

        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="color:black;">
        <li>Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li>Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li>En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li>Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>

        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </body>
    </html>
    `;
        return contentHTML;
    } else if ((content.content.envia == "Skrill" || content.content.envia == "Payoneer" || content.content.envia == "Payeer" || content.content.envia == "Neteller") && ((content.content.recibe == "Skrill" || content.content.recibe == "Payoneer" || content.content.recibe == "Payeer" || content.content.recibe == "Neteller"))) {
        correoCuenta1 = "Correo de " + content.content.envia + ": " + content.content.campoAdicional1;
        correoCuenta2 = "Correo de " + content.content.recibe + ": " + content.content.campoAdicional2;
        console.log("correo con dos cuentas");
        let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="color:black;">
        <li>Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta ${content.content.campoAdicional1}</li>
        <li>Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta ${content.content.campoAdicional2}</li>
        </ul>

        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="color:black;">
        <li>Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li>Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li>En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li>Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>

        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </body>
    </html>
    `;
        console.log(contentHTML);
        return contentHTML;
    } else {
        correoCuenta2 = "Correo de " + content.content.recibe + ": " + content.content.campoAdicional2;
        console.log("Demás correos");
        let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200; width:400" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="color:black;">
        <li>Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta ${content.content.correoPersonal}</li>
        <li>Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta ${content.content.campoAdicional2}</li>
        </ul>

        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="color:black;">
        <li>Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li>Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li>En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li>Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>

        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </body>
    </html>
    `;
        console.log(contentHTML);
        return contentHTML;
    }
}
module.exports = {
    getValorEntrada: (req, res) => {
        const { numEntrada, origen, destino } = req.body;
        db.Coeficientes.findOne({
            where: {
                mediosdepagos1: origen,
                mediosdepagos2: destino
            }
        })
            .then(result => {
                db.MediosDePagos.findAll()
                    .then(medios => {
                        let resultado;
                        for (let index = 0; index < medios.length; index++) {
                            const element = medios[index].id;
                            for (let subIndex = 0; subIndex < medios.length; subIndex++) {
                                if (origen == medios[index].id && destino == medios[subIndex].id) {
                                    switch (true) {
                                        //PESOS A DOLARES
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "USD":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "USDt":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "EUR":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "DAI":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "BTC":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "EUR" && medios[subIndex].abreviatura == "BTC":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "USD" && medios[subIndex].abreviatura == "BTC":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "USDt" && medios[subIndex].abreviatura == "BTC":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "DAI" && medios[subIndex].abreviatura == "BTC":                                             
                                            resultado = (numEntrada / result.coeficiente).toFixed(8);
                                            break;
                                        default:                                             
                                            resultado = (numEntrada * result.coeficiente).toFixed(2);
                                            break;
                                    }
                                }
                            }
                        }
                        //PARA LA SALIDA DE BITCOIN CON 8 DECIMALES
                        let numSalida = resultado;
                        res.json({
                            numSalida
                        })
                    })
            })
    },
    getValorSalida: (req, res) => {
        const { numSalida, origen, destino } = req.body;
        db.Coeficientes.findOne({
            where: {
                mediosdepagos1: origen,
                mediosdepagos2: destino
            }
        })
            .then(result => {
                db.MediosDePagos.findAll()
                    .then(medios => {
                        let resultado;
                        for (let index = 0; index < medios.length; index++) {
                            for (let subIndex = 0; subIndex < medios.length; subIndex++) {
                                if (origen == medios[index].id && destino == medios[subIndex].id) {
                                    switch (true) {
                                        case medios[index].abreviatura == "BTC" && medios[subIndex].abreviatura == "ARS":
                                            resultado = (numSalida / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "BTC" && medios[subIndex].abreviatura == "USD":
                                            resultado = (numSalida / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "BTC" && medios[subIndex].abreviatura == "USDt":
                                            resultado = (numSalida / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "BTC" && medios[subIndex].abreviatura == "EUR":
                                            resultado = (numSalida / result.coeficiente).toFixed(8);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "EUR":
                                            resultado = (numSalida * result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "USD":
                                            resultado = (numSalida * result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "USDt":
                                            resultado = (numSalida * result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "DAI":
                                            resultado = (numSalida * result.coeficiente).toFixed(2);
                                            break;
                                        case medios[index].abreviatura == "ARS" && medios[subIndex].abreviatura == "BTC":
                                            resultado = (numSalida * result.coeficiente).toFixed(2);
                                            break;
                                        default:
                                            resultado = (numSalida / result.coeficiente).toFixed(2);
                                            break;
                                    }
                                    console.log("Origen: " + medios[index].id + ", Destino " + medios[subIndex].id);
                                }
                            }
                        }
                        let numEntrada = resultado;
                        res.json({
                            numEntrada
                        })
                    })
            })
    },
    processEdit: (req, res) => {
        const { coeficiente, origen, destino } = req.body;
        if(origen == 1 || origen ==4){
            db.Coeficientes.update({
                coeficiente: coeficiente
            }, {
                where: {
                    mediosdepagos1: 1,
                    mediosdepagos2: destino
                }
            })
            db.Coeficientes.update({
                coeficiente: coeficiente
            }, {
                where: {
                    mediosdepagos1: 4,
                    mediosdepagos2: destino
                }
            })
                .then(medios => {
                    console.log(req.body);
                })
                .catch(error => {
                    res.send(error)
                })
        }else{
            db.Coeficientes.update({
                coeficiente: coeficiente
            }, {
                where: {
                    mediosdepagos1: origen,
                    mediosdepagos2: destino,
                }
            })
                .then(medios => {
                    console.log(req.body);
                })
                .catch(error => {
                    res.send(error)
                })
        }
        
    },
    processProfileEdit: (req, res) => {
        // //SEGUIR DESDE ACÁ, DA ERROR
        // console.log(req.body);
        // //console.log(req.session.user.id);
        // //console.log("llega");


        // const { passwordNew, passwordOld } = req.body;
        // if (typeof user && bcrypt.compareSync(passwordOld, user.password)){
        //     res.status(200).json({
        //         msg: 'Recibido'
        //     })
        // }else{
        //     console.log("no es lo mismo");
        // }
        // bcrypt.hashSync(req.body.passwordNew, 10)
        // db.Usuarios.update({
        //     password: passwordNew
        // }, {
        //     where: {
        //         id: req.session.user.id
        //     }
        // })
        //     .then(medios => {
        //         console.log(req.body);
        //         res.status(200).json({
        //             msg: 'Recibido'
        //         })
        //     })
        //     .catch(error => {
        //         res.send(error)
        //     })

    },
    processViewCoeficiente: (req, res) => {
        const { origen, destino } = req.body;
        console.log(req.body);
        db.Coeficientes.findOne({
            where: {
                mediosdepagos1: origen,
                mediosdepagos2: destino,
            }
        })
            .then(result => {
                let viewCoeficiente = result.coeficiente;
                res.json({
                    viewCoeficiente
                })
            })
            .catch(error => {
                res.send(error)
            })
    },
    processForm: (req, res) => {
        const content = req.body;
        let contentHTML = estructuraHTML(content);
        let mail = content.content.correoPersonal;
        let mailOptions = {
            from: `Tu cambio - Datos de contacto <${process.env.USER_MAIL}>`,
            to: `${process.env.USER_MAIL},` + mail,
            subject: 'Datos de contacto',
            html: contentHTML
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("Correo no enviado");
            } else {
                console.log("Correo enviado " + info.response);
            }
            console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
        })
    }
}