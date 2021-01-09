import React from 'react';


const Listado = () => {
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
                        <tr className='table-success'>
                            <td>02/03/2020</td>
                            <td>2 kg de tomate</td>
                            <td className='d-none d-md-table-cell'>Comida</td>
                            <td className='d-none d-md-table-cell'>Ingreso</td>
                            <td>$110.00</td>
                        </tr>
                        <tr className='table-success'>
                            <td>02/03/2020</td>
                            <td>2 kg de tomate</td>
                            <td className='d-none d-md-table-cell'>Comida</td>
                            <td className='d-none d-md-table-cell'>Ingreso</td>
                            <td>$110.00</td>
                        </tr>
                        <tr className='table-danger'>
                            <td>02/03/2020</td>
                            <td>2 kg de tomate</td>
                            <td className='d-none d-md-table-cell'>Comida</td>
                            <td className='d-none d-md-table-cell'>Engreso</td>
                            <td>$110.00</td>
                        </tr>
                        <tr className='table-success'>
                            <td>02/03/2020</td>
                            <td>2 kg de tomate</td>
                            <td className='d-none d-md-table-cell'>Comida</td>
                            <td className='d-none d-md-table-cell'>Ingreso</td>
                            <td>$110.00</td>
                        </tr>
                    </tbody>
                </table>
                
    );
}
 
export default Listado;