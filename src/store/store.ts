import { configureStore, type Reducer, type UnknownAction } from '@reduxjs/toolkit';
import uiReducer, { type UiState } from './ui-slice';

interface RootReducerState {
    ui: UiState;
}

const rootReducer: Reducer<RootReducerState, UnknownAction> = (state, action) => {
    const ui = uiReducer(state?.ui, action);
    return state && ui === state.ui ? state : { ui };
};

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
