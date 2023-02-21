import * as React from 'react';

export const Negocios = () => {
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
      <div class="flex-1 w-1/3 h-14 mx-2">
        <div className='mb-4 flex-col'>
          <textarea className="textarea textarea-bordered w-full h-36 border-solid border-2 border-gray-300 text-lg rounded-lg" placeholder="Bio"></textarea>
        </div>
        <div>
          <div class="flex flex-col ...">
            <div>
              <div class="flex flex-row...">
                <div className='mx-2'>Dias</div>
                <div className='mx-2'>Apertura</div>
                <div className='mx-2'>Cierre</div>
              </div>
            </div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
          </div>
          {/* <table class="w-2 flex-1">
          <thead>
            <tr>
              <th>Días</th>
              <th></th>
              <th>Apertura</th>
              <th>Cierre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-lg rounded-lg'>Lunes</td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
            <tr>
              <td className='text-lg rounded-lg'>Martes</td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
            <tr>
              <td className='text-lg rounded-lg'>Miercoles </td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
            <tr>
              <td className='text-lg rounded-lg'>Jueves </td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
            <tr>
              <td className='text-lg rounded-lg'>Viernes </td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
            <tr>
              <td className='text-lg rounded-lg'>Sabado </td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
            <tr>
              <td className='text-lg rounded-lg'>Domingo </td>
              <td> <input type="checkbox" value="" id='' className='ml-2 mr-2'/> </td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
              <td> <input className='border-solid border-2 border-gray-300' type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
            </tr>
          </tbody>
        </table>   */}
        </div>
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

