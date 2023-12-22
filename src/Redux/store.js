import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducres from "./Slices/AuthSlices.js";
import JobSliceReducres from "./Slices/JobSlice.js";

const store = configureStore({
    reducer:{
        auth:AuthSliceReducres,
        job:JobSliceReducres,
    },
    devTools: true
})
export default store;