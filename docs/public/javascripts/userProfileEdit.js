window.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    let inputPasswordOld = document.querySelector('#passwordOld');
    let inputPasswordNew = document.querySelector('#passwordNew');
    let inputPasswordNew2 = document.querySelector('#passwordNew2');

    let errorPasswordOld = document.querySelector('#errorPasswordOld');
    let errorPasswordNew = document.querySelector('#errorPasswordNew');
    let errorPasswordNew2 = document.querySelector('#errorPasswordNew2');

    let errorSubmit = document.querySelector('#errorSubmit');

    inputPasswordOld.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorPasswordOld.innerHTML = "Debe llenar este campo.";
                this.classList.add('is-invalid');
                break;
            case this.value.length < 6:
                errorPasswordOld.innerHTML = "La contraseña  debe tener 6 carácteres.";
                this.classList.add('is-invalid');
                break;
            default:
                errorPasswordOld.innerHTML = "";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    }),
        inputPasswordOld.addEventListener('keyup', function () {
            switch (true) {
                case this.value.length === 0:
                    errorPasswordOld.innerHTML = "Debe llenar este campo.";
                    this.classList.add('is-invalid');
                    break;
                case this.value.length < 6:
                    errorPasswordOld.innerHTML = "La contraseña  debe tener 6 carácteres.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    errorPasswordOld.innerHTML = "";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    break;
            }
        }),
        inputPasswordNew.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorPasswordNew.innerHTML = "Debe llenar este campo.";
                    this.classList.add('is-invalid');
                    break;
                case this.value.length < 6:
                    errorPasswordNew.innerHTML = "La contraseña  debe tener 6 carácteres.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    errorPasswordNew.innerHTML = "";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    break;
            }
        }),
        inputPasswordNew.addEventListener('keyup', function () {
            switch (true) {
                case this.value.length === 0:
                    errorPasswordNew.innerHTML = "Debe llenar este campo.";
                    this.classList.add('is-invalid');
                    break;
                case this.value.length < 6:
                    errorPasswordNew.innerHTML = "La contraseña  debe tener 6 carácteres.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    errorPasswordNew.innerHTML = "";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    break;
            }
        }),
        inputPasswordNew2.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorPasswordNew2.innerHTML = "Debe llenar este campo.";
                    this.classList.add('is-invalid');
                    break;
                case this.value.length < 6:
                    errorPasswordNew2.innerHTML = "La contraseña  debe tener 6 carácteres.";
                    this.classList.add('is-invalid');
                    break;
                case this.value !== inputPasswordNew.value:
                    errorPasswordNew2.innerHTML = "La contraseña nueva no coindicen.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    errorPasswordNew2.innerHTML = "";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    break;
            }
        }),
        inputPasswordNew2.addEventListener('keyup', function () {
            switch (true) {
                case this.value.length === 0:
                    errorPasswordNew2.innerHTML = "Debe llenar este campo.";
                    this.classList.add('is-invalid');
                    break;
                case this.value.length < 6:
                    errorPasswordNew2.innerHTML = "La contraseña  debe tener 6 carácteres.";
                    this.classList.add('is-invalid');
                    break;
                case this.value !== inputPasswordNew.value:
                    errorPasswordNew2.innerHTML = "La contraseña nueva no coindicen.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    errorPasswordNew2.innerHTML = "";
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    break;
            }
        })
    
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        let elementos = formulario.elements;
        let error = false;
        for (let i = 0; i < elementos.length - 2; i++) {
            if (elementos[i].value == 0) {
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if (!error) {
            errorSubmit.innerHTML = "";
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'La contraseña se actualizo con exito!',
                showConfirmButton: false,
                timer: 2000
            })
            formulario.submit()
        } else {
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })
})