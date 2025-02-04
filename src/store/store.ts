import {hobbiesReducer, hobbiesSlice} from "../state/hobbiesSlice.ts";
import {AnyAction, configureStore, ThunkAction, ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";

export const store = configureStore({ reducer: {
    [hobbiesSlice.name]: hobbiesReducer,
    } })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

//@ts-expect-error

window.store = store;
