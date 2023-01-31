import React from 'react' 
import errorImage from '../img/404.svg'
const Errores = () => {
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-3 lg:col-span-1 text-center lg:text-center">
            <img src={errorImage} alt="404 Error" className="w-48 mb-4" />
          </div>
          <div className="col-span-3 lg:col-span-2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-700">404</h1>
            <p className="text-gray-600">No hay ruta pa' allá mi chavo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Errores