import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosintance"

const initialState ={
    JobData:[]
}

export const getAllJobs = createAsyncThunk("/course/get", async ()=>{
    try {
        const response = axiosInstance.get("/jobs");
        toast.promise(response, {
            loading:"loading Jobs..",
            success:"Jobs loaded sucessfully",
            error:"Failed to get the Jobs",
        })
        return (await response).data.jobs;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const JobSlice=createSlice({
    name:"jobs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllJobs.fulfilled, (state, action)=>{
            if(action.payload){
                state.JobData=[...action.payload]
            }
        })
    }
})
export default JobSlice.reducer