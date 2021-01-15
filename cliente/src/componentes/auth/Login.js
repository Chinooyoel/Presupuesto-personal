import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alerta/alertaContext';

const Login = () => {

    const { alerta, mostrarAlerta } = useContext(alertaContext);

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const manejarCambios = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const validarUsuario = e => {
        e.preventDefault();


        if( usuario.email.trim() === '' || usuario.password.trim() === ''){
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
                <div className='col-12 col-md-8 col-lg-5 col-xl-3 bg-light rounded'>
                    <form className='my-5 mx-2' onSubmit={validarUsuario}>
                        <h3 className='text-center text-primary mb-4'>Iniciar sesion</h3>
                        { !alerta ? null : (<p className={alerta.clase}>{alerta.mensaje}</p>)}
                        <div className='form-group row'>
                            <label className='col-3' htmlFor='email'>Email</label>
                            <div className='col-9'>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    id='email' 
                                    name='email' 
                                    placeholder='Email' 
                                    // required 
                                    onChange={manejarCambios}
                                    value={usuario.email}
                                    />
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
                                    // required 
                                    onChange={manejarCambios}
                                    value={usuario.password}
                                    />
                            </div>    
                        </div>
                        <button type='submit' className='w-100 btn btn-primary my-3'>Iniciar sesion</button>
                        <Link to={'/registrarse'}>Registrarse</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;