import React from 'react'
import imgs from '../js/imgs'

export const XidooH = () => {
  return (
    <div className="w-auto  max-h-screen min-h-auto">
        <img className="w-full h-full mr-0" src={imgs[2].img} alt={imgs[2].title} />
        <p className="p-2 text-lg">#ConectandoLaCiudad</p>
        <p className=" text-slate-400 text-lg">Da a concer tus negocios o manten informada a la comunidad con tus anuncios.</p>
    </div>

  )
}
