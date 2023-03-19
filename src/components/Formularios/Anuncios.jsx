import * as React from 'react';


export const Anuncios = () => {
  return (

<center>
  <div class="mx-auto container grid grid-cols-6">
  <aside class="col-span-6 md:col-span-1 p-10"></aside>
  <main class="col-span-6 md:col-span-4 h-96 p-10" >
  <div class="flex font-sans">
    <div class="flex-none w-48 relative">
    <input
              justify-content="center"
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              id="add-imLateral"
              onChange={(e) => {
                setting(e);
              }}
              multiple
              style={{ display: "none" }}
            />
      <label htmlFor="add-imLateral" >
        <img className="my-6 absolute inset-0 w-full rounded-md h-80 object-cover" src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt=""/>
      </label>
    </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <input type="text" name="titulo" id="titulo" placeholder='Titulo' className='rounded-md text-center w-full border-2 border-gray-300' />
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        <input type="date" name="" id="" className='rounded-md border-2 border-gray-300 w-full text-center' />
        <textarea className="mt-2 textarea textarea-bordered w-full h-28 border-solid border-2 border-gray-300 text-lg rounded-lg" placeholder="Bio"></textarea>
      </div>
    </div>
    {/*  */}
    <div class="flex items-baseline mt-4 mb-6 pb-6 place-content-center">
      <div class="space-x-2 flex text-sm">
        <label htmlFor="add-imLateral" >
          <img className="place-content-center rounded-md w-auto " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
        </label>
        <label htmlFor="add-imLateral" >
           <img className="place-content-center rounded-md w-auto " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
        </label>
        <label htmlFor="add-imLateral" >
          <img className="place-content-center rounded-md w-auto " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
        </label>
      </div>
    </div>
    {/*  */}
    <div class="flex flex-wrap mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4 place-content-end">
        <button class="h-10 px-6 font-bold rounded-md bg-yellow-400  text-white" type="submit">
          Publicar
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Cancelar
        </button>
      </div>
    </div>
  </form>
</div>
</main>
<aside class="col-span-6 md:col-span-1 p-10"></aside>
</div>
</center>
  );
}
