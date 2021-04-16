// LOGINVALIDATION TERMINADO.

addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector('form');

    let inputEmailLogin = document.querySelector('#email');
    let inputPassword = document.querySelector('#password');
    let errorEmailLogin = document.querySelector('#errorEmailLogin');
    let errorPasswordLogin = document.querySelector('#errorPasswordLogin');

    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    inputEmailLogin.addEventListener('keyup',() =>{
        switch (true) {
            case inputEmailLogin.value.length === 0:
                errorEmailLogin.innerHTML = "Debe llenar este campo";
                inputEmailLogin.classList.add("is-invalid");
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerHTML = "El email debe ser valido.";
                inputEmailLogin.classList.add('is-invalid');
                break;
            default:
                inputEmailLogin.classList.remove('is-invalid');
                inputEmailLogin.classList.add('is-valid');
                errorEmailLogin.innerHTML = "";
                break;
        }

    })
    inputEmailLogin.addEventListener('blur',() =>{
        switch (true) {
            case inputEmailLogin.value.length === 0:
                errorEmailLogin.innerHTML = "Debe llenar este campo";
                inputEmailLogin.classList.add("is-invalid");
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerHTML = "El email debe ser valido.";
                inputEmailLogin.classList.add('is-invalid');
                break;
            default:
                inputEmailLogin.classList.remove('is-invalid');
                inputEmailLogin.classList.add('is-valid');
                errorEmailLogin.innerHTML = "";
                break;
        }
    })
    inputPassword.addEventListener('keyup', function(){
        switch (true) {
            case inputPassword.value.length === 0:
                errorPasswordLogin.innerHTML = "Debe llenar este campo.";
                inputPassword.classList.add('is-invalid');
                break;
            case inputPassword.value.length < 6:
                errorPasswordLogin.innerHTML = "Debe tener mínimo 6 carácteres.";
                inputPassword.classList.add('is-invalid');
                break;
            default:
                errorPasswordLogin.innerHTML = "";
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                break;
        }
    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault();

        let elementos = formulario.elements;

        let error = false;
        for(let i=0; i<2; i++){
            if(elementos[i].value == 0){
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if(elementos[0].value.length===0){
            error = true
            errorEmail.innerHTML = "Debes ingresar su email.";
            this.classList.add('is-invalid');
        }
        if(elementos[1].value.length===0){
            error = true;
            errorPassword.innerHTML = "Debes ingresa su password.";
            this.classList.add('is-invalid');
        }
        
        if(!error){
            errorSubmit.innerHTML = "";
            formulario.submit();
            
        }else{
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

})