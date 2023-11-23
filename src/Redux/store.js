import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducres from "./Slices/AuthSlices.js";

const store = configureStore({
    reducer:{
        auth:AuthSliceReducres
    },
    devTools: true
})
export default store;