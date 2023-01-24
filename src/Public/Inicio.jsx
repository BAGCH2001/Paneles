import {Form} from "../components/Form"
import {XidooH} from "../components/XidooH"

export const Inicio = () => {
  return (
    <div className="container flex h-screen justify-center items-center">
      <div className="flex-1 w-40 h-14"></div>
      <div className="grow h-auto mr-0">
        <XidooH/>
      </div>
      <div className="grow auto mx-screen">
        <Form/>
      </div>
      <div className="flex-1 w-40 h-14"></div>
    </div>
  )
}

