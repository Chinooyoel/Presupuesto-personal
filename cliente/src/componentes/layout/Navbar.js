import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-azul">
            <div className='container'>
                <Link to={'/'} className="h1 text-white">Presupuestar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0 text-center">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link text-white">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/listado'} className="nav-link text-white">Operaciones</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/listado'} className="nav-link text-white">Cuenta</Link>
                        </li>
                        <li className="nav-item">
                            <button className='btn btn-outline-light'>Cerrar sesion</button>
                        </li>
                    </ul>
                </div>   
            </div> 
        </nav>
     );
}
 
export default Navbar;