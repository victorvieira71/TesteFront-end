import react from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Main from './pages/Main'
import Cadastro from './pages/Cadastro'

function Troca(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Main} />
                <Route exact path="/Cadastro" component={Cadastro} />
            </Routes>
        </BrowserRouter>
    )

};

export default Troca;