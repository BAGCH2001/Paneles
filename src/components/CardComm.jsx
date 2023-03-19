import React from 'react';
import { showcard } from '../components/modal/modals';

const CardComm = () => {


  const show = (e) =>{
    e.preventDefault()
    showcard()
  }

  return (
    <>
      <div
        href="project.url"
        className="hover:bg-[#FFDE59] hover:shadow-md hover:cursor-pointer group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-lg m-2"
        onClick={show}
      >
        <div className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Titulo</dt>
            <h1 className="group-hover:text-black font-semibold text-slate-900">Titulo del comercio</h1>
          </div>
          <div>
            <dt className="sr-only">Catrgoría</dt>
            <h2 className="group-hover:text-black">Catrgoría del comercio</h2>
          </div>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
            <dt className="sr-only">Users</dt>
            <dd
              x-for="user in project.users"
              className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"
            >
              <img
                src="https://avatars.githubusercontent.com/u/92775533?v=4"
                alt="user.name"
                className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                loading="lazy"
              />
            </dd>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComm;
