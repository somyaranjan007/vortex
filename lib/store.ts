import { configureStore } from "@reduxjs/toolkit";
import walletConnectReducer from "./features/walletConnect/walletConnectSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            walletConnect: walletConnectReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        })
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']