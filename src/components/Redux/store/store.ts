// import { configureStore } from "@reduxjs/toolkit";
// import LoginSlice from "../Slice/LoginSlice";
// import SignupSlice from "../Slice/SignupSlice";

// export const store=configureStore({

//     reducer:{
//         login:LoginSlice,
//         sign:SignupSlice
//     }
// })

// export type RootState = ReturnType<typeof store.getState>;

// export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginSlice from '../Slice/LoginSlice';
import SignupSlice from '../Slice/SignupSlice';
import MovieSlice from '../Slice/MovieSlice';
import  TheaterDataSlice  from '../Slice/TheaterDataSlice';
import UpcommaingSlice from '../Slice/UpcommaingSlice';
import MovieBookingSlice from '../Slice/MovieBookingSlice';
import MyTicketSlice from '../Slice/MyTicketSlice';

const rootReducer = combineReducers({
  login: LoginSlice,
  sign: SignupSlice,
  movies: MovieSlice,
  theator: TheaterDataSlice,
  upcomingMovie: UpcommaingSlice,
  movieBooking:MovieBookingSlice,
  myTicket:MyTicketSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;






