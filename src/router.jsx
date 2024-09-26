import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/app'
import Erro from './pages/erro'

export default function Navegação(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />

                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}