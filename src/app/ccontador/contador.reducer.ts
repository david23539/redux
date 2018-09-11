
// import { incrementar, decrementar, multiplicar, actions, dividir, reset } from './contador.actions';
import * as fromContador from './contador.actions';
export function contadorReducer(state: number = 10, action: fromContador.actions) {

    switch (action.type) {
        case fromContador.incrementar:
            return state + 1;

        case fromContador.decrementar:
            return state - 1;

        case fromContador.multiplicar:
            return state * action.payload;

        case fromContador.dividir:
            return state / action.payload;

        case fromContador.reset:
            return state  = 0;
        default:
            return state;
    }
}
