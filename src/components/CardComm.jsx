import React from 'react'
import { showcard } from '../modal/modals'

const CardComm = () => {
  const show = (e) =>{
    e.preventDefault()
    showcard()
  }
  return (
    <>
      <button 
        href="project.url" 
        className=" hover:bg-blue-500 hover:shadow-md group rounded-md  p-3  bg-white ring-1 ring-slate-200 shadow-lg m-2"
        onClick={show}
        >
      <div className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Titulo</dt>
            <h1 className="group-hover:text-white font-semibold text-slate-900">
              Titulo del comercio
            </h1>
          </div>
          <div>
            <dt className="sr-only">Catrgoría</dt>
            <h2 className="group-hover:text-blue-200"> Catrgoría del comercio </h2>
          </div>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
            <dt className="sr-only">Users</dt>
            <dd x-for="user in project.users" className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img src="https://avatars.githubusercontent.com/u/92775533?v=4" alt="user.name" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy"/>
            </dd>
          </div>
        </div>
      </button>
    </>
    
  )
}

export default CardComm