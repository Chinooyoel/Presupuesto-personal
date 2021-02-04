import { CERRAR_SESION, INICIAR_SESION, LOGUEO_ERROR } from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case INICIAR_SESION:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                autenticado: true,
                msg: null,
                token: action.payload
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                autenticado: false,
                msg: null,
                token: null
            }
        case LOGUEO_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default: 
            return state;
    }
}  