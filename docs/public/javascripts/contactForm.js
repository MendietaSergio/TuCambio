addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');
    let inputEmail = document.querySelector('#email');
    let errorEmailContact = document.querySelector('#errorEmailContact');
    let inputComentario = document.querySelector('#comentario');
    let errorComentario = document.querySelector('#errorComentario')
    let inputAsunto = document.querySelector('#asunto')
    let errorAsunto = document.querySelector('#errorAsunto');

    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    inputEmail.addEventListener('keyup',() =>{
        switch (true) {
            case inputEmail.value.length === 0:
                errorEmailContactLogin.innerHTML = "Debe llenar este campo";
                inputEmail.classList.add("is-invalid");
                break;
            case !regExEmail.test(inputEmail.value):
                errorEmailContact.innerHTML = "El email debe ser valido.";
                inputEmail.classList.add('is-invalid');
                break;
            default:
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                errorEmailContact.innerHTML = "";
                break;
        }

    })
    inputEmail.addEventListener('blur',() =>{
        switch (true) {
            case inputEmail.value.length === 0:
                errorEmailContact.innerHTML = "Debe llenar este campo";
                inputEmail.classList.add("is-invalid");
                break;
            case !regExEmail.test(inputEmail.value):
                errorEmailContact.innerHTML = "El email debe ser valido.";
                inputEmail.classList.add('is-invalid');
                break;
            default:
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                errorEmailContact.innerHTML = "";
                break;
        }
    })
    inputAsunto.addEventListener('blur',()=>{
        switch(true){
            case inputAsunto.value.length === 0:
                errorAsunto.innerHTML="Debe ingresar este campo.";
                inputAsunto.classList.add("is-invalid");
                break;
            case inputAsunto.value.length >=30:
                errorAsunto.innerHTML="El max??mo de car??cteres es de 30.";
                inputAsunto.classList.add("is-invalid");
                break;
            default:
                inputAsunto.classList.remove('is-invalid');
                inputAsunto.classList.add('is-valid');
                errorAsunto.innerHTML ="";
                break;
        }
    })
    inputAsunto.addEventListener('keyup',()=>{
        switch(true){
            case inputAsunto.value.length === 0:
                errorAsunto.innerHTML="Debe ingresar este campo.";
                inputAsunto.classList.add("is-invalid");
                break;
            case inputAsunto.value.length >=30:
                errorAsunto.innerHTML="El max??mo de car??cteres es de 30.";
                inputAsunto.classList.add("is-invalid");
                break;
            default:
                inputAsunto.classList.remove('is-invalid');
                inputAsunto.classList.add('is-valid');
                errorAsunto.innerHTML ="";
                break;
        }
    })
    inputComentario.addEventListener('blur',()=>{
        switch(true){
            case inputComentario.value.length <= 10:
                errorComentario.innerHTML = "Debe ingresar un minimo de 10 car??cteres.";
                inputComentario.classList.add("is-invalid");
                break;
            case inputComentario.value.length >=280:
                inputComentario.innerHTML = "Se excedi?? el l??mite de car??cteres.";
                inputComentario.classList.add('is-invalid');
                break;
            default:
                inputComentario.classList.remove('is-invalid');
                inputComentario.classList.add('is-valid');
                errorComentario.innerHTML ="";
                break;
        }
    })
    inputComentario.addEventListener('keyup',()=>{
        switch(true){
            case inputComentario.value.length <= 10:
                errorComentario.innerHTML = "Debe ingresar un minimo de 10 car??cteres.";
                inputComentario.classList.add("is-invalid");
                break;
            case inputComentario.value.length >=280:
                inputComentario.innerHTML = "Se excedi?? el l??mite de car??cteres.";
                inputComentario.classList.add('is-invalid');
                break;
            default:
                inputComentario.classList.remove('is-invalid');
                inputComentario.classList.add('is-valid');
                errorComentario.innerHTML ="";
                break;
        }
    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements;

        let error = false;
        for(let i=0; i<3; i++){
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
            errorAsunto.innerHTML = "Debes ingresar el asunto.";
            this.classList.add('is-invalid');
        }
        if(elementos[2].className === "is-invalid"){
            error = true;
            errorComentario.innerHTML = "Debes ingresar un comentario.";
        }
        if(!error){
            errorSubmit.innerHTML = "";
            formulario.submit();
            
        }else{
            errorSubmit.innerHTML = "Los campos se??alados son obligatorios."
        }
    })
})