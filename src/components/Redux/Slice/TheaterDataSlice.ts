import { createSlice } from "@reduxjs/toolkit";
import { TheaterData } from "../../Data/TheaterData";
import { showTheaterData } from "../Thunk/TheaterDataThunk";

export interface InitialState{
    theaterData: TheaterData[],
    theaterloading: boolean,
    error: String,
}

export const TheaterDataSlice=createSlice({
    name:"schedule",
    initialState:{
        theaterData:[],
         theaterloading: false,
        error: "",
    } as InitialState,
    reducers:{
        showAllTheaterData:(state,action)=>{
            console.log("sate moviedata TheaterData",state.theaterData)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(showTheaterData.pending, (state) => {
            state.theaterloading = true;
        })
        // showTheaterData from thunk
        .addCase(showTheaterData.fulfilled, (state, action) => {
            state.theaterloading = false;
            state.theaterData = action.payload;
        })
        .addCase(showTheaterData.rejected, (state, action) => {
            state.theaterloading = false;
            state.error = action.payload as string;
        })
    }
})


export const {showAllTheaterData} = TheaterDataSlice.actions;
export default TheaterDataSlice.reducer;