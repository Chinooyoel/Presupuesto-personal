import React from 'react';

const Operacion = () => {
    return ( 
        <div className='table-success rounded p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='text-left'>
                    <p className='mb-0'>02/03/02</p>
                    <h3 className='mb-0 h3'>Celular</h3>
                    <p className='mb-0'>Seguro</p>
                    
                </div>
                <div className='text-center'>
                    <p className='mb-0'>Egreso</p>
                    <p className='mb-0 h3'>$600</p>
                </div>
            </div>
            <div className='text-right my-2'>
                <button className='btn btn-primary mr-2' type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">MODIFICAR MONTO</button>
                <button className='btn btn-danger'>ELIMINAR</button>
            </div>
        </div>
    );
}
 
export default Operacion;