import React, { Fragment, useEffect, useContext, useState } from 'react';
import Navbar from '../componentes/layout/Navbar';
import Footer from '../componentes/layout/Footer';
import Listado from '../componentes/operacion/Listado';
import Operacion from '../componentes/operacion/Operacion';
import operacionContext from '../context/operacion/operacionContext';

const ListadoVista = () => {

    const {operaciones, categorias, obtenerOperaciones, obtenerCategorias} = useContext(operacionContext);

    //cargue las operaciones y las categorias cuando cargue el componente
    useEffect(() => {
        obtenerOperaciones();
        obtenerCategorias();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const buscarPorCategoria = e => {
        e.preventDefault();

        //si no eligio ninguna categoria, traer todas
        if( categoria === "" ){
            obtenerOperaciones();
            return
        }

        obtenerOperaciones(categoria);        
    }

    const [categoria, cambiarCategoria] = useState('');

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
                        <form 
                            className='form-inline justify-content-center my-2'
                            onSubmit={buscarPorCategoria}
                        >
                            <label htmlFor='categoria' className='mr-2'>Filtrar por categoria: </label>
                            <select 
                                className="form-control" 
                                id='categoria' 
                                name='categoria'
                                value={categoria}
                                onChange={e => cambiarCategoria(e.target.value)}
                            >
                                <option value=''>-- TODAS --</option>
                                {categorias.map( (categoria, index) => (
                                    <option value={categoria.nombre} key={index}>{categoria.nombre}</option>
                                ))}
                            </select>
                            <button className='btn btn-primary mt-2 ml-sm-2 mt-sm-0' type='submit'>Filtrar</button>
                        </form>
                        <Listado operaciones={operaciones}/>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
     );
}
 
export default ListadoVista;