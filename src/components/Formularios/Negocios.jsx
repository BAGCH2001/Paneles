import * as React from 'react';
import { useState } from "react";


export const Negocios = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (

    <div class="flex flex-row">
      <div class="flex-1 w-1/3 h-14">
        <div class="flex flex-col ..">
          <div className='mb-6 '>
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
              <center> <img className="place-content-center rounded-lg w-auto " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" /></center>
            </label>
          </div>
          <div>
            <center>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
            </center>
          </div>
        </div>
      </div>
      <div class="flex-1 w-1/3 h-full mx-2">
        <div className='mb-4 flex-col'>
          <textarea className="textarea textarea-bordered w-full h-36 border-solid border-2 border-gray-300 text-lg rounded-lg" placeholder="Bio"></textarea>
        </div>
        {/* */}
        <div className="relative inline-block w-full">
      <div>
        <button
          type="button"
          className="inline-flex  w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className='text-center'>Horarios de apertura y cierre</span>
          <svg
            className="w-10 h-6 ml-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute center-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Option 1
            </div>
            <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Option 2
            </div>
            <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Option 3
            </div>
          </div>
        </div>
      )}
    </div>
        {/* */}
      </div>
      <div class="flex-1 w-1/3 h-14">
        <div className='flex-col'>
          <div>
            <label htmlFor="add-imLateral">
              <center><img className="rounded-lg mb-4 " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" /></center>
            </label>
          </div>
          <div>
            <label htmlFor="add-imLateral">
              <center><img className="rounded-lg mb-4 " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" /> </center>
            </label>
          </div>
          <div>
            <label htmlFor="add-imLateral" ite>
              <center><img className="rounded-lg mb-4 " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" /> </center>
            </label>
          </div>
        </div>
      </div>
    </div>

  );
}

