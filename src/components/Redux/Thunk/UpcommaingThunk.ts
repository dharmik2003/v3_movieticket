import { createAsyncThunk } from "@reduxjs/toolkit";
import {UpcomingMovies} from "../../Data/UpcomingMovies";

export const showUpcomaingData = createAsyncThunk(
    'showUpcomaingData',
    async (args, {rejectWithValue}) => {
        try{
            const upcommaingresult = UpcomingMovies;
            console.log("Upcoming movie ",upcommaingresult)
            return upcommaingresult;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)