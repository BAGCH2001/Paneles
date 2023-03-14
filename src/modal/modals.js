import Swal from "sweetalert2"

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
        // customClass: {
        //     CancelButton: ''
        // }
    }).then((option) => {
        if (option.isConfirmed) {
            window.open('addcom', '_blank');
        } else if (option.isDenied) {
            window.open('addanu', '_blank');
        }
    })
    // footer:
}

export const showcard = () => {
  Swal.fire({
    title: 'Información del negocio',
    showConfirmButton: false,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'Editar',
    cancelButtonText: 'Editar',
    closeButtonText: 'Editar',
    html: `
      <div style="display: flex; justify-content: center; align-items: center;">
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
          <div style="margin-right: 20px;">
            <h2>Título del negocio</h2>
            <p>Descripción del negocio</p>
          </div>
          <img style="width: 50%; height: auto;" src="https://avatars.githubusercontent.com/u/92775533?v=4" alt="Imagen del negocio" />
        </div>
      </div>
    `
  });
}