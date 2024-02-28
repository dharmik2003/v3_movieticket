import { createAsyncThunk } from "@reduxjs/toolkit";
import {theaterData} from "../../Data/TheaterData";

export const showTheaterData = createAsyncThunk(
    'showTheaterData',
    async (args, {rejectWithValue}) => {
        try{
            const theaterresult = theaterData;
            console.log("bhai theator thunk maje maro: ",theaterresult)
            return theaterresult;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)