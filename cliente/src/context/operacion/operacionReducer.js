import { CREAROPERACION, ELIMINAROPERACION, OBTENER10OPERACIONES, OBTENERBALANCE, OBTENERCATEGORIAS, OBTENEROPERACIONES, SELECCIONAROPERACION } from "../../types";


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
                ultimasOperaciones: state.ultimasOperaciones.filter(operacion => operacion._id !== action.payload._id),
                operaciones: state.operaciones.filter(operacion => operacion._id !== action.payload._id),
                balance: ( action.payload.tipo === 'INGRESO') ? state.balance - action.payload.monto : state.balance + action.payload.monto,
                operacionSeleccionada: null,
            }
        case CREAROPERACION: 
            return{
                ...state,
                ultimasOperaciones: [action.payload, ...state.ultimasOperaciones]
            }
        case OBTENERBALANCE:
            return {
                ...state,
                balance: action.payload
            }
        case OBTENERCATEGORIAS:
            return{
                ...state,
                categorias: action.payload
            }
        default:
            return state;
    }
}