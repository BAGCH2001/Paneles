import Swal from "sweetalert2"

export const validateFormLogin = () => {
    Swal.fire({
        icon: 'error',
        title: 'Es necesario rellenar todos los campos',
        text: 'Intentelo de nuevo',
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
}


export const showcard = () =>{
    Swal.fire({
        backdrop: false
    })
}


