import { Route, Routes } from "react-router-dom"
import {Inicio} from "../Public/Inicio"
import { PanelAn } from "../Auth/PanelAn"
import Errores from "../Errores/Errores"


export const Approuter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="inicio" element={ <Inicio /> }/>
            <Route path="panel" element={ <PanelAn /> }/>
            <Route path="errores" element={ <Errores /> }/>

        </Routes>
    </>
  )
}
