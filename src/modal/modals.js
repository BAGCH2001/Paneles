import Swal from "sweetalert2"

const infoCard ={
  nombre_comercio: "MAD KAT - Rubius [CORP]",
  eslogan: "Otaku anti otaku club",
  link_externo: "https://www.madkat.store/es/", 
  categoria_comercio: "Moda",
  direccion_comercio: "España",
  telefono_comercio: "0000000000",
  descripcion_comercio: "Tienda de ropa del famoso streamer español andorrano",
  horario: "10:00 - 09:00", 
  imagenes_comercio: "https://avatars.githubusercontent.com/u/92775533?v=4"
}

const innerInSweetAlert = `
  <div class="flex flex-row ">
    <div class="w-2/3">
      <p><strong>Nombre:</strong> ${infoCard.nombre_comercio}</p>
      <p><strong>Eslogan:</strong> ${infoCard.eslogan}</p>
      <p><strong>Web:</strong> ${infoCard.link_externo}</p>
      <p><strong>categoria</strong> ${infoCard.categoria_comercio}</p>
      <p><strong>direccion</strong> ${infoCard.direccion_comercio}</p>
      <p><strong>telefono</strong> ${infoCard.telefono_comercio}</p>
      <p><strong>descripcion</strong> ${infoCard.descripcion_comercio}</p>
      <p><strong>horario:</strong> ${infoCard.horario}</p>
      <p><strong>Dirección:</strong> ${infoCard.direccion_comercio}</p>
    </div>
    <div class="w-1/2">
      <img src="${infoCard.imagenes_comercio}" class="mx-auto my-auto">
    </div>
  </div>
`;

const formInSweetAlert = `
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="nombre_comercio">Nombre:</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre_comercio" type="text" placeholder="Nombre del comercio" value="${infoCard.nombre_comercio}">
    </div>
  </form>
`


export const validateFormLogin = () => {
    Swal.fire({
        icon: 'error',
        title: 'Es necesario rellenar todos los campos',
        footer: 'Verifica los campos',
        showConfirmButton: false,
        timer: 2500
      })
}

export const checkReg = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Todos los campos deben ser obligatorios',
        text: 'Por favor, llena todos los campos para conrinuar con el registro',
        showConfirmButton: false,
        timer: 2500
    });
}

export const CrateAnmuCom = () =>{
    Swal.fire({
        title: 'Que deseas crear?',
        showConfirmButton: true,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Comercio',
        denyButtonText: `Anuncios`,
        confirmButtonColor: '#EAB308',
        denyButtonColor: '#EAB308',
        cancelButtonColor: '#d1320f ',
    }).then((option) => {
        if (option.isConfirmed) {
            window.open('addcom', '_blank');
        } else if (option.isDenied) {
            window.open('addanu', '_blank');
        }
    })
}

export const showcard = () => {
  Swal.fire({
    title: 'Información del comercio',
    showConfirmButton: false,
    showCloseButton: true,
    confirmButtonText: 'Editar',
    closeButtonHtml: 'x',
    footer: `
      <button id="editar-btn" class="swal2-styled">Editar</button>
      <button id="eliminar-btn" class="swal2-styled" style="background-color: #e53e3e;">Eliminar</button>
    `,
    html: innerInSweetAlert,
    width: '700px'

  });

  document.querySelector('#editar-btn').addEventListener('click', () => {
    Swal.fire({
      title: 'Editar información',
      html: formInSweetAlert,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      closeButtonHtml: 'Cerrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Actualizado con éxito',
          icon: 'success',
          confirmButtonText: 'Cerrar',
          closeButtonHtml: 'Cerrar'
        });
      }
    });
  });

  document.querySelector('#eliminar-btn').addEventListener('click', () => {
    Swal.fire({
      title: 'Eliminado',
      text: 'El negocio ha sido eliminado exitosamente',
      icon: 'success',
      confirmButtonText: 'Cerrar',
      closeButtonHtml: 'Cerrar'
    });
  });
};

