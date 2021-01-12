import React, { Fragment, useEffect, useContext } from 'react';
import Navbar from '../componentes/layout/Navbar';
import Footer from '../componentes/layout/Footer';
import Listado from '../componentes/operacion/Listado';
import Operacion from '../componentes/operacion/Operacion';
import operacionContext from '../context/operacion/operacionContext';

const ListadoVista = () => {

    const {operaciones, obtenerOperaciones} = useContext(operacionContext);

    //cargue las operaciones cuando cargue el componente
    useEffect(() => {
        obtenerOperaciones();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return ( 
        <Fragment>
            <Navbar />
            <main className='container'>
                <div className='row'>
                    <div className='col-12 text-center scrollUp'>
                        <h3 className='my-2 text-primary'>Operaciones</h3>
                        <p>Seleccione un proyecto para modificarlo o eliminarlo</p>
                        <div className='justify-content-center d-flex'>
                            <Operacion />
                        </div>
                        <div className='form-inline justify-content-center my-2'>
                            <label htmlFor='categoria' className='mr-2'>Filtrar por categoria: </label>
                            <select className="form-control" id='categoria' name='categoria'>
                                <option value=''>-- Seleccione una categoria --</option>
                                <option value='comida'>Comida</option>
                            </select>
                        </div>
                        <Listado operaciones={operaciones}/>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
     );
}
 
export default ListadoVista;