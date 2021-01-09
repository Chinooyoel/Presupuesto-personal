import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Listado from '../operacion/Listado';
import Operacion from '../operacion/Operacion';

const ListadoHome = () => {
    return ( 
        <Fragment>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h3 className='my-2 text-primary'>Operaciones</h3>
                        <p>Seleccione un proyecto para modificarlo o eliminarlo</p>
                        <div className='justify-content-center d-flex'>
                            <Operacion />
                        </div>
                        <div className='form-inline justify-content-center my-2'>
                            <label htmlFor='categoria' className='mr-2'>Filtrar por categoria: </label>
                            <select className="form-control" id='categoria' name='categoria'>
                                <option value='comida' className="form-control">Comida</option>
                            </select>
                        </div>
                        <Listado />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
     );
}
 
export default ListadoHome;