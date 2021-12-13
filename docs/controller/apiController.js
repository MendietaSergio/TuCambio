const db = require("../database/models");
const nodeMailer = require("nodemailer");
const ListClient = require("../database/models/listClient.js");

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
var smtpConfig = {
  host: "smtp.gmail.com",
  secureConnection: true,
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "pruebanodemailers@gmail.com",
    pass: "aduwbhzuypeuefam",
  },
  tls: {
    rejectUnauthorized: false,
    secureProtocol: "TLSv1_method",
  },
};
var transporter = nodeMailer.createTransport(smtpConfig);
const estructuraHTML = (content) => {
  let wallet;
  let iban;
  let cbuAlias;
  let correoCuenta1;
  let correoCuenta2;
  console.log("orden: ", content.content.orden);
  if (
    content.content.recibe === "Bitcoin" ||
    content.content.recibe == "DAI" ||
    content.content.recibe == "Tether"
  ) {
    let data ={
      'nombreCompleto':content.content.nomCompleto,
      'correoElectronico':content.content.correoPersonal,
      'telefono': content.content.telefono,
      'campoAdicional1': "Wallet de "+content.content.recibe+": ",
      'campoAdicional1Valor': content.content.campoAdicional2,
      'recibe':content.content.cantRecibe+" "+content.content.recibeAbreviatura+" por "+content.content.recibe+ " a su cuenta",
      'envia':content.content.cantEnvia +" "+ content.content.enviaAbreviatura+" por "+content.content.envia+" con su cuenta",
      'orden':content.content.orden,
      'estado':'pendiente'
    }
    sendData(data)
    let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <div>
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200px; width:400px" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido N° ${content.content.orden}, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <br>
        <li style="color:black;">Nombre completo: <span style="font-size: 14px; font-weight: lighter;">${content.content.nomCompleto}.</span></li>
        <li style="color:black;">Correo electrónico: <span style="font-size: 14px; font-weight: lighter;">${content.content.correoPersonal}.</span></li>
        <li style="color:black;">Teléfono: <span style="font-size: 14px; font-weight: lighter;">${content.content.telefono}.</span></li>
        <li style="color:black;">Wallet de ${content.content.recibe}: <span style="font-size: 14px; font-weight: lighter;">${content.content.campoAdicional2}.</span></li>        
        <li style="color:black;">Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta.</li>
        <li style="color:black;">Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta.</li>
        </ul>
        <br>       
        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li>Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li>Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li>En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li>Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>
        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
        </div>
    </body>
    </html>
    `;
    return contentHTML;
  } else if (
    content.content.recibe == "Wise" ||
    content.content.recibe == "Transferencia Bancaria en Euros"
  ) {
    let data ={
      'nombreCompleto':content.content.nomCompleto,
      'correoElectronico':content.content.correoPersonal,
      'telefono': content.content.telefono,
      'campoAdicional1': "IBAN de"+content.content.recibe+": ",
      'campoAdicional1Valor':content.content.campoAdicional2,
      'recibe':content.content.cantRecibe+" "+content.content.recibeAbreviatura+" por "+content.content.recibe+ " a su cuenta",
      'envia':content.content.cantEnvia +" "+ content.content.enviaAbreviatura+" por "+content.content.envia+" con su cuenta",
      'orden':content.content.orden,
      'estado':'pendiente'
    }
    sendData(data)
    let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <div>
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200px; width:400px" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido N° ${content.content.orden}, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Nombre completo: <span style="font-size: 14px; font-weight: lighter;">${content.content.nomCompleto}.</span></li>
        <li style="color:black;">Correo electrónico: <span style="font-size: 14px; font-weight: lighter;">${content.content.correoPersonal}.</span></li>
        <li style="color:black;">Teléfono: <span style="font-size: 14px; font-weight: lighter;">${content.content.telefono}.</span></li>
        <li style="color:black;">IBAN de ${content.content.recibe}: <span style="font-size: 14px; font-weight: lighter;">${content.content.campoAdicional2}.</span></li>
        <li style="color:black;">Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta.</li>
        <li style="color:black;">Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta.</li>
        </ul>
        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li style="color:black;">Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li style="color:black;">En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li style="color:black;">Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>
        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </div>
    </body>
    </html>
    `;
    return contentHTML;
  } else if (
    content.content.recibe == "Transferencia Bancaria en pesos" ||
    content.content.recibe == "MercadoPago(Saldo en Cuenta)" ||
    content.content.recibe == "Ualá"
  ) {
    let data ={
      'nombreCompleto':content.content.nomCompleto,
      'correoElectronico':content.content.correoPersonal,
      'telefono': content.content.telefono,
      'campoAdicional1': "CBU/Alias "+content.content.recibe+": ",
      'campoAdicional1Valor': content.content.campoAdicional2,
      'recibe':content.content.cantRecibe+" "+content.content.recibeAbreviatura+" por "+content.content.recibe+ " a su cuenta",
      'envia':content.content.cantEnvia +" "+ content.content.enviaAbreviatura+" por "+content.content.envia+" con su cuenta",
      'orden':content.content.orden,
      'estado':'pendiente'
    }
    sendData(data)
    let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <div>
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200px; width:400px" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido N° ${content.content.orden}, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <br>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Nombre completo: <span style="font-size: 14px; font-weight: lighter;">${content.content.nomCompleto}.</span></li>
        <li style="color:black;">Correo electrónico: <span style="font-size: 14px; font-weight: lighter;">${content.content.correoPersonal}.</span></li>
        <li style="color:black;">Teléfono: <span style="font-size: 14px; font-weight: lighter;">${content.content.telefono}.</span></li>
        <li style="color:black;">CBU/Alias ${content.content.recibe}: <span style="font-size: 14px; font-weight: lighter;">${content.content.campoAdicional2}.</span></li>
        <li style="color:black;">Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta.</li>
        <li style="color:black;">Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta.</li>
        </ul>
        <br>
        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li style="color:black;">Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li style="color:black;">En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li style="color:black;">Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>
        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </div>
    </body>
    </html>
    `;
    return contentHTML;
  } else if (
    (content.content.envia == "Skrill" ||
      content.content.envia == "Payoneer" ||
      content.content.envia == "Payeer" ||
      content.content.envia == "Neteller") &&
    (content.content.recibe == "Skrill" ||
      content.content.recibe == "Payoneer" ||
      content.content.recibe == "Payeer" ||
      content.content.recibe == "Neteller")
  ) {
    let data ={
      'nombreCompleto':content.content.nomCompleto,
      'correoElectronico':content.content.correoPersonal,
      'telefono': content.content.telefono,
      'campoAdicional1':"Correo electronico de "+content.content.envia+": ",
      'campoAdicional1Valor': content.content.campoAdicional1,
      'campoAdicional2':"Correo electronico de "+content.content.recibe+": ",
      'campoAdicional2Valor': content.content.campoAdicional2,
      'recibe':content.content.cantRecibe+" "+content.content.recibeAbreviatura+" por "+content.content.recibe+ " a su cuenta",
      'envia':content.content.cantEnvia +" "+ content.content.enviaAbreviatura+" por "+content.content.envia+" con su cuenta",
      'orden':content.content.orden,
      'estado':'pendiente'
    }
    sendData(data)
    let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <div>
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200px; width:400px" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido N° ${content.content.orden}, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Nombre completo: <span style="font-size: 14px; font-weight: lighter;">${content.content.nomCompleto}.</span></li>
        <li style="color:black;">Correo electrónico: <span style="font-size: 14px; font-weight: lighter;">${content.content.correoPersonal}.</span></li>
        <li style="color:black;">Teléfono: <span style="font-size: 14px; font-weight: lighter;">${content.content.telefono}.</span></li>
        <li style="color:black;">Correo electrónico de ${content.content.envia}: <span style="font-size: 14px; font-weight: lighter;">${content.content.campoAdicional1}.</span></li>
        <li style="color:black;">Correo electrónico de ${content.content.recibe}: <span style="font-size: 14px; font-weight: lighter;">${content.content.campoAdicional2}.</span></li>
        <li style="color:black;">Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta ${content.content.campoAdicional1}.</li>
        <li style="color:black;">Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta ${content.content.campoAdicional2}.</li>
        </ul>
        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li style="color:black;">Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li style="color:black;">En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li style="color:black;">Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>
        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </div>
    </body>
    </html>
    `;
    return contentHTML;
  } else {
    correoCuenta2 =
      "Correo de " +
      content.content.recibe +
      ": " +
      content.content.campoAdicional2;
      let data ={
        'nombreCompleto':content.content.nomCompleto,
        'correoElectronico':content.content.correoPersonal,
        'telefono': content.content.telefono,
        'campoAdicional1': "Correo electronico de "+content.content.recibe+": ",
        'campoAdicional1Valor': content.content.campoAdicional2,
        'recibe':content.content.cantRecibe+" "+content.content.recibeAbreviatura+" por "+content.content.recibe+ " a su cuenta",
        'envia':content.content.cantEnvia +" "+ content.content.enviaAbreviatura+" por "+content.content.envia+" con su cuenta",
        'orden':content.content.orden,
        'estado':'pendiente'
      }
      sendData(data)
    let contentHTML = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tu cambio</title>
    </head>
    <body style="color:black;">
    <div>
    <a href="https://www.tucambio.com.ar"><img style="margin:auto; display:block; background-color:rgb(43, 128, 87); height:200px; width:400px" src="https://www.tucambio.com.ar/img/Logo.png" title="Tu Cambio" alt="TuCambio"></a>
        <h1 style="color:black;">Este es tu pedido N° ${content.content.orden}, revísalo</h1>
        <h2 style="color:black;">¡Hola! Primero que nada, muchas gracias por tu pedido. Éste es el detalle del mismo:</h2>
        <br>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Nombre completo: <span style="font-size: 14px; font-weight: lighter;">${content.content.nomCompleto}.</span></li>
        <li style="color:black;">Correo electrónico: <span style="font-size: 14px; font-weight: lighter;">${content.content.correoPersonal}.</span></li>
        <li style="color:black;">Teléfono: <span style="font-size: 14px; font-weight: lighter;">${content.content.telefono}.</span></li>
        <li style="color:black;">Correo elctrónico de ${content.content.recibe}: <span style="font-size: 14px; font-weight: lighter;">${content.content.campoAdicional2}.</span></li>
        <li style="color:black;">Tú envías ${content.content.cantEnvia} ${content.content.enviaAbreviatura} por ${content.content.envia} con tu cuenta.</li>
        <li style="color:black;">Te enviamos ${content.content.cantRecibe} ${content.content.recibeAbreviatura} por ${content.content.recibe} a tu cuenta ${content.content.campoAdicional2}.</li>
        </ul>
        <br>
        <h2 style="color:black;">Acerca de este pedido:</h2>
        <ul style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">
        <li style="color:black;">Los envíos no son inmediatos. Generalmente se procesan dentro de las 24 hs una vez acreditado tu envío, siendo 48hs hábiles el tiempo máximo.</li>
        <li style="color:black;">Utiliza tus datos reales ya que, por motivos de seguridad, puedo solicitarte que envíes documentación para validar tu identidad.</li>
        <li style="color:black;">En caso de mucha volatilidad y demoras en el envío de tu pago, puede que sea necesario renegociar.</li>
        <li style="color:black;">Si tienes problemas con esta solicitud y no me he comunicado contigo en las últimas 48 hs, por favor responde este correo para ver el caso.</li>
        </ul>
        <h2 style="color:black;"> Un cordial saludo...
        El equipo de <a href="https://www.tucambio.com.ar">www.tucambio.com.ar</a></h2>
    </div>
    </body>
    </html>
    `;
    return contentHTML;
  }
};
module.exports = {
  getValorEntrada: (req, res) => {
    const { numEntrada, origen, destino } = req.body;
    db.Coeficientes.findOne({
      where: {
        mediosdepagos1: origen,
        mediosdepagos2: destino,
      },
    }).then((result) => {
      db.MediosDePagos.findAll().then((medios) => {
        let resultado;
        for (let index = 0; index < medios.length; index++) {
          const element = medios[index].id;
          for (let subIndex = 0; subIndex < medios.length; subIndex++) {
            if (origen == medios[index].id && destino == medios[subIndex].id) {
              switch (true) {
                //PESOS A DOLARES
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "USD":
                  resultado = (numEntrada / result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "USDt":
                  resultado = (numEntrada / result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "EUR":
                  resultado = (numEntrada / result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "DAI":
                  resultado = (numEntrada / result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "BTC":
                  resultado = (numEntrada / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "EUR" &&
                  medios[subIndex].abreviatura == "BTC":
                  resultado = (numEntrada / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "USD" &&
                  medios[subIndex].abreviatura == "BTC":
                  resultado = (numEntrada / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "USDt" &&
                  medios[subIndex].abreviatura == "BTC":
                  resultado = (numEntrada / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "DAI" &&
                  medios[subIndex].abreviatura == "BTC":
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
          numSalida,
        });
      });
    });
  },
  getValorSalida: (req, res) => {
    const { numSalida, origen, destino } = req.body;
    db.Coeficientes.findOne({
      where: {
        mediosdepagos1: origen,
        mediosdepagos2: destino,
      },
    }).then((result) => {
      db.MediosDePagos.findAll().then((medios) => {
        let resultado;
        for (let index = 0; index < medios.length; index++) {
          for (let subIndex = 0; subIndex < medios.length; subIndex++) {
            if (origen == medios[index].id && destino == medios[subIndex].id) {
              switch (true) {
                case medios[index].abreviatura == "BTC" &&
                  medios[subIndex].abreviatura == "ARS":
                  resultado = (numSalida / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "BTC" &&
                  medios[subIndex].abreviatura == "USD":
                  resultado = (numSalida / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "BTC" &&
                  medios[subIndex].abreviatura == "USDt":
                  resultado = (numSalida / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "BTC" &&
                  medios[subIndex].abreviatura == "EUR":
                  resultado = (numSalida / result.coeficiente).toFixed(8);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "EUR":
                  resultado = (numSalida * result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "USD":
                  resultado = (numSalida * result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "USDt":
                  resultado = (numSalida * result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "DAI":
                  resultado = (numSalida * result.coeficiente).toFixed(2);
                  break;
                case medios[index].abreviatura == "ARS" &&
                  medios[subIndex].abreviatura == "BTC":
                  resultado = (numSalida * result.coeficiente).toFixed(2);
                  break;
                default:
                  resultado = (numSalida / result.coeficiente).toFixed(2);
                  break;
              }
            }
          }
        }
        let numEntrada = resultado;
        res.json({
          numEntrada,
        });
      });
    });
  },
  processEdit: (req, res) => {
    const { coeficiente, origen, destino } = req.body;
    if (origen == 1 || origen == 4) {
      db.Coeficientes.update(
        {
          coeficiente: coeficiente,
        },
        {
          where: {
            mediosdepagos1: 1,
            mediosdepagos2: destino,
          },
        }
      );
      db.Coeficientes.update(
        {
          coeficiente: coeficiente,
        },
        {
          where: {
            mediosdepagos1: 4,
            mediosdepagos2: destino,
          },
        }
      )
        .then((medios) => {})
        .catch((error) => {
          res.send(error);
        });
    } else {
      db.Coeficientes.update(
        {
          coeficiente: coeficiente,
        },
        {
          where: {
            mediosdepagos1: origen,
            mediosdepagos2: destino,
          },
        }
      )
        .then((medios) => {})
        .catch((error) => {
          res.send(error);
        });
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
    db.Coeficientes.findOne({
      where: {
        mediosdepagos1: origen,
        mediosdepagos2: destino,
      },
    })
      .then((result) => {
        let viewCoeficiente = result.coeficiente;
        res.json({
          viewCoeficiente,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  processForm: async (req, res) => {
    const content = req.body;
    console.log("req.body ", req.body);
    let contentHTML = estructuraHTML(content);
    let mail = content.content.correoPersonal;
    let mailOptions = {
      // from: `Tu cambio - Datos de contacto <${process.env.USER_MAIL}>`,
      from: `Tu cambio - Datos de contacto`,
      // to: `${process.env.USER_MAIL},` + mail,
      to: `pruebanodemailers@gmail.com,` + mail,
      subject: "Este es tu pedido, revísalo.",
      html: contentHTML,
    };
    
    // sendData(content);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Correo no enviado apicontroller");
      } else {
        console.log("Correo enviado " + info.response);
      }
      console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
    });
  },
};
const sendData = async (data) => {
  console.log(
    "data desde sendData => ",data
  );
  const listClient = new ListClient(data);

    // console.log("sendata ", content);
    console.log("listClient ", listClient);
    try {
      await listClient.save();
    } catch (error) {
      console.log(error);
    }
};
