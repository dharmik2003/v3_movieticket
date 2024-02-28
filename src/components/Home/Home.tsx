import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Poster from './Poster'
import Advertice from './Advertice'
import Admovie from './Admovie'
import SuggestedMovie from './SuggestedMovie'
import { RootState } from '../Redux/store/store';
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {




// display all login data-----------------

//  const { phoneNumber, password, loginState } = useSelector((state: RootState) => state.login);
//  const signupState = useSelector((state: RootState) => state.signup.SignupState);
//   useEffect(() => {
//     console.log("Login State:", loginState);
//     console.log("Phone Number:", phoneNumber);
//     console.log("Password:", password);

//   }, [loginState, phoneNumber, password]);


  //signup data

  const {name,phoneNumber,email,password,SignupState} = useSelector((state: RootState) =>state.sign);

  useEffect(() => {
    console.log('-name:',name );
    console.log('--phoneNumber:', phoneNumber);
    console.log('-email:', email);
    console.log('-password:', password);
    console.log('-SignupState:', SignupState);
  }, [name,phoneNumber,email,password, SignupState]);




  return (
    <div>
        {/* <Navbar loginstate={loginState} signupstate={signupState} /> */}
        <Navbar/> 
        <Poster/>
        <Advertice/>
        <Admovie/>
        <SuggestedMovie/>
        <Footer/>
    </div>
  )
}
export default Home







  // const { phoneNumber, password } = useSelector((state: RootState) => state.login);
  // const name = localStorage.getItem("name");
  // const phonenumber = localStorage.getItem("phoneNumber");
  // const passwordd = localStorage.getItem("password");
  // const email = localStorage.getItem("email");
  // console.log(phonenumber + " " + passwordd);