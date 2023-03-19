import { Route, Routes } from "react-router-dom"
import {Inicio} from "../Public/Inicio"
import { PanelAn } from "../Auth/pages/PanelAn"
import { PanelCo } from "../Auth/pages/PanelCo"
import { AddCom } from "../Auth/pages/AddCom"
import { AddAnu } from "../Auth/pages/AddAnu"
import { Registro } from "../components/Formularios/Registro"

export const Approuter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="inicio" element={ <Inicio /> }/>
            <Route path="panel" element={ <PanelAn /> }/>
            <Route path="comercios" element={ <PanelCo /> }/>
            <Route path="addcom" element={<AddCom/>}/>
            <Route path="addanu" element={<AddAnu/>}/>
            <Route path="registro" element={<Registro/>}/>
        </Routes>
    </>
  )
}
