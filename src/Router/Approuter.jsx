import { Route, Routes } from "react-router-dom"
import {Inicio} from "../Public/Inicio"
import { PanelAn } from "../Auth/PanelAn"
import Errores from "../Errores/Errores"
import Si from "../Si/Si"


export const Approuter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="inicio" element={ <Inicio /> }/>
            <Route path="panel" element={ <PanelAn /> }/>
            <Route path="errores" element={ <Errores /> }/>
            <Route path="si" element={ <Si /> }/>

        </Routes>
    </>
  )
}
