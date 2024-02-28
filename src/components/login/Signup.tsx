// import React, { useState } from 'react';
// import './Signup.css';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { IoArrowBack } from "react-icons/io5";
// import { IoEyeOutline } from "react-icons/io5";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux';
// import { setname, setPhonenumber, setemail, setPassword ,setsignup} from '../Redux/Slice/SignupSlice';
// import { RootState } from '../Redux/store/store';

// const Signup = () => {
//     const dispatch = useDispatch();
//     const [Signup, setSignup] = useState(true);
//     const [showPassword, setShowPassword] = useState(false);
//     const usenavigate = useNavigate();
//     const { name, phoneNumber, email, password } = useSelector((state: RootState) => state.sign);

//     const handlesetnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         dispatch(setname(e.target.value));
//     };

//     const handlesetPhonenumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         dispatch(setPhonenumber(e.target.value));
//     };
//     const handlesetemailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         dispatch(setemail(e.target.value));
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         dispatch(setPassword(e.target.value));
//     };

//     const handleSignup1Click = () => {
//         dispatch(setsignup(true));
//     };
//     // back sign-1 to 2
//     const handleSignupClick = () => {
//         setSignup(false);
//     };

//     // show password
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     // goto back page page 2 page 1 singup page
//     const handleGoBack = () => {
//         setSignup(true)
//     }

//     //go to login page
//     const gotobacklogin = () => {
//         usenavigate(-1)
//     };

//     return (
//         <div className='maincontainerfullpage'>
            
//                 <div className={Signup ? 'visibleSignup': 'hiddenSignup'}>
//                     <div className='place'>
//                         {/* Signup content */}
//                     <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Signup.png?raw=true' className='photu' />
//                     <div className='main-cont'>
//                         <div onClick={gotobacklogin} className="Signup-go-to-back">
//                             <div><IoArrowBack className='back-icon' /></div>
//                             <h3 className='text-login'>Log In</h3>
//                         </div>
//                         <div className='signup-details'>
//                             <div className='details-split'>
//                                 <h2 className='sign-heading'>Sign Up</h2>
//                                 <div className='padding-each-con'>
//                                     <label className='Sign-input-text-heading'>Full Name</label><br />
//                                     <div className='signup-phone-main-con-inside color'>
//                                         <input
//                                             onChange={handlesetnameChange}
//                                             className='textfield-box'
//                                             value={name}
//                                             placeholder='Enter Full Name' />
//                                     </div>
//                                 </div>
//                                 <div className="padding-each-con">
//                                     <div className='Sign-input-text-heading'>Phone Number</div>
//                                     <div className='signup-phone-main-con-inside color'>
//                                         <div className='thisiscountycode'>+91</div>|
//                                         <input
//                                             className='textfield-box'
//                                             name="phoneNumber"
//                                             value={phoneNumber}
//                                             onChange={handlesetPhonenumberChange}
//                                             placeholder='Enter Mobile Number'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <button onClick={handleSignupClick} className='signup-but'><h3>Sign Up Now</h3></button>
//                                 </div>
//                             </div>
//                             <div className='copytrighttext'>
//                                 2021 TIX ID - PT Nusantara Elang Sejahtera.
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
           
//                 <div className={!Signup ? 'visibleSignup ': 'hiddenSignup slide-in-right'}>
//                     <div className='place'>
//                         {/* Signup content */}
//                     <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Signup.png?raw=true' className='photu' />
//                     <div className='main-cont'>
//                         <div onClick={handleGoBack} className="Signup-go-to-back">
//                             <div><IoArrowBack className='back-icon' /></div>
//                             <h3 className='text-login'>Log In</h3>
//                         </div>
//                         <div className='signup-details'>
//                             <div className='details-split'>
//                                 <h2 className='sign-heading'>Sign Up</h2>
//                                 <div className='padding-each-con'>
//                                     <label className='Sign-input-text-heading'>Enter Email</label><br />
//                                     <div className='signup-phone-main-con-inside color'>
//                                         <input
//                                             type='email'
//                                             value={email}
//                                             onChange={handlesetemailChange}
//                                             className='textfield-box'
//                                             placeholder='Enter Email Id' />
//                                     </div>
//                                 </div>
//                                 <div className="">
//                                     <div className='Sign-input-text-heading'>Password</div>
//                                     <div className='signup-phone-main-con-inside color eyeset'>
//                                         <input
//                                             className='textfield-box'
//                                             type={showPassword ? 'text' : 'password'}
//                                             name='password'
//                                             value={password}
//                                             onChange={handlePasswordChange}
//                                             placeholder='Enter Password'
//                                         />
//                                         {showPassword ? (
//                                             // off eye
//                                             <FaRegEyeSlash onClick={togglePasswordVisibility} className="sign-eye-icon" /> // Assign class name for the eye icon
//                                         ) : (
//                                             <IoEyeOutline onClick={togglePasswordVisibility} className="sign-eye-icon" /> // Assign class name for the eye icon
//                                         )}
//                                     </div>

//                                 </div>

//                                 <div>
//                                     <NavLink to={'/'} onClick={handleSignup1Click}><h3 className='signup-but'>Sign Up</h3></NavLink>
//                                 </div>
//                                 <div>
//                                     <small className='small-text-2'>*Dengan mendaftar saya menyetujui kebijakan dari TIX ID</small>
//                                 </div>
//                             </div>

//                             <div>
//                                 2021 TIX ID - PT Nusantara Elang Sejahtera.
//                             </div>
//                         </div>
//                     </div>
//                     </div>

//                 </div>
          
//         </div>
//     );
// }

// export default Signup;


import React, { useState } from 'react';
import './Signup.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setname, setPhonenumber, setemail, setPassword ,setsignup} from '../Redux/Slice/SignupSlice';
import { RootState } from '../Redux/store/store';

const Signup = () => {
    const dispatch = useDispatch();
    const [Signup, setSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const usenavigate = useNavigate();
    const { name, phoneNumber, email, password } = useSelector((state: RootState) => state.sign);

    const handlesetnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setname(e.target.value));
    };

    const handlesetPhonenumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPhonenumber(e.target.value));
    };
    const handlesetemailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setemail(e.target.value));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.target.value));
    };

    const handleSignup1Click = () => {
        dispatch(setsignup(true));
    };
    // back sign-1 to 2
    const handleSignupClick = () => {
        setSignup(false);
    };

    // show password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // goto back page page 2 page 1 singup page
    const handleGoBack = () => {
        setSignup(true)
    }

    //go to login page
    const gotobacklogin = () => {
        usenavigate(-1)
    };

    return (
        <div className='maincontainerfullpage'>
            
                <div className={Signup ? 'visibleSignup': 'hiddenSignup'}>
                    <div className='place'>
                        {/* Signup content */}
                    <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Signup.png?raw=true' className='photu' />
                    <div className='main-cont'>
                        <div onClick={gotobacklogin} className="Signup-go-to-back">
                            <div><IoArrowBack className='back-icon' /></div>
                            <h3 className='text-login'>Log In</h3>
                        </div>
                        <div className='signup-details'>
                            <div className='details-split'>
                                <h2 className='sign-heading'>Sign Up</h2>
                                <div className='padding-each-con'>
                                    <label className='Sign-input-text-heading'>Full Name</label><br />
                                    <div className='signup-phone-main-con-inside color'>
                                        <input
                                            onChange={handlesetnameChange}
                                            className='textfield-box'
                                            value={name}
                                            placeholder='Enter Full Name' />
                                    </div>
                                </div>
                                <div className="padding-each-con">
                                    <div className='Sign-input-text-heading'>Phone Number</div>
                                    <div className='signup-phone-main-con-inside color'>
                                        <div className='thisiscountycode'>+91</div>|
                                        <input
                                            className='textfield-box'
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={handlesetPhonenumberChange}
                                            placeholder='Enter Mobile Number'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button onClick={handleSignupClick} className='signup-but'><h3>Sign Up Now</h3></button>
                                </div>
                            </div>
                            <div className='copytrighttext'>
                                2021 TIX ID - PT Nusantara Elang Sejahtera.
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
           
                <div className={!Signup ? 'visibleSignup ': 'hiddenSignup'}>
                    <div className='place'>
                        {/* Signup content */}
                    <img src='https://github.com/dharmik2003/poster_movie/blob/main/login/Signup.png?raw=true' className='photu' />
                    <div className='main-cont'>
                        <div onClick={handleGoBack} className="Signup-go-to-back">
                            <div><IoArrowBack className='back-icon' /></div>
                            <h3 className='text-login'>Log In</h3>
                        </div>
                        <div className='signup-details'>
                            <div className='details-split'>
                                <h2 className='sign-heading'>Sign Up</h2>
                                <div className='padding-each-con'>
                                    <label className='Sign-input-text-heading'>Enter Email</label><br />
                                    <div className='signup-phone-main-con-inside color'>
                                        <input
                                            type='email'
                                            value={email}
                                            onChange={handlesetemailChange}
                                            className='textfield-box'
                                            placeholder='Enter Email Id' />
                                    </div>
                                </div>
                                <div className="">
                                    <div className='Sign-input-text-heading'>Password</div>
                                    <div className='signup-phone-main-con-inside color eyeset'>
                                        <input
                                            className='textfield-box'
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
                                            value={password}
                                            onChange={handlePasswordChange}
                                            placeholder='Enter Password'
                                        />
                                        {showPassword ? (
                                            // off eye
                                            <FaRegEyeSlash onClick={togglePasswordVisibility} className="sign-eye-icon" /> // Assign class name for the eye icon
                                        ) : (
                                            <IoEyeOutline onClick={togglePasswordVisibility} className="sign-eye-icon" /> // Assign class name for the eye icon
                                        )}
                                    </div>

                                </div>

                                <div>
                                    <NavLink to={'/'} onClick={handleSignup1Click}><h3 className='signup-but'>Sign Up</h3></NavLink>
                                </div>
                                <div>
                                    <small className='small-text-2'>*Dengan mendaftar saya menyetujui kebijakan dari TIX ID</small>
                                </div>
                            </div>

                            {/* <div>
                                2021 TIX ID - PT Nusantara Elang Sejahtera.
                            </div> */}
                        </div>
                    </div>
                    </div>

                </div>
          
        </div>
    );
}

export default Signup;

