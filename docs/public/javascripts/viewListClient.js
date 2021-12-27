let url = location.protocol + "//" + location.host;
let newData;
console.log("URL==> ");

const ListClient = async () => {
  try{

    await fetch(url + `/admin/list`)
    .then((response) => response.json())
    .then((data) => {
      mostrarData(data);
    })
    .catch((error) => console.log(error));
  } catch(error){
      console.log("Error=> ",error);
    }
};
const preloader = document.querySelector("#preloader");
ListClient();
let loading = `<div class="preloader" ></div> 
  <span >Cargando...</span>`;
document.getElementById("preloader").innerHTML = loading;
const mostrarData = (data) => {
  newData = data;
  let body = "";
  let modal = "";
  loading = `<div class="preloader" ></div> 
  <span >Cargando...</span>`;
  preloader.style.display = "display";
  document.getElementById("preloader").innerHTML = loading;
  document.getElementById("bodyData").innerHTML = body;
  document.getElementById("modal-container").innerHTML = modal;
  setTimeout(function () {
    for (let i = 0; i < data.length; i++) {
      body += `
            <tr>
              <td>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalClient${data[i].orden}"
                >
                ${data[i].orden}
                </a>
              </td>
              <td>
                <a
                  class="modalClient"
                  data-bs-toggle="modal"
                  data-bs-target="#modalClient${data[i].orden}"
                >
                ${data[i].nombreCompleto}
                </a>
              </td>
              <td>
                <div class="fs-6">
                  <div class="badge badge-sa-primary">
                    <div class="selectbox">
                      <div
                        class="select"
                        id="select${data[i].orden}"
                        onclick="actionSelector(event, '${data[i].orden}')"
                      >
                        <div
                          class="contenido-select${data[i].orden}"
                          id="contenido-select${data[i].orden}"
                        >
                          <div class="contenido-opcion">
                            <img
                              src="../img/status/${data[i].estado}.png"
                              alt="<% client.estado %>"
                            />
                          </div>
                        </div>
                        <i class="fas fa-chevron-down"></i>
                      </div>
                      <div class="opciones" id="opciones${data[i].orden}">
                        <a
                          class="opcion"
                          onclick="actionSelected(event,'${data[i].orden}', 'realizado', '${data[i]._id}')"
                        >
                          <div class="contenido-opcion">
                            <img
                              src="../img/status/realizado.png"
                              alt="realizado"
                            />
                          </div>
                        </a>
                        <a
                          class="opcion"
                          onclick="actionSelected(event,'${data[i].orden}', 'acreditado', '${data[i]._id}')"
                        >
                          <div class="contenido-opcion">
                            <img
                              src="../img/status/acreditado.png"
                              alt="acreditado"
                            />
                          </div>
                        </a>
                        <a
                          class="opcion"
                          onclick="actionSelected(event,'${data[i].orden}', 'cancelado', '${data[i]._id}')"
                        >
                          <div class="contenido-opcion">
                            <img
                              src="../img/status/cancelado.png"
                              alt="cancelado"
                            />
                          </div>
                        </a>
                        <a
                          class="opcion"
                          onclick="actionSelected(event,'${data[i].orden}', 'pendiente', '${data[i]._id}')"
                        >
                          <div class="contenido-opcion">
                            <img
                              src="../img/status/pendiente.png"
                              alt="pendiente"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="align-items-center">
                  <div> ${data[i].created_at}Hs.</div>
                </div>
              </td>
            </tr>
            
            `;
      if (data[i].campoAdicional2 !== "-") {
        modal += `<div
            class="modal fade"
            id="modalClient${data[i].orden}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Datos del cliente N°${data[i].orden}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                    Nombre Completo: <span class="modal-valor">
                      <span class="modal-valor">${data[i].nombreCompleto}</span>
                    </span>
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                    Correo personal: <span class="modal-valor">${data[i].correoElectronico}</span>
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                    Telefono: <span class="modal-valor">${data[i].telefono}</span>
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                  ${data[i].campoAdicional1} <span class="modal-valor">${data[i].campoAdicional1Valor}</span>
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                  ${data[i].campoAdicional2} <span class="modal-valor">${data[i].campoAdicional2Valor}</span>
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                  Envia: <span class="modal-valor">${data[i].envia}</span>
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLabel${data[i].orden}"
                  >
                    Recibe:  <span class="modal-valor">${data[i].recibe}</span>
                  </h5>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>`;
      } else {
        modal += `<div
      class="modal fade"
      id="modalClient${data[i].orden}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Datos del cliente N°${data[i].orden}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5
              class="modal-title"
              id="exampleModalLabel${data[i].orden}"
            >
              Nombre Completo: <span class="modal-valor">
                <span class="modal-valor">${data[i].nombreCompleto}</span>
              </span>
            </h5>
            <h5
              class="modal-title"
              id="exampleModalLabel${data[i].orden}"
            >
              Correo personal: <span class="modal-valor">${data[i].correoElectronico}</span>
            </h5>
            <h5
              class="modal-title"
              id="exampleModalLabel${data[i].orden}"
            >
              Telefono: <span class="modal-valor">${data[i].telefono}</span>
            </h5>
            <h5
              class="modal-title"
              id="exampleModalLabel${data[i].orden}"
            >
            ${data[i].campoAdicional1} <span class="modal-valor">${data[i].campoAdicional1Valor}</span>
            </h5>
           
            <h5
              class="modal-title"
              id="exampleModalLabel${data[i].orden}"
            >
            Envia: <span class="modal-valor">${data[i].envia}</span>
            </h5>
            <h5
              class="modal-title"
              id="exampleModalLabel${data[i].orden}"
            >
              Recibe:  <span class="modal-valor">${data[i].recibe}</span>
            </h5>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>`;
      }
    }

    preloader.style.display = "none";
    loading = "";
    document.getElementById("preloader").innerHTML = loading;
    document.getElementById("bodyData").innerHTML = body;
    document.getElementById("modal-container").innerHTML = modal;
  }, 2000);
};
// SELECCION DE ESTOS Y ACTUALIZACIÓN DEL MISMO
const select = document.querySelector("#select");
const opciones = document.querySelector("#opciones");
const contenidoSelect = document.querySelector("#select .contenido-select ");
const status = document.querySelector(".contenido-opcion img");
const actionSelector = (e, id) => {
  e.preventDefault();

  document.getElementById("select" + id).classList.toggle("active");
  document.getElementById("opciones" + id).classList.toggle("active");
};
const updateStatus = async (status, _id) => {
  fetch(url + `/admin/update`, {
    method: "POST",
    body: JSON.stringify({
      status,
      _id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};
const actionSelected = (e, id, status, _id) => {
  document.getElementById("select" + id).classList.toggle("active"); //cambia la clase
  updateStatus(status, _id);
  document.getElementById("contenido-select" + id).innerHTML =
    e.currentTarget.innerHTML;
  document.getElementById("opciones" + id).classList.toggle("active"); //cambia la clase
};
// ************************************************************************
//FILTRAR MAYOR O MENOR
const OrdenarMenor = async () => {
  let dataMenor = await newData.sort(function (a, b) {
    return a.orden - b.orden;
  });
  mostrarData(dataMenor);
};

const OrdenarMayor = async () => {
  let dataMayor = await newData.sort(function (a, b) {
    return b.orden - a.orden;
  });
  mostrarData(dataMayor);
};
// *******************************************
//BUSCADOR INTERNO
const submitForm = document.getElementById("submit");
const inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup", (e) => {
  searchClient(e.target.value);
});
const searchClient = async (e) => {
  console.log("desde searchclient ");
  console.log(e);
  fetch(url + "/admin/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: e }),
  })
    .then((res) => res.json())
    .then((data) => {
      let payload = data.payload;
      console.log(payload);
      if (payload.length > 0) {
        mostrarData(payload);
      } else {
        console.log("vacioooo");
        notResult = `<div class="d-flex flex-column align-items-center my-5"
        <span class="text-center">No hay resultados... </span>
        </div> 
        `;
        document.getElementById("bodyData").innerHTML = notResult;
      }
      
    });
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};
