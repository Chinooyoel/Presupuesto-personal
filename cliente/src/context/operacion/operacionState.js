import React, { useReducer } from 'react';
import { ELIMINAROPERACION, OBTENER10OPERACIONES, OBTENERBALANCE, OBTENEROPERACIONES, SELECCIONAROPERACION } from '../../types';
import OperacionContext from './operacionContext';
import operacionReducer from './operacionReducer';

const OperacionState = props => {

    const initialState = ({
        ultimasOperaciones: [],
        operaciones: [],
        operacionSeleccionada: null,
        balance: 0
    });

    const [state, dispatch] = useReducer(operacionReducer, initialState);

    //obtener las 10 ultimas funciones registradas
    const obtenerUltimasOperaciones = async () => {
        //mandamos una solicitud GET
        const operaciones = [
            {
                idOperacion: 1,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'egreso',
                monto: 200
            },
            {
                idOperacion: 2,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 520
            },
            {
                idOperacion: 3,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 2220
            },            {
                idOperacion: 4,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 4100
            }
        ]


        dispatch({
            type: OBTENER10OPERACIONES,
            payload: operaciones
        })
    }

    //obtener todas las operaciones
    const obtenerOperaciones = async () => {
        const operaciones = [
            {
                idOperacion: 1,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'egreso',
                monto: 200
            },
            {
                idOperacion: 2,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'egreso',
                monto: 520
            },
            {
                idOperacion: 3,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 2220
            },            {
                idOperacion: 4,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 4100
            },
            {
                idOperacion: 5,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'egreso',
                monto: 200
            },
            {
                idOperacion: 6,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 520
            },
            {
                idOperacion: 7,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'ingreso',
                monto: 2220
            },            {
                idOperacion: 8,
                fecha: '09/09/2002', 
                concepto: 'Abono celular',
                categoria: 'seguro',
                tipo: 'egreso',
                monto: 4100
            }
        ]

        dispatch({
            type: OBTENEROPERACIONES,
            payload: operaciones
        })
    }

    //seleccionar una operacion para que se pueda modificar o eliminar
    const seleccionarOperacion = operacion => {
        dispatch({
            type: SELECCIONAROPERACION,
            payload: operacion
        })
    }


    //eliminar una operacion
    const eliminarOperacion = operacion => {
        dispatch({
            type: ELIMINAROPERACION,
            payload: operacion
        })
    }

    //obtener el balance de las operaciones
    const obtenerBalance = () => {
        let balance = 100;

        dispatch({
            type: OBTENERBALANCE,
            payload: balance
        })
    }

    return(
        <OperacionContext.Provider
            value={{
                ultimasOperaciones: state.ultimasOperaciones,
                operaciones: state.operaciones,
                operacionSeleccionada: state.operacionSeleccionada,
                balance: state.balance,
                obtenerUltimasOperaciones,
                obtenerOperaciones,
                seleccionarOperacion,
                eliminarOperacion,
                obtenerBalance
            }}
        >
            {props.children}
        </OperacionContext.Provider>
    )
}


export default OperacionState;