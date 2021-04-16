window.addEventListener('DOMContentLoaded',()=>{
    let titulo_error = document.querySelector('.titulo_error');
    let subTitulo_error = document.querySelector('.subTitulo_error');
    titulo_error.innerHTML = `Error al querer encontrar la página solicitada:`
    subTitulo_error.innerHTML = location.href
})