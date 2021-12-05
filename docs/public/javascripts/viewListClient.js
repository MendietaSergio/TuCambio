const select = document.querySelector('#select')
const opciones = document.querySelector('#opciones')
const contenidoSelect = document.querySelector('#select .contenido-select ');
const hiddentInput = document.querySelector('#inputSelect')

document.querySelectorAll('#opciones > .opcion').forEach((opcion) =>{
    opcion.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log("click");
        contenidoSelect.innerHTML= e.currentTarget.innerHTML;
        select.classList.toggle('active')
        opciones.classList.toggle('active')
        
    })
})
select.addEventListener('click', () =>{
    select.classList.toggle('active')//cambia la clase
    console.log('click en select');

    opciones.classList.toggle('active')//cambia la clase
})