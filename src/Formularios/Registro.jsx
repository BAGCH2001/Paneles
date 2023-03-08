import React from 'react'
export const Registro = () => {
    return (
        <div class=" place-content-center m-10 flex">
            <div class="place-content-center">
                <p className='w-80 m-6 font-bold text-xl text-center text-yellow-400'>COMIENZA A CREAR TU PERFIL EN XIDOO RUTAS</p>
                <form className=" place-content-center p-5 boder-solid border-2 border-gray-300 rounded-lg w-96">
                <div className='text-amber-400 w-full text-center'>
                </div>
                <div className=' pt-6 pb-2'>
                    <div className='mx-3 md:flex mb-2'>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="NombreUsario"
                            type="text"
                            placeholder="Nombre(s)"
                            className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                            />
                        </div>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="Apellidos"
                            type="text"
                            placeholder="Apellidos"
                            className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                            />
                        </div>
                    </div>
                </div>

                <div className='pt-2 pb-2 mb-2l'>
                    <div className='mx-3 md:flex mb-2'>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="FechaNaci"
                            type="date"
                            placeholder="Fecha de nacimiento"
                            className="border-2 w-full
                            p-3 text-gray-400 placeholder-gray-400 rounded-md"
                            />
                        </div>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <select className="border-2
                            text-gray-400 w-full p-3 rounded-md placeholder-gray-400">
                                <option>Negociante</option>
                                <option>Anunciante</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='pt-2 pb-2 mb-2 '>
                    <div className='mx-3 md:flex mb-2'>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="Correo"
                            type="email"
                            placeholder="Correo"
                            className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                            />
                        </div>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="Celular"
                            type="number"
                            placeholder="Número de celular" className="border-2 w-full p-3 placeholder-gray-400 rounded-md" 
                            />
                        </div>
                    </div>
                </div>
                <div className='pt-2 pb-2 mb-2'>
                    <div className='mx-3 md:flex mb-3'>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="ContraRegis"
                            type="password"
                            placeholder="Contraseña"
                            className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                            />
                        </div>
                        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input
                            id="ContraRegis"
                            type="password"
                            placeholder="Contraseña"
                            className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <button class="w- font-bold  bg-yellow-400 w-full p-2 mb-5 text-white rounded-lg hover:bg-yellow-500 cursor-pointer transition-all">
                        Registrarse
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
        
    )
}
/*Fuentes: League Spartan titulos
Clear Sans textos
Campos del registro:
Tipo de cuenta
Nombre
Apellidos
Fecha nacimiento
Correo
Celular
Contraseña*/