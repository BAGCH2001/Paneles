import * as React from 'react';

export const Negocios = () => {
  return (

    <div class="flex flex-row">
      <div class="flex-1 w-1/3 h-14">
        <div class="flex flex-col ..">
          <div className='mb-8 '>
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
              <img className="place-content-center rounded-lg "  src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
            </label>
          </div>
          <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4 border-solid border-2 border-gray-300 text-lg rounded-lg" />
          </div>
        </div>
      </div>
      <div class="flex-1 w-1/3 h-14 mx-2">
        <div className='mb-4 flex-col'>
          <textarea className="textarea textarea-bordered w-full h-auto border-solid border-2 border-gray-300 text-lg rounded-lg" placeholder="Bio"></textarea>
        </div>
        {/* <div className='flex-col'>
        <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
        <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
        </div> */}
      </div>
      <div class="flex-1 w-1/3 h-14">
        <div className='flex-col'>
          <div>
            <label htmlFor="add-imLateral">
              <img className="rounded-lg mb-4 " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
            </label>
          </div>
          <div>
            <label htmlFor="add-imLateral">
              <img className="rounded-lg mb-4 " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
            </label>
          </div>
          <div>
            <label htmlFor="add-imLateral">
              <img className="rounded-lg mb-4 " src="https://i.ibb.co/Y28ws3Z/Add-lateral.png" alt="" />
            </label>
          </div>
        </div>
      </div>
    </div>

  );
}
