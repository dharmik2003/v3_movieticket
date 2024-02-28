// import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// import { LoginState } from './../../Auth/Dependency';

// const initialState: LoginState = {
//   phoneNumber: '',
//   password: '',
// };

// const LoginSlice=createSlice({
//     name:"login",
//     initialState,
//     reducers:{
//         setPhonenumber:(state,action)=>{
//             console.log('phone number:', action.payload);
//             state.phoneNumber=action.payload;
//             localStorage.setItem("phoneNumber", action.payload);
//         },
//         setPassword:(state,action)=>{
//             console.log('Password:', action.payload);
//             state.password=action.payload;
//             localStorage.setItem("password", action.payload);
//         },
        
//     }
// })

// export const {setPhonenumber,setPassword}=LoginSlice.actions
// export default LoginSlice.reducer;




/* store locally --------------------------------- */

// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { LoginState } from './../../Auth/Dependency';

// const initialState: LoginState = {
//   phoneNumber: localStorage.getItem("phoneNumber") || 'not data', 
//   password: localStorage.getItem("password") || 'not data',
//   loginState: localStorage.getItem("phoneNumber") && localStorage.getItem("password") ? true : false // Check if both phoneNumber and password are present
// };

// const LoginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     setPhonenumber: (state, action: PayloadAction<string>) => {
//       console.log('phone number:', action.payload);
//       state.phoneNumber = action.payload;
//       localStorage.setItem("phoneNumber", action.payload);
//       state.loginState = action.payload && state.password ? true : false; 
//     },
//     setPassword: (state, action: PayloadAction<string>) => {
//       console.log('Password:', action.payload);
//       state.password = action.payload;
//       localStorage.setItem("password", action.payload);
//       state.loginState = state.phoneNumber && action.payload ? true : false; 
//     },
//     setLogin: (state, action: PayloadAction<boolean>) => {
//       state.loginState = action.payload; 
//       localStorage.setItem("loginState",action.payload.toString());
//     }
//   }
// });

// export const { setPhonenumber, setPassword, setLogin } = LoginSlice.actions;
// export default LoginSlice.reducer;





/* persis try ------------------------------ */


import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define the initial state interface
export interface LoginState {
  phoneNumber: string;
  password: string;
  loginState: boolean;
}

// Define the initial state
const initialState: LoginState = {
  phoneNumber: '',
  password: '',
  loginState: false
};

// Create the slice
const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPhonenumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoginState: (state, action: PayloadAction<boolean>) => {
      state.loginState = action.payload;
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.loginState = action.payload;
    }
  }
});

// Export the actions
export const { setPhonenumber, setPassword, setLoginState, setLogin } = LoginSlice.actions;

// Export the reducer
export default LoginSlice.reducer;
