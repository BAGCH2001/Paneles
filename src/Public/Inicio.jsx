import { validateFormLogin } from "../components/modal/modals";

export const Inicio = () => {

  const check = (e) => {
    e.preventDefault();
    validateFormLogin()
  }

  return (
    <div className="container flex h-screen justify-center items-center">
      <div className="flex-1 w-40 h-14"></div>
      <div className="grow h-auto mr-0">
        <div className="w-auto  max-h-screen min-h-auto">
          <img
            className="w-auto h-52 mr-0"
            src="https://i.ibb.co/sK4fDQm/image-5.png"
            alt=""
          />
          <p className="p-2 text-lg">#ConectandoLaCiudad</p>
          <p className=" text-slate-400 text-auto">
            Da a concer tus negocios o manten informada a la comunidad con tus
            anuncios.
          </p>
        </div>
      </div>
      <div className="grow auto mx-screen">
        <form className="p-5 max-w-96 min-w-auto border-solid border-2 border-gray-300 rounded-lg shadow-lg">
          <div className="mb-5">
            <input
              id="correo"
              type="text"
              placeholder="Correo electronico"
              className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              id="contraseña"
              type="password"
              placeholder="Contraseña"
              className="border-2 w-full p-3 placeholder-gray-400 rounded-md"
            />
          </div>

          <input
            type="submit"
            className=" font-bold  bg-yellow-400 w-full p-2 mb-5 text-white rounded-lg hover:bg-yellow-500 cursor-pointer transition-all"
            value={"Iniciar sesión"}
            onClick={check}
          />
          <div className="text-amber-200 w-full text-center">
            <a href="">¿Olvidaste tu contraseña?</a>
            <hr />
          </div>

          <div className="grid place-content-center">
            <a 
            className="text-center font-bold bg-gray-300 w-44 p-2 mt-8 text-white rounded-lg hover: cursor-pointer transition-all"
            href="Registro">
              Crear cuenta
            </a>
          </div>
        </form>
      </div>
      <div className="flex-1 w-40 h-14"></div>
    </div>
  );
};
