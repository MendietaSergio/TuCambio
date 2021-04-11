
window.addEventListener('DOMContentLoaded', () => {

    //VARIABLES DE INPUT ENTRADA Y SALIDA.
    const origen = document.querySelector("#metodoOrigen");
    const destino = document.querySelector("#metodoDestino");
    const tituloOrigen = document.querySelector('#tituloOrigen');
    const tituloDestino = document.querySelector('#tituloDestino');

    let campoAdicional1 = document.querySelector('.campoAdicional1');
    let campoAdicional2 = document.querySelector('#campoAdicional2');

    const campoCBU1 = (inputAdicional1, origen, destino) => {
        console.log(origen, destino);
        switch (true) {
            case origen == 16 && destino == 15:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 15 && destino == 16:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 11 && destino == 12:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 12 && destino == 11:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 11 && destino == 15:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 15 && destino == 11:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 12 && destino == 16:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 16 && destino == 12:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 16 && destino == 11:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 11 && destino == 16:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 15 && destino == 12:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            case origen == 12 && destino == 15:
                campoAdicional1.style.display = "block";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
            default:
                campoAdicional1.style.display = "none";
                campoAdicional1.setAttribute('placeholder', inputAdicional1.trim());
                break;
        }
    }
    campoCBU1(tituloOrigen.textContent)
    const campoCBU2 = (inputAdicional2, origen, destino) => {
        switch (true) {
            case origen == 16 && destino == 15:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 15 && destino == 16:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 12 && destino == 11:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 11 && destino == 12:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 11 && destino == 15:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 15 && destino == 11:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 12 && destino == 16:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 16 && destino == 12:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 16 && destino == 11:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 11 && destino == 16:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 15 && destino == 12:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            case origen == 12 && destino == 15:
                campoAdicional1.style.display = "block";
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                break;
            default:
                campoAdicional2.setAttribute('placeholder', inputAdicional2.trim());
                campoAdicional1.style.display = "none";
                break;
        }
    }
    campoCBU2(tituloDestino.textContent)
    /*FIN CAMPOCBU1 Y CAMPOCBU2 */
    /*MOSTRAR ABREVIATURA, NOMBRE */
    const recibeAbreviatura = document.querySelector('.recibeAbreviatura');
    const enviaAbreviatura = document.querySelector('.enviaAbreviatura');
    recibeAbreviatura.innerHTML = document.querySelector('#abreviaturaDestino').textContent;
    enviaAbreviatura.innerHTML = document.querySelector('#abreviaturaOrigen').textContent;
    const enviaNombre = document.querySelector('.enviaNombre');
    const recibeNombre = document.querySelector('.recibeNombre');
    enviaNombre.innerHTML = document.querySelector('.contenido-select-Entrada img').alt;
    recibeNombre.innerHTML = document.querySelector('.contenido-select-Salida img').alt;


    const numEntrada = document.querySelector('#numEntrada');
    const numSalida = document.querySelector('#numSalida');

    //LOGICA PARA MOSTRAR IMAGENES ENFORMA DE LISTA 'ENTRADA'
    const selectEntrada = document.querySelector('#selectEntrada');
    const opcionesEntrada = document.querySelector('#opcionesEntrada');
    const contenidoSelectEntrada = document.querySelector('#selectEntrada .contenido-select-Entrada');

    //FUNCION PARA BLOQUEAR Y DESBLOQUEAR LA CAJA DE COMISIONES CUANDO ALGUN MEDIO DE PAGO SEA DE PAYPAL
    let caja_Comision = document.querySelector('.caja-comision');
    let caja_Formulario = document.querySelector('#caja-formulario');
    let comisionEntrada = document.querySelector('.comisionEntrada');
    let comisionSalida = document.querySelector('.comisionSalida');
    const cajaComisionDestino = (destino,origen) => {
            switch (true) {
                case (origen == 16 && destino == 13) || (origen == 14 && destino == 13) || (origen == 11 && destino == 13):
                    comisionEntrada.style.display = "block";
                    comisionSalida.style.display = "block";
                    break;
                case destino == 13:
                    comisionEntrada.style.display = "none";
                    comisionSalida.style.display = "block";
                    break;
                case origen == 16 || origen == 14 || origen == 11:
                    comisionEntrada.style.display = "block";
                    comisionSalida.style.display = "none";
                    break;
                default:
                    comisionEntrada.style.display = "none";
                    comisionSalida.style.display = "none";
                    break;
            }
        
    }
    cajaComisionDestino(destino.value, origen.value);
    const btnSiguiente = document.querySelector('.btn-success');
    btnSiguiente.addEventListener('click', () => {
        cajaComisionDestino(destino.value, origen.value);

    })
    document.querySelectorAll('#opcionesEntrada > .opcionEntrada').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelectEntrada.innerHTML = e.currentTarget.innerHTML;
            selectEntrada.classList.toggle('active');
            opcionesEntrada.classList.toggle('active');
            origen.value = e.currentTarget.querySelector('#tituloOrigen').getAttribute('data-id');
            igualdad(origen.value, destino.value);
            let inputAdicional1 = e.currentTarget.querySelector('#tituloOrigen').textContent;
            enviaAbreviatura.innerHTML = e.currentTarget.querySelector('#abreviaturaOrigen').textContent;
            enviaNombre.innerHTML = e.currentTarget.querySelector('.opcionEntrada img').alt;
            campoCBU1(inputAdicional1, origen.value, destino.value);
            getValor(numEntrada.value, origen.value, destino.value);
            campoAdicional1.value = "";
            campoAdicional2.value = "";
            campoAdicional1.classList.remove('is-invalid');
            campoAdicional1.classList.remove('is-valid');
            errorAdicional1.innerHTML = "";
            blockAcutualizar();
            comisionPagoUno();
            cajaComisionDestino(destino.value, origen.value);
            validarCampoAdicional1();
        });
    });

    selectEntrada.addEventListener('click', () => {
        selectEntrada.classList.toggle('active');
        opcionesEntrada.classList.toggle('active');
    });

    //LOGICA PARA MOSTRAR IMAGENES EN FORMA DE LISTA 'SALIDA'
    const selectSalida = document.querySelector('#selectSalida');
    const opcionesSalida = document.querySelector('#opcionesSalida');
    const contenidoSelectSalida = document.querySelector('#selectSalida .contenido-select-Salida');


    document.querySelectorAll('#opcionesSalida > .opcionSalida').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelectSalida.innerHTML = e.currentTarget.innerHTML;
            selectSalida.classList.toggle('active');
            opcionesSalida.classList.toggle('active');
            destino.value = e.currentTarget.querySelector('#tituloDestino').getAttribute('data-id');
            let inputAdicional2 = e.currentTarget.querySelector('#tituloDestino').textContent;
            recibeAbreviatura.innerHTML = e.currentTarget.querySelector('#abreviaturaDestino').textContent;
            recibeNombre.innerHTML = e.currentTarget.querySelector('.opcionSalida img').alt;
            campoCBU2(inputAdicional2, origen.value, destino.value)
            igualdad(origen.value, destino.value);
            getValor(numEntrada.value, origen.value, destino.value);
            cajaComisionDestino(destino.value, origen.value);
            campoAdicional2.value = "";
            campoAdicional1.value = "";
            campoAdicional2.classList.remove('is-invalid');
            campoAdicional2.classList.remove('is-valid');
            errorAdicional2.innerHTML = "";
            blockAcutualizar();
            validarCampoAdicional1();

        });
    });


    selectSalida.addEventListener('click', () => {
        selectSalida.classList.toggle('active');
        opcionesSalida.classList.toggle('active');
    });

    /*
                API PARA CALCULAR EL VALOR.
    */
    let comisionTotal = document.querySelector('#comisionTotal')
    let enviar = document.querySelector('.enviar')

    //LOGICA PARA HACER LA ECUACION EN BASE AL INPUT ENTRADA
    const getValor = (numEntrada, origen, destino) => {
        agregaAbreviaturaInput();
        if (numEntrada > 0 && origen != destino) {
            fetch('http://www.tucambio.com.ar/apis/valor', {
                method: 'POST',
                body: JSON.stringify({
                    numEntrada,
                    origen,
                    destino
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(response => response.json())
                .then(result => {
                    numSalida.value = result.numSalida;
                    valorSalida()
                })
        }
    }
    /*
    ABREVIACION EN 'TÚ ENVÍAS' Y 'TE ENVIAMOS'
    */
    let abreviaturaEntrada = document.querySelector('.abreviaturaEntrada');
    let abreviaturaSalida = document.querySelector('.abreviaturaSalida');
    const agregaAbreviaturaInput = () => {
        abreviaturaEntrada.innerHTML = enviaAbreviatura.textContent;
        abreviaturaSalida.innerHTML = recibeAbreviatura.textContent;
    }
    agregaAbreviaturaInput();
    let errorEntrada = document.querySelector('#errorEntrada');

    numEntrada.addEventListener('input', () => {
        if (origen.value == 1 || origen.value == 2 || origen.value == 3 || origen.value == 4 || origen.value == 5) {
            console.log(origen.value);
            switch (true) {
                case numEntrada.value.length == 0:
                    errorEntrada.innerHTML = "Debe ingresar un número."
                    errorEntrada.style.display = "block";
                    btnSiguiente.style.display = "none";
                    comisionPagoUno();
                    break;                    
                case numEntrada.value < 3000:
                    errorEntrada.innerHTML = "Debe ingresar un mínimo de $3.000";
                    errorEntrada.style.display = "block";
                    btnSiguiente.style.display = "none";
                    paypalComision();
                    comisionPagoUno();
                    getValor(numEntrada.value, origen.value, destino.value);
                    break;
                default:
                    errorEntrada.innerHTML = " ";
                    errorEntrada.style.display = "none";
                    btnSiguiente.style.display = "block";
                    paypalComision();
                    comisionPagoUno();
                    getValor(numEntrada.value, origen.value, destino.value);
                    break;
            }
        }
        if (origen.value == 7 || origen.value == 8 || origen.value == 9 || origen.value == 10 || origen.value == 11 || origen.value == 12 || origen.value == 13 || origen.value == 14 || origen.value == 15 || origen.value == 16 || origen.value == 17) {
            console.log("7 a 16");
            switch (true) {
                case numEntrada.value == 0:
                    errorEntrada.innerHTML = "Debe ingresar un número."
                    errorEntrada.style.display = "block";
                    btnSiguiente.style.display = "none";
                    comisionPagoUno();
                    break;
                case numEntrada.value < 10:
                    errorEntrada.innerHTML = "Debe ingresar un mínimo de $10.";
                    errorEntrada.style.display = "block";
                    btnSiguiente.style.display = "none";
                    paypalComision();
                    comisionPagoUno();
                    getValor(numEntrada.value, origen.value, destino.value);
                    break;
                default:
                    errorEntrada.innerHTML = " ";
                    errorEntrada.style.display = "none";
                    btnSiguiente.style.display = "block";
                    paypalComision();
                    comisionPagoUno();
                    getValor(numEntrada.value, origen.value, destino.value);
                    break;
            }
        } else {
            paypalComision();
            comisionPagoUno();
            getValor(numEntrada.value, origen.value, destino.value);
        }

    });
    //LOGICA PARA HACER LA ECUACION EN BASE AL INPUT SALIDA
    const getValorSalida = (numSalida, origen, destino) => {
        agregaAbreviaturaInput();
        if (numSalida > 0 && origen != destino) {
            fetch('http://www.tucambio.com.ar/apis/valores', {
                method: 'POST',
                body: JSON.stringify({
                    numSalida,
                    origen,
                    destino
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(response => response.json())
                .then(result => {
                    numEntrada.value = result.numEntrada;
                    valorSalida()
                })
        }
    }
    numSalida.addEventListener('input', () => {
        paypalComision()
        getValorSalida(numSalida.value, origen.value, destino.value);
    });
    //Entrada
    const totalEntrada = document.querySelector('#totalEntrada');
    const nombreComisionEntrada = document.querySelector('#nombreComisionEntrada')
    const nombreComision2Entrada = document.querySelector('#nombreComision2Entrada')
    let porcentajeVariableEntrada = document.querySelector('.porcentajeVariableEntrada');
    let comisionSkrillNeteller = Number(0.0145);
    let comisionPerfectMoney = Number(0.02);
    let comisionPagoUno = () => {
        switch (true) {
            case (origen.value == 16 || origen.value == 11):
                console.log(`origen 16 y 11`);
                console.log(enviaNombre);
                console.log(`comisionEntrada ${origen.value} `);
                nombreComisionEntrada.innerHTML = enviaNombre.textContent;
                nombreComision2Entrada.innerHTML = enviaNombre.textContent;
                let resultPorcentajeSN = numEntrada.value * comisionSkrillNeteller;
                porcentajeVariableEntrada.innerHTML = resultPorcentajeSN.toFixed(2);
                console.log("origen.value == 16");
                break;
            case origen.value == 14:
                console.log(`origen 14`);
                console.log(enviaNombre);
                console.log(`comisionEntrada ${origen.value} `);
                nombreComisionEntrada.innerHTML = enviaNombre.textContent;
                nombreComision2Entrada.innerHTML = enviaNombre.textContent;
                let resultPorcentajePM = numEntrada.value * comisionPerfectMoney;
                porcentajeVariableEntrada.innerHTML = resultPorcentajePM.toFixed(2);
                console.log("origen.value == 16");
                break;
        }
    }
    comisionPagoUno();
    const totalPaypal = document.querySelector('#totalPaypal');
    const recibePaypal = document.querySelector('#recibePaypal');
    const deseoPaypal = document.querySelector('#deseoPaypal');


    const valorSalida = () => {
        comisionTotal.innerHTML = numSalida.value;
        totalPaypal.innerHTML = numSalida.value;
        deseoPaypal.innerHTML = numSalida.value;
        totalEntrada.innerHTML = numEntrada.value;
        enviar.innerHTML = numEntrada.value;
        
    }
    valorSalida()
    let porcentajeVariable = document.querySelector('.porcentajeVariable');
    let comisionPaypal = Number(0.057);
    let comisionRecibido = document.querySelector('.comisionRecibido');
    let paypalComision = () => {
        let resultPorcentaje = numSalida.value * comisionPaypal;
        porcentajeVariable.innerHTML = resultPorcentaje.toFixed(2);
        let result = numSalida.value - resultPorcentaje;
        comisionRecibido.innerHTML = result.toFixed(2);
    }
    paypalComision()
    let deseoSwitch = document.querySelector('.checkboxDeseo');
    let recibirasSwitch = document.querySelector('.checkboxRecibiras');
    let switchPaypal = document.querySelector('#checkboxPaypal');
    let resultTrue;
    let resultPorcentajeTrue;
    switchPaypal.addEventListener('click', () => {
        if (switchPaypal.checked == true) {
            resultPorcentajeTrue = (numSalida.value * comisionPaypal)
            resultTrue = Number(numSalida.value) + Number(resultPorcentajeTrue);
            numSalida.value = resultTrue;
            getValorSalida(numSalida.value, origen.value, destino.value);
            let result = Number(numSalida.value) - Number(resultPorcentajeTrue);
            comisionRecibido.innerHTML = result.toFixed(2);
            recibePaypal.innerHTML = resultTrue.toFixed(2);
            recibirasSwitch.style.display = "block";
            deseoSwitch.style.display = "none";
            recibePaypal.innerHTML = result.toFixed(2);

        } else {
            numSalida.value = Number(numSalida.value) - Number(resultPorcentajeTrue);
            getValorSalida(numSalida.value, origen.value, destino.value);
            recibirasSwitch.style.display = "none";
            deseoSwitch.style.display = "block";
            paypalComision();
        }
    })
    const igualdad = (origen, destino) => {
        if (origen == destino) {
            msgError.innerHTML = "Elija otro método."
        } else {
            msgError.innerHTML = " ";
        }
    }
    //PARA INICIAR VALOR SALIDA
    getValor(numEntrada.value, origen.value, destino.value);

    /****************************************************************************************************************
    *                                       VALIDACIONES DEL FORMULARIO                                             *
    *****************************************************************************************************************/

    const formulario = document.querySelector('#formulario');
    let inputNombre = document.querySelector('#name');
    let inputEmail = document.querySelector('#email');
    let inputNumero = document.querySelector('#numero');
    let inputAcept = document.querySelector('#accept');
    let btnEnviar = document.querySelector('#boton');
    //VARIABLES PARA HABILITAR BTN ENVIAR
    let validName;
    let validEmail;
    let validNumero;
    let validCampAdicional1;
    let validCampAdicional2;
    let validAccept;
    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExNumero = /^\d{10}$/;//0000000000
    inputNombre.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "Debe ingresar su nombre.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validName = false;
                blockAcutualizar();
                break;
            default:
                errorNombre.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                habilitarBtn();
                validName = true;
                break;
        }
    })
    inputNombre.addEventListener('keyup', function () {
        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "Debe ingresar su nombre.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validName = false;
                blockAcutualizar();
                break;
            default:
                errorNombre.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                habilitarBtn();
                validName = true;
                break;
        }
    })
    inputEmail.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe ingresar su email.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validEmail = false;
                blockAcutualizar();
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser válido.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validEmail = false;

                blockAcutualizar();
                break;
            default:
                errorEmail.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                validEmail = true;

                habilitarBtn();
                break;
        }
    })
    inputEmail.addEventListener('keyup', function () {
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe ingresar su email.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validEmail = false;
                blockAcutualizar();
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser válido.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validEmail = false;

                blockAcutualizar();
                break;
            default:
                errorEmail.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                validEmail = true;

                habilitarBtn();
                break;
        }
    })
    inputNumero.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorNumero.innerHTML = "Debe ingresar su número de teléfono."
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validNumero = false;

                blockAcutualizar();
                break;
            case !regExNumero.test(this.value):
                errorNumero.innerHTML = "Debe ingresar un número válido.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validNumero = false;

                blockAcutualizar();
                break;
            default:
                errorNumero.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                validNumero = true;

                habilitarBtn();
                break;
        }
    })
    inputNumero.addEventListener('keyup', function () {
        switch (true) {
            case this.value.length === 0:
                errorNumero.innerHTML = "Debe ingresar su número de telefono"
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validNumero = false;

                blockAcutualizar();

                break;
            case !regExNumero.test(this.value):
                errorNumero.innerHTML = "Debe ingresar un numero válido.";
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                validNumero = false;

                blockAcutualizar();

                break;
            default:
                errorNumero.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                validNumero = true;

                habilitarBtn();
                break;
        }
    })

    let regExIBAN = /\D{2}\d{22}/; // IBAN
    let regExWallet = /^\w{34}/; // WALLET
    let regExAlias = /^\w{6,20}/;//ALIA
    let regExDai = /\d\x\w{40}/;//DAI
    let regExCBU = /\d{22}/;//CBU
    let errorAdicional2 = document.querySelector('#errorAdicional2');
    campoAdicional2.addEventListener('blur', function () {

        if (destino.value == 10 || destino.value == 11 || destino.value == 12 || destino.value == 13 || destino.value == 15 || destino.value == 16) {
            switch (true) {
                case this.value.length === 0:
                    errorAdicional2.innerHTML = "Debe ingresar su correo electrónino.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case !regExEmail.test(this.value):
                    errorAdicional2.innerHTML = "El correo debe ser válido.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                default:
                    errorAdicional2.innerHTML = " ";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    validCampAdicional2 = true;

                    habilitarBtn();
                    break;
            }
        } else if (destino.value == 9 || destino.value == 17) {
            switch (true) {
                case this.value.length === 0:
                    errorAdicional2.innerHTML = "Debe ingresar su IBAN.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case !regExIBAN.test(this.value):
                    errorAdicional2.innerHTML = "El IBAN debe ser válido.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case this.value.length >= 25:
                    errorAdicional2.innerHTML = "Debe ingresar su IBAN de 24 carácteres.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                default:
                    errorAdicional2.innerHTML = " ";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    validCampAdicional2 = true;

                    habilitarBtn();
                    break;
            }
        } else if (destino.value == 6 || destino.value == 8) {
            switch (true) {
                case this.value.length === 0:
                    errorAdicional2.innerHTML = "Debe ingresar su Wallet.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case !regExWallet.test(this.value):
                    errorAdicional2.innerHTML = "El Wallet debe ser válido.";
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case this.value.length >= 35:
                    errorAdicional2.innerHTML = "Debe ingresar su Wallet de 34 carácteres.";
                    this.classList.add('is-invalid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                default:
                    errorAdicional2.innerHTML = " ";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    validCampAdicional2 = true;

                    habilitarBtn();
                    break;
            }
        } else if (destino.value == 1 || destino.value == 4 || destino.value == 5) {
            if (!isNaN(this.value)) {
                switch (true) {
                    case this.value.length === 0:
                        errorAdicional2.innerHTML = "Debe ingresar su CBU o Alias.";
                        this.classList.add('is-invalid');
                        validCampAdicional2 = false;

                        this.classList.remove('is-valid');
                        blockAcutualizar();
                        break;
                    case !regExCBU.test(this.value):
                        errorAdicional2.innerHTML = "El CBU debe ser válido.";
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                        validCampAdicional2 = false;

                        blockAcutualizar();
                        break;
                    case this.value.length > 22:
                        errorAdicional2.innerHTML = "Debe ingresar su CBU o Alias.";
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                        validCampAdicional2 = false;

                        blockAcutualizar();
                        break;
                    default:
                        console.log(this.value.length);
                        errorAdicional2.innerHTML = " ";
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                        validCampAdicional2 = true;

                        habilitarBtn();
                        break;
                }
            } else {
                switch (true) {
                    case this.value.length === 0:
                        errorAdicional2.innerHTML = "Debe ingresar su CBU o Alias.";
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                        validCampAdicional2 = false;

                        blockAcutualizar();
                        break;
                    case !regExAlias.test(this.value):
                        errorAdicional2.innerHTML = "El CBU debe ser válido.";
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                        validCampAdicional2 = false;

                        blockAcutualizar();
                        break;
                    case this.value.length > 20:
                        errorAdicional2.innerHTML = "Debe ingresar su CBU o Alias.";
                        this.classList.remove('is-valid');
                        validCampAdicional2 = false;

                        this.classList.add('is-invalid');
                        blockAcutualizar();
                        break;
                    default:
                        errorAdicional2.innerHTML = " ";
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                        validCampAdicional2 = true;

                        habilitarBtn();
                        break;
                }
            }

        } else if (destino.value == 7) {
            switch (true) {
                case this.value.length === 0:
                    errorAdicional2.innerHTML = "Debe ingresar su Wallet DAI.";
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case !regExDai.test(this.value):
                    errorAdicional2.innerHTML = "El Wallet DAI debe ser válido.";
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                case this.value.length >= 43:
                    errorAdicional2.innerHTML = "Debe ingresar su Wallet DAI de 42 carácteres.";
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                    validCampAdicional2 = false;

                    blockAcutualizar();
                    break;
                default:
                    errorAdicional2.innerHTML = " ";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    validCampAdicional2 = true;
                    habilitarBtn();
                    break;
            }
        }
    })
    const validarCampoAdicional1 = () => {
        if (campoAdicional1.style.display === "none") {
            validCampAdicional1 = true;
            campoAdicional1.value = " ";
        } else {
            campoAdicional1.addEventListener('blur', () => {
                switch (true) {
                    case campoAdicional1.value.length === 0:
                        errorAdicional1.innerHTML = "Debe ingresar su correo electrónino.";
                        campoAdicional1.classList.remove('is-valid');
                        campoAdicional1.classList.add('is-invalid');
                        validCampAdicional1 = false;
                        blockAcutualizar();
                        break;
                    case !regExEmail.test(campoAdicional1.value):
                        errorAdicional1.innerHTML = "El correo debe ser válido.";
                        campoAdicional1.classList.remove('is-valid');
                        campoAdicional1.classList.add('is-invalid');
                        validCampAdicional1 = false;
                        blockAcutualizar();
                        break;
                    default:
                        errorAdicional1.innerHTML = " ";
                        campoAdicional1.classList.remove('is-invalid');
                        campoAdicional1.classList.add('is-valid');
                        validCampAdicional1 = true;
                        habilitarBtn();
                        break;
                }
            })
            campoAdicional1.addEventListener('keyup', () => {
                switch (true) {
                    case campoAdicional1.value.length === 0:
                        errorAdicional1.innerHTML = "Debe ingresar su correo electrónino.";
                        campoAdicional1.classList.remove('is-valid');
                        campoAdicional1.classList.add('is-invalid');
                        validCampAdicional1 = false;
                        blockAcutualizar();
                        break;
                    case !regExEmail.test(campoAdicional1.value):
                        errorAdicional1.innerHTML = "El correo debe ser válido.";
                        campoAdicional1.classList.remove('is-valid');
                        campoAdicional1.classList.add('is-invalid');
                        validCampAdicional1 = false;
                        blockAcutualizar();
                        break;
                    default:
                        errorAdicional1.innerHTML = " ";
                        campoAdicional1.classList.remove('is-invalid');
                        campoAdicional1.classList.add('is-valid');
                        validCampAdicional1 = true;
                        habilitarBtn();
                        break;
                }
            })
        }
    }
    validarCampoAdicional1()
    inputAcept.addEventListener('load', () => {
        if (inputAcept.checked) {
            validAccept = true;
            habilitarBtn();

        } else {
            validAccept = false;
            blockAcutualizar();
        }

    })
    inputAcept.addEventListener('click', () => {
        if (inputAcept.checked) {
            validAccept = true;
            habilitarBtn();

        } else {
            validAccept = false;
            blockAcutualizar();
        }

    })
    const habilitarBtn = () => {
        if (validName == true && validEmail == true && validNumero == true && validCampAdicional1 == true && validCampAdicional2 == true && validAccept == true) {
            disblockActualizar();
        } else {
            blockAcutualizar();
        }
    }
    const blockAcutualizar = () => {
        btnEnviar.type = "button";
        btnEnviar.style.backgroundColor = "rgb(65, 105, 255, .4)";
    }
    const disblockActualizar = () => {
        btnEnviar.type = "submit";
        btnEnviar.style.backgroundColor = "royalblue";
        btnEnviar.style.color = "white";
        btnEnviar.style.borderColor = "rgb(73, 63, 211)";
    }


    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        let elementos = formulario.elements;
        let content = {
            envia: enviaNombre.textContent,
            cantEnvia: numEntrada.value,
            recibe: recibeNombre.textContent,
            cantRecibe: numSalida.value,
            nomCompleto: inputNombre.value,
            correoPersonal: inputEmail.value,
            telefono: inputNumero.value,
            campoAdicional1: campoAdicional1.value,
            campoAdicional2: campoAdicional2.value,
            recibeAbreviatura: recibeAbreviatura.textContent,
            enviaAbreviatura: enviaAbreviatura.textContent
        }
        let error = false;
        for (let i = 0; i < 3; i++) {
            if (elementos[i].value == 0) {
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if (elementos[0].value.length < 4) {
            error = true;

            this.classList.add('is-invalid');
        }
        if (elementos[1].value.length === 0) {
            error = true;
            this.classList.add('is-invalid');
        }
        if (elementos[2].value.length === 0) {
            error = true;
            this.classList.add('is-invalid');
        }
        if (!error) {
            errorSubmit.innerHTML = " ";
            submitForm(content);
            Swal.fire(
                'Formulario enviado',
                'Recuerda revisar tu casilla de correo electronico o de spam',
                'Aceptar'
            )
                .then(() => {
                    formulario.submit();
                    console.log("formulario.submit OK");
                })

                .catch(error => {
                    res.send(error)
                })
        } else {
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

    const submitForm = (content) => {
        fetch('http://www.tucambio.com.ar/api/form', {
            method: 'POST',
            body: JSON.stringify({
                content
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => response.json())
            .then(result => {

            })
    }
});