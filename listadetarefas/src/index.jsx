import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route, Routes} from "react-router-dom";

import PaginaIncial from './PaginaInicial.jsx';
import ListaDeTarefas from './ListaDeTarefas.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={PaginaIncial}/>
          <Route path='/listadetarefas' Component={ListaDeTarefas}/>
      </Routes >
    </BrowserRouter>
  </React.StrictMode>
);


