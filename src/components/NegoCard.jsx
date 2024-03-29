import * as React from "react";
import { CrateAnmuCom } from "../components/modal/modals";
import CardComm from "./CardComm";

export const NegoCard = () => {

  const newcreate = (e) =>{
    e.preventDefault()
    CrateAnmuCom()
  }

  return (
    <div className="">
      <section>
        <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div class="flex items-center justify-between">
            <h2 class="font-semibold text-slate-900">poner nombre adecuado xd</h2>
            <p>ejemplo enfocado en la publicación de un comercio</p>
          </div>
          <form class="group relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-slate-400"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              class="focus:ring-2 focus:ring-[#FFDE59] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Buscar"
              placeholder="Buscar..."
            />
          </form>
        </header>


    <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8
        gap-2 text-sm leading-6">

        <li x-for="project in projects" className="grid grid-cols-2 mb-6">
          <CardComm/>
          <CardComm/>
          <CardComm/>
        </li>

          <li class="flex">
            <button
              href="#"
              class="hover:border-slate-400 hover:border-solid hover:bg-white hover:text-slate-400 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
              onClick={newcreate}
            >
              <svg
                class="group-hover:text-[#FFDE59] mb-1 text-slate-400"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"

              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Crear nuevo [ Comercio / Anuncio ] 
            </button>
          </li> 
        </ul>
      
      </section>
    </div>
  );
};
