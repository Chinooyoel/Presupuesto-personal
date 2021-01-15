import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RutaPrivada = ({component: Component, ...props}) => {
    let autenticado = false;
    return ( 
        <Route { ...props } render={props => autenticado ?
            ( <Redirect to='/login' /> ) : ( <Component {...props} />)
        }
        />
     );
}
 
export default RutaPrivada;