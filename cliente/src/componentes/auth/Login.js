import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className='container-fluid bg-azul'>
            <div className='row vh-100 justify-content-center align-items-center'>
                <div className='col-12 col-md-8 col-lg-5 col-xl-3 bg-light rounded'>
                    <form className='my-5 mx-2'>
                        <h3 className='text-center text-primary mb-4'>Iniciar sesion</h3>
                        <div className='form-group row'>
                            <label className='col-3' htmlFor='email'>Email</label>
                            <div className='col-9'>
                                <input type='email' className='form-control' id='email' name='email' placeholder='Email'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label className='col-3' htmlFor='password'>Password</label>
                            <div className='col-9'>
                                <input type='password' className='form-control' id='password' name='password' placeholder='Password'/>
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