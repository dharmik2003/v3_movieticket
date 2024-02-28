import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpState } from './../../Auth/Dependency';

const initialState: SignUpState = {
  name: "",
  phoneNumber: '',
  email: '',
  password: '',
  SignupState: false,
};

const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setname: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhonenumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setemail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setsignup: (state, action: PayloadAction<boolean>) => {
      state.SignupState = action.payload;
    }
  }
});

export const { setname, setPhonenumber, setemail, setPassword, setsignup } = SignupSlice.actions;
export default SignupSlice.reducer;















// import { createSlice } from '@reduxjs/toolkit';
// import { SignUpState } from './../../Auth/Dependency';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 

// const initialState: SignUpState = {
//     name:"",
//     phoneNumber: '',
//     email:'',
//     password: '',
// };

// const signupSlice = createSlice({
//     name: "signup",
//     initialState,
//     reducers: {
//         setname: (state, action) => {
//             console.log('name:', action.payload);
//             state.name = action.payload;
//         },
//         setPhonenumber: (state, action) => {
//             console.log('phone number:', action.payload);
//             state.phoneNumber = action.payload;
//         },
//         setemail: (state, action) => {
//             console.log('email:', action.payload);
//             state.email = action.payload;
//         },
//         setPassword: (state, action) => {
//             console.log('Password:', action.payload);
//             state.password = action.payload;
//         },
//     }
// });

// export const { setname, setPhonenumber, setemail, setPassword } = signupSlice.actions;

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, signupSlice.reducer);

// export default persistedReducer;
