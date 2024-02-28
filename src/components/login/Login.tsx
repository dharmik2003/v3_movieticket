// import React, { useState } from 'react'
// import PhoneInput from 'react-phone-input-2'
// import './Login.css'

// const Login = () => {
//   const[Login,setLogin]=useState({
//     phoneNumber:string,
//     password:string,
//   });


//   const handleChange=(e)=>{
//     const[name,password]=e.target;
//     setLogin((pre)=>{
//     }
//     )
//   }


//   return (
//     <div>
//       <div className='login-main-con'>
//         <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Picture.png?raw=true' className='img-bg' />
//         <div className='login-details'>
//           <div>
//               <div><h2>Masuk ke TIX ID</h2></div>
//               <div>
//                   <div>NOMOR HANDPHONE</div>
//                   <div className=''>
//                     <div>

//                       <div>+91</div>
//                       <input 
//                       country={'us'}
//                       inputProps={{require: true}}
//                       name="phoneNumber"
//                       value={phoneNumber}
//                       onChange={handleChange}
//                       placeholder='Masukkan Nomor Handphone' />
//                     </div>
//                     <div>
//                       <div>PASSWORD</div>
//                       <input 
//                       type='text'
//                       name='password'
//                       placeholder='Masukkan Input'
//                       /> 
//                     </div>
//                     <button>Masuk Sekarang</button>
//                     <p>Belum punya akun? </p>
//                     <button>Daftar Sekarang</button>
//                     <p>2021 TIX ID - PT Nusantara Elang Sejahtera.</p>
//                   </div>
                  
//               </div>
//           </div>

//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default Login


// import React, { useState, ChangeEvent } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import './Login.css';
// import { LoginState } from './../Auth/Dependency';
// import { RootState } from './../Redux/store/store';
// import { setPhonenumber, setPassword } from './../Redux/Slice/LoginSlice'; 
// import { useSelector,useDispatch } from 'react-redux';


// const Login = () => {

//    const dispatch = useDispatch();
//   const { phoneNumber, password } = useSelector((state: RootState) => state.login);



//   const [login, setLogin] = useState<LoginState>({
//     phoneNumber: "",
//     password: ""
//   });

//   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLogin(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }


//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setPhonenumber(e.target.value));
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setPassword(e.target.value));
//   };

//   console.log(phoneNumber)
//   console.log(password)
//   return (
//     <div>
//       <div className='login-main-con'>
//         <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Picture.png?raw=true' className='img-bg' alt='Background' />
//         <div className='login-details'>
//           <div>
//             <div><h2>Masuk ke TIX ID</h2></div>
//             <div>
//               <div>NOMOR HANDPHONE</div>
//               <div className=''>
//                 <div>
//                   <div>+91</div>
//                   <input
//                     name="phoneNumber"
//                     value={login.phoneNumber}
//                     onChange={handlePhoneNumberChange} 
//                     placeholder='Masukkan Nomor Handphone'
//                   />
//                 </div>
//                 <div>
//                   <div>PASSWORD</div>
//                   <input
//                     type='password'
//                     name='password'
//                     value={login.password}
//                     onChange={handlePasswordChange}
//                     placeholder='Masukkan Input'
//                   />
//                 </div>
//                 <button>Masuk Sekarang</button>
//                 <p>Belum punya akun? </p>
//                 <button>Daftar Sekarang</button>
//                 <p>2021 TIX ID - PT Nusantara Elang Sejahtera.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhonenumber, setPassword ,setLogin} from './../Redux/Slice/LoginSlice'; 
import { RootState } from './../Redux/store/store';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import './Login.css';
import Signup from './Signup';
import { Route } from 'react-router-dom';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const usenavigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { phoneNumber, password,  } = useSelector((state: RootState) => state.login);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhonenumber(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   const handleSignupClick = () => {
    usenavigate('/signup')

  };

 const handleSubmit = () => {
    const formData = {
      phoneNumber: phoneNumber,
      password: password
    };
    console.log(formData); 
    dispatch(setLogin(true)); 
    usenavigate('/');
  };

  const gotobackhome = () => {
        usenavigate(-1)
    };
  return (
    // <div>
      <div className='login-main-con1'>
        {/* <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Picture.png?raw=true' className='login-bg-img' alt='Background' /> */}
    
        <div onClick={gotobackhome} className="login-go-to-back1 spacecenterset">
             
               <div><IoArrowBack className='homeicon1' /></div>
              <div><h3 className='homebutton1'>Home</h3></div>

        </div>
     
          <div className='logindetailmaincon'>
            <div className='login-details1 spacecenterset'>
           
            <div className='cononnnn'>
               <div><h2 className='login-heading'>Log In To TIX ID</h2></div>

             
                <div className='allcomponents' >
                {/* phone number */}
               <div className="Phone_main-con">
                  <div className='input-head-color'>Phone Number</div>
                    <div className='phone-main-con-inside color'>
                      <div className='fontsizeseteach'>+91</div>|
                      <input
                      className='textfield-box1'
                        name="phoneNumber"
                        value={phoneNumber} 
                        onChange={handlePhoneNumberChange} 
                        placeholder='Enter Mobile Number'
                      />
                    </div>
                  </div>
              
                
                  <div className='Phone_main-con '>

                      <div className="password-input-container ">
                          <div className='input-head-color'>Password</div>
                          <div className='phone-main-con-inside '>
                            <input
                          className='textfield-box1'
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            value={password} 
                            onChange={handlePasswordChange}
                            placeholder='Enter Password'
                              />
                              {showPassword ? (
                                // off eye
                                  <FaRegEyeSlash onClick={togglePasswordVisibility} className="eye-icon" /> // Assign class name for the eye icon
                                ) : (
                                  <IoEyeOutline onClick={togglePasswordVisibility} className="eye-icon" /> // Assign class name for the eye icon
                                )}

                          </div>
                      </div>
                
                </div>
               
                 <div className='login-all-but'>
                 
                    <button onClick={handleSubmit} className='login-but-sub login-but-1'>Login Now</button>
                    <p className='dont'>Don't have an account yet? </p>
                    <button onClick={handleSignupClick} className='login-but-sub login-but-2 '>Sign up now</button>
                 </div>
                 
                
                </div>
            </div>
            <div className='text-bottom'>
              <p>2021 TIX ID - PT Nusantara Elang Sejahtera.</p>
            </div>
         
          </div>

           </div> 
        </div>

   

        
//  </div>




  );
}

export default Login;
