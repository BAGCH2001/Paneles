import React from 'react'

export const Form = () => {
  return (
    <div className=" w-auto h-auto">
        <form className="p-5 max-w-96 min-w-auto border-solid border-2 border-gray-300 rounded-lg shadow-lg">
            <div className="mb-5">
                <input
                id="correo"
                type="text"
                placeholder="Correo electronico"
                className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                />  
            </div>
            <div className="mb-5">
                <input
                id="contraseña"
                type="password"
                placeholder="Contraseña"
                className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
                />  
            </div>

            <input 
            type="submit"
            className=" font-bold  bg-yellow-400 w-full p-2 mb-5 text-white rounded-lg hover:bg-yellow-500 cursor-pointer transition-all"
            value={"Iniciar sesión"}
            />  
            <div className="text-amber-200 w-full text-center">
                <a href="">¿Olvidaste tu contraseña?</a>
                <hr/>
            </div>

            <div className="grid place-content-center">
                <input 
                type=""
                className="text-center font-bold bg-gray-300 w-full p-2 mt-8 text-white rounded-lg hover: cursor-pointer transition-all"
                value={"Crear cuenta"}
                />
            </div>  

        </form>
    </div>
  )
}