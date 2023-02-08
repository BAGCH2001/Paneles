import React from 'react' 
import errorImage from '../img/404.svg'
const Errores = () => {
  return (
   
    <div className="h-screen bg-[#333333]">
      <div className="flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-40">
          <div className="col-span-1 lg:col-span-1 text-center ">
            <img src={errorImage} alt="404 Error" className="w-65 mb-4" />
          </div>

          

          <div className="m-auto col-span-2 text-center justify-center">
            <h1 className="text-8xl font-bold text-white">404</h1>
            <p className="text-white">No hay ruta pa' allá mi chavo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Errores