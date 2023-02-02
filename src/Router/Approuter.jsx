import { Route, Routes } from "react-router-dom"
import {Inicio} from "../Public/Inicio"
import { PanelAn } from "../Auth/PanelAn"
import { PanelCo } from "../Auth/PanelCo"
import { AddCom } from "../Auth/AddCom"
import { AddAnu } from "../Auth/AddAnu"

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
        </Routes>
    </>
  )
}
