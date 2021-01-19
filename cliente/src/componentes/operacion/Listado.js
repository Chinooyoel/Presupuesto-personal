import React, { useContext } from 'react';
import operacionContext from '../../context/operacion/operacionContext';


const Listado = ({operaciones}) => {

    const {seleccionarOperacion} = useContext(operacionContext);

    if( operaciones.length === 0 ) {
        return <p className='text-center'>-- No hay operaciones registradas --</p>
    }

    const elegirOperacion = operacion => {
        //cambiamos el state
        seleccionarOperacion(operacion)

        //scroliamos para arriba de la pagina
        const scrollUp = document.querySelector('.scrollUp');
        scrollUp.scrollIntoView({ behavior: 'smooth' })
    }

    return ( 
                <table className='table table-hover w-100 text-center'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Fecha</th>
                            <th>Concepto</th>
                            <th className='d-none d-md-table-cell'>Categoria</th>
                            <th className='d-none d-md-table-cell'>Tipo</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operaciones.map( operacion => (
                            <tr 
                                className={`${ operacion.tipo === 'INGRESO' ? "table-success" : "table-danger" } pointer`} 
                                onClick={() => elegirOperacion(operacion)}
                                key={operacion._id}
                            >
                                <td>{operacion.fecha}</td>
                                <td>{operacion.concepto}</td>
                                <td className='d-none d-md-table-cell'>{operacion.categoria}</td>
                                <td className='d-none d-md-table-cell'>{operacion.tipo}</td>
                                <td>${operacion.monto}.00</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
    );
}
 
export default Listado;