import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
//Route renderiza o componente UI.
//Routes é o antigo 'switch'
import Contato from "./paginas/SobreNos";
import Home from './paginas/Main';
import Login from './paginas/PaginaLogin';
import Projetos from './paginas/PaginaProjetos'
//O antigo component foi trocado por element no react-router-dom v6
function Rotear(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/contato" element={<Contato/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/projetos" element={<Projetos/>}/>
            </Routes>
        </Router>
    );
};

export default Rotear;