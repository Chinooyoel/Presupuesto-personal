import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alerta/alertaContext';

const NuevaCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        passowrd: ''
    });

    const {alerta, mostrarAlerta} = useContext(alertaContext);

    const manejarCambios = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    
    const validarUsuario = e => {
        e.preventDefault();


        if( usuario.email.trim() === '' || usuario.password.trim() === '' || usuario.nombre.trim() === ''){
            mostrarAlerta({
                msj: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }

    }
    return ( 
        <div className='container-fluid bg-azul'>
            <div className='row vh-100 justify-content-center align-items-center'>
                <div className='col-12 col-sm-8 col-lg-5 col-xl-3 bg-light rounded'>
                    <form className='my-5 mx-2' onSubmit={validarUsuario}>
                        <h3 className='text-center text-primary mb-4'>Registrarse</h3>

                        { alerta ? <p className={alerta.clase}>{alerta.mensaje}</p> : null}

                        <div className='form-group row'>
                            <label className='col-3' htmlFor='nombre'>Nombre</label>
                            <div className='col-9'>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    id='nombre' 
                                    name='nombre' 
                                    placeholder='Nombre' 
                                    onChange={manejarCambios} 
                                    value={usuario.nombre} 
                                    required
                                />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label className='col-3' htmlFor='email'>Email</label>
                            <div className='col-9'>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    id='email' 
                                    name='email' 
                                    placeholder='Email' 
                                    onChange={manejarCambios} 
                                    value={usuario.email} 
                                    required/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label className='col-3' htmlFor='password'>Password</label>
                            <div className='col-9'>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    id='password' 
                                    name='password' 
                                    placeholder='Password' 
                                    onChange={manejarCambios} 
                                    value={usuario.password} 
                                    required
                                />
                            </div>    
                        </div>
                        <button type='submit' className='w-100 btn btn-primary my-3'>Registrarse</button>
                        <Link to={'/login'}>Volver</Link>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;