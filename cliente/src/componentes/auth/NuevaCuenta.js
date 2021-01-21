import React, {useState, useContext} from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
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
        <Container fluid className='bg-azul'>
            <Row className='vh-100 justify-content-center align-items-center'>
                <Col xs={12} sm={8} lg={5} xl={3} className='bg-light rounded'>
                    <Form.Group className='my-5 mx-2' onSubmit={validarUsuario}>
                        <h3 className='text-center text-primary mb-4'>Registrarse</h3>

                        { alerta ? (<Alert variant={alerta.clase}>{alerta.mensaje}</Alert>) : null}

                        <Row className='form-group'>
                            <Col xs={3} as="label" htmlFor='nombre'>Nombre</Col>
                            <Col xs={9}>
                                <Form.Control
                                    type='text' 
                                    className='form-control' 
                                    id='nombre' 
                                    name='nombre' 
                                    placeholder='Nombre' 
                                    onChange={manejarCambios} 
                                    value={usuario.nombre} 
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col xs={3} as="label" htmlFor='email'>Email</Col>
                            <Col xs={9}>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    id='email' 
                                    name='email' 
                                    placeholder='Email' 
                                    onChange={manejarCambios} 
                                    value={usuario.email} 
                                    required/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col xs={3} as="label" htmlFor='password'>Password</Col>
                            <Col xs={9}>
                                <Form.Control
                                    type='password' 
                                    className='form-control' 
                                    id='password' 
                                    name='password' 
                                    placeholder='Password' 
                                    onChange={manejarCambios} 
                                    value={usuario.password} 
                                    required
                                />
                            </Col>    
                        </Row>
                        <Button variant="primary" type='submit' className='w-100 my-3'>Registrarse</Button>
                        <Link to={'/login'}>Volver</Link>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
     );
}
 
export default NuevaCuenta;