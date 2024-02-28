import { createAsyncThunk } from "@reduxjs/toolkit";
import movies from "../../Data/poster_movie";

export const showMoviesData = createAsyncThunk(
    'showMoviesData',
    async (args, {rejectWithValue}) => {
        try{
            const movieResult = movies;
            console.log("eiufehorfrehg thunk ",movieResult)
            return movieResult;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)