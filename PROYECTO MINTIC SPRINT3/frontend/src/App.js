import react from 'react';
import Menu from './Components/Menu';

import InicioSesion from './Components/InicioSesion';
import './App.css';

import { Router, Switch, Route } from 'react-router-dom';
import MaestroProducto from './Components/MaestroProductos';
import { createBrowserHistory } from 'history';


function App(){
    return (
<Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/inicioSesion" component={InicioSesion} />
        <Route path="/productos" component={MaestroProducto} />
      </Switch>
    </Router>
          
    )
}

export default App;
