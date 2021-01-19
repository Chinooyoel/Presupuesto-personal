import React, { useContext } from 'react';
import operacionContext from '../../context/operacion/operacionContext';

const Operacion = () => {

    const {operacionSeleccionada, eliminarOperacion} = useContext(operacionContext);

    //si no existe la fecha, no hay ninguna tarea seleccionada
    if( !operacionSeleccionada ) return null;

    const { fecha, concepto, categoria, tipo, monto} = operacionSeleccionada;

    return ( 
        <div className={`${ operacionSeleccionada.tipo === 'INGRESO' ? "table-success" : "table-danger" } rounded p-3`}>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='text-left'>
                    <p className='mb-0'>{fecha}</p>
                    <h3 className='mb-0 h3'>{concepto}</h3>
                    <p className='mb-0'>{categoria}</p>
                    
                </div>
                <div className='text-center'>
                    <p className='mb-0'>{tipo}</p>
                    <p className='mb-0 h3'>${monto}</p>
                </div>
            </div>
            <div className='text-right my-2'>
                <button 
                    className='btn btn-primary mr-2' 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#collapseExample" 
                    aria-expanded="false" 
                    aria-controls="collapseExample"
                >MODIFICAR MONTO</button>
                <button 
                    className='btn btn-danger' 
                    onClick={() => eliminarOperacion(operacionSeleccionada)}
                >ELIMINAR</button>
            </div>
        </div>
    );
}
 
export default Operacion;