import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './pages/dashboard'
import ContaAgua from './pages/contas_agua';
import ContaEnergia from './pages/contas_energia';
import Concessionaria from './pages/concessionaria';
import ContratoAgua from './pages/contrato_agua';
import ContratoEnergia from './pages/contrato_energia';
import Unidade from './pages/unidade';
import QuadroUnidades from './pages/quadro_unidades';
import QuadroEnergia from './pages/quadro_energia';


function Main() {
  return (
    <div className="Main">
        <Router>
          <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/contas_agua" element={<ContaAgua />} />
              <Route path="/contas_energia" element={<ContaEnergia />}/>
              <Route path="/concessionaria" element={<Concessionaria />}/>
              <Route path="/contrato_agua" element={<ContratoAgua />}/>
              <Route path="/contrato_energia" element={<ContratoEnergia />}/>
              <Route path="/unidade" element={<Unidade />}/>
              <Route path="/quadro_unidades" element={<QuadroUnidades/>}/>
              <Route path="/quadro_energia" element={<QuadroEnergia/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default Main;
