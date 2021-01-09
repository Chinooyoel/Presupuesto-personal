import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './componentes/auth/Login';
import NuevaCuenta from './componentes/auth/NuevaCuenta';
import Home from './componentes/layout/Home';
import ListadoHome from './componentes/layout/ListadoHome';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/listado' component={ListadoHome}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/registrarse' component={NuevaCuenta}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
