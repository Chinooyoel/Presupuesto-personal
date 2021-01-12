import React, { Fragment, useEffect, useContext } from 'react';
import Navbar from '../componentes/layout/Navbar';
import Listado from '../componentes/operacion/Listado';
import NuevaOperacion from '../componentes/operacion/NuevaOperacion';
import Footer from '../componentes/layout/Footer';
import operacionContext from '../context/operacion/operacionContext';


const HomeVista = () => {

    const { ultimasOperaciones, balance, obtenerUltimasOperaciones, obtenerBalance } = useContext(operacionContext)

    //para cargar las ultimas 10 operaciones y el balance de las operaciones, cuando cargue la pagina
    useEffect(() => {
        obtenerUltimasOperaciones();    
        obtenerBalance();

    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return ( 
        <Fragment>
            <Navbar/>
            <NuevaOperacion/>
            <main className='container py-3 scrollUp'>
                <div className='row'>
                    <div className='col-12 text-center mb-2'>
                        <div className='justify-content-end d-flex mb-3'>
                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#nuevaOperacion">Agregar Operacion</button>
                        </div>
                        <h3 className='text-primary'>Balance Actual</h3>
                        <p className='display-4 animate__animated animate__tada'>${balance}.00</p>
                    </div>
                    <div className='col-12'>
                        <Listado operaciones={ultimasOperaciones}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>
     );
}
 
export default HomeVista;