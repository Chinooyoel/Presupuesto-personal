import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './componentes/auth/Login';
import NuevaCuenta from './componentes/auth/NuevaCuenta';
import HomeVista from './vistas/HomeVista';
import ListadoVista from './vistas/ListadoVista';
import AlertaState from './context/alerta/alertaState';
import OperacionState from './context/operacion/operacionState';
import RutaPrivada from './rutas/RutaPrivada';


function App() {
  return (
      <OperacionState>
        <AlertaState>
          <BrowserRouter>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/registrarse' component={NuevaCuenta}/>
              <RutaPrivada exact path='/' component={HomeVista}/>
              <RutaPrivada exact path='/listado' component={ListadoVista}/>
            </Switch>
          </BrowserRouter>
        </AlertaState>
      </OperacionState>
  );
}

export default App;
