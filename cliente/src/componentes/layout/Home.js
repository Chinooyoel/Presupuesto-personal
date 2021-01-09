import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Listado from '../operacion/Listado';
import NuevaOperacion from '../operacion/NuevaOperacion';
import Footer from './Footer';

const Home = () => {
    return ( 
        <Fragment>
            <Navbar/>
            <NuevaOperacion/>
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-12 text-center mb-2'>
                        <div className='justify-content-end d-flex mb-3'>
                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#nuevaOperacion">Agregar Operacion</button>
                        </div>
                        <h3 className='text-primary'>Balance Actual</h3>
                        <p className='display-4'>$20.00</p>
                    </div>
                    <div className='col-12'>
                        <Listado />
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default Home;