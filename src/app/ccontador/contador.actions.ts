import { Action } from '@ngrx/store';
import { Reset } from '@ngrx/store-devtools/src/actions';

export const incrementar = '[contador] Incrementar';
export const decrementar = '[contador] Decrementar';
export const multiplicar = '[contador] Multiplicar';
export const dividir = '[contador] Dividir';
export const reset = '[contador] Reset';


export class IncrementarAction implements Action {
    readonly type = incrementar;
}

export class DecrementarAction implements Action {
    readonly type = decrementar;
}

export class ResetAction implements Action {
    readonly type = reset;
}

export class MultiplicarAction implements Action {
    readonly type = multiplicar;

    constructor(public payload: number) {}
}

export class DividirAction implements Action {
    readonly type = dividir;

    constructor(public payload: number) {}
}

export type actions = IncrementarAction | DecrementarAction | ResetAction| MultiplicarAction | DividirAction;
