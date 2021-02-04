import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../context/autenticacion/authContext';

const RutaPrivada = ({component: Component, ...props}) => {

    const { autenticado, usuarioAutenticado } = useContext(authContext);

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return ( 
        <Route { ...props } render={props => autenticado ?
            ( <Component {...props} />) : ( <Redirect to='/login' /> )
        }
        />
     );
}
 
export default RutaPrivada;