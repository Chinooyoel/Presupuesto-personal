import React, {useState, useContext} from 'react';
import alertaContext from '../../context/alerta/alertaContext';

const NuevaOperacion = () => {

  const [operacion, setOperacion] = useState({
    concepto: '',
    categoria: '',
    fecha: '',
    tipo: '',
    monto: ''
  });

  const {alerta, mostrarAlerta} = useContext(alertaContext);

  const manejarCambios = e => {
      setOperacion({
          ...operacion,
          [e.target.name]: e.target.value
      })
  }


  const validarOperacion = e => {
      e.preventDefault();

      if( operacion.concepto.trim() === '' || operacion.categoria.trim() === '' || operacion.fecha.trim() === '' || operacion.tipo.trim() === '' || operacion.monto.trim() === ''){
          mostrarAlerta({
              msj: 'Todos los campos son obligatorios',
              error: true
          })
          return;
      }

}

    return ( 
        <div className="modal fade" id="nuevaOperacion" tabIndex="-1" aria-labelledby="nuevaOperacion" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nueva operacion</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                {alerta ? (<p className={alerta.clase}>{alerta.mensaje}</p>) : null}

                <form id='formOperacion'>
                  <div className="form-group">
                    <label htmlFor="concepto" className="col-form-label" >Concepto</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="concepto" 
                      name='concepto' 
                      placeholder='Concepto' 
                      onChange={manejarCambios} 
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categoria" className="col-form-label">Categoria</label>
                    <select 
                      className='form-control'
                      name='categoria' 
                      id='categoria' 
                      onChange={manejarCambios} 
                      required
                    >
                      <option value=''>-- Seleccione la categoria --</option>
                      <option value='comida'>Comida</option>
                    </select>
                  </div>
                  <div className="form-group row">
                    <div className='col-12 col-md-6'>
                        <label htmlFor="fecha" className="col-form-label">Fecha</label>
                        <input 
                          type='date' 
                          className="form-control" 
                          id='fecha' 
                          name='fecha' 
                          onChange={manejarCambios} 
                          required
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="monto" className="col-form-label">Monto</label>
                        <input 
                          type='number' 
                          className="form-control" 
                          name='monto' 
                          id="monto" 
                          onChange={manejarCambios} 
                          required
                        />
                    </div>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <div className="form-check form-check-inline">
                        <input 
                          type='radio' 
                          name='tipo' 
                          id='ingreso' 
                          value='ingreso' 
                          className='form-check-input' 
                          onChange={manejarCambios} 
                          required
                        />
                        <label htmlFor="ingreso" className="form-check-label">Ingreso</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input 
                          type='radio' 
                          name='tipo' 
                          id='egreso' 
                          value='egreso' 
                          className='form-check-input' 
                          onChange={manejarCambios} 
                          required
                        />
                        <label htmlFor="egreso" className="form-check-label">Engreso</label>
                    </div>
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" form='formOperacion' onClick={validarOperacion}>Crear</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default NuevaOperacion;