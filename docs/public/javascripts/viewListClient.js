let url = location.protocol + "//" + location.host;
console.log(url)
const select = document.querySelector('#select')
const opciones = document.querySelector('#opciones')
const contenidoSelect = document.querySelector('#select .contenido-select ');
const status = document.querySelector('.contenido-opcion img')
const actionSelector = (e,id) => {
    e.preventDefault();

    console.log("click");
        document.getElementById('select'+id).classList.toggle('active')
        document.getElementById('opciones'+id).classList.toggle('active')
}
const updateStatus= async (status,_id)=>{
    console.log("desde updateStatus => ",status, _id);
    fetch(url + `/admin/update`, {
        method: "POST",
        body: JSON.stringify({
          status,
          _id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        });

}
const actionSelected = (e,id, status,_id) => {
    document.getElementById('select'+id).classList.toggle('active')//cambia la clase
    console.log('click en select');
    console.log(status);//enviar por post el estatus
    
    updateStatus(status,_id)
    document.getElementById('contenido-select'+id).innerHTML= e.currentTarget.innerHTML;

    document.getElementById('opciones'+id).classList.toggle('active')//cambia la clase
}

const modalClient = new bootstrap.Modal(document.getElementById('modalClient'))
const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click','.modalClient', e =>{
    const fila = e.target.parentNode.parentNode
    nombre.value = fila.children[1].innerHTML
    modalClient.show()
})

