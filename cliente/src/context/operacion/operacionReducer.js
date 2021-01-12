import { ELIMINAROPERACION, OBTENER10OPERACIONES, OBTENERBALANCE, OBTENEROPERACIONES, SELECCIONAROPERACION } from "../../types";


export default (state, action) => {
    switch (action.type){
        case OBTENER10OPERACIONES:
            return {
                ...state,
                ultimasOperaciones: action.payload
            }
        case OBTENEROPERACIONES:
            return {
                ...state,
                operaciones: action.payload
            }
        case SELECCIONAROPERACION:
            return {
                ...state,
                operacionSeleccionada: action.payload
            }
        case ELIMINAROPERACION:
            return {
                ...state,
                ultimasOperaciones: state.ultimasOperaciones.filter(operacion => operacion.idOperacion !== action.payload.idOperacion),
                operaciones: state.operaciones.filter(operacion => operacion.idOperacion !== action.payload.idOperacion),
                balance: ( action.payload.tipo === 'ingreso') ? state.balance - action.payload.monto : state.balance + action.payload.monto,
                operacionSeleccionada: null,
            }
        case OBTENERBALANCE:
            return {
                ...state,
                balance: action.payload
            }
        default:
            return state;
    }
}