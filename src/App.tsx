// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home/Home'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/login/Login';
// import SignUp from './components/signup/SignUp';
// import MovieHome from './components/MoviePage/MovieHome';
// import SiteHomePage from './components/SitePage/SiteHomePage';
// import Con_Pay_HomePage from './components/Confirm-Payment/Con_Pay_HomePage';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/login' element={<Login />}/>
//         <Route path='/signup' element={<SignUp />}/>
//         <Route path='/moviepage' element={<MovieHome />}/>
//         <Route path='/sitepage' element={<SiteHomePage />}/>
//         <Route path='/confirm_payment' element={<Con_Pay_HomePage />}/>
//         {/* <Route path='/movieblog' element={}/> */}
       
//         <Route path="*" element={<h1>Page not found</h1>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Login from './components/login/Login';
// import SignUp from './components/signup/SignUp';
// import MovieHome from './components/MoviePage/MovieHome';
// import SiteHomePage from './components/SitePage/SiteHomePage';
// import Con_Pay_HomePage from './components/Confirm-Payment/Con_Pay_HomePage';
// // import MovieDetailsPage from './../src/components/MovieBlog/MovieDetailsPage'; // Import the MovieDetailsPage

// function App() {
//   return (
//     <div className="App">

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<SignUp />} />
//           <Route path='/moviepage' element={<MovieHome />} />
//           <Route path='/sitepage' element={<SiteHomePage />} />
//           <Route path='/confirm_payment' element={<Con_Pay_HomePage />} />
//           {/* <Route path='/movie/:id' element={<MovieDetailsPage />} /> */}
//           <Route path="*" element={<h1>Page not found</h1>} />
//         </Routes>

//     </div>
//   );
// }

// export default App;



import MovieDetailsPage from './../src/components/MovieBlog/MovieDetailsPage'; // Import the MovieDetailsPage
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import MovieHome from './components/MoviePage/MovieHome';
import SiteHomePage from './components/SitePage/SiteHomePage';
import Con_Pay_HomePage from './components/Confirm-Payment/Con_Pay_HomePage';
import MovieBlog from './components/MovieBlog/HomeMovieBlog';
import PageUpcomming from './components/Commpingsoon/PageUpcomming';
import HomeUpcommingPage from './components/Commpingsoon/HomeUpcommingPage';
import { useDispatch } from 'react-redux';
import { showMoviesData } from './components/Redux/Thunk/MovieThunk';
import { showTheaterData } from './components/Redux/Thunk/TheaterDataThunk';
import { showUpcomaingData } from './components/Redux/Thunk/UpcommaingThunk';
import PaymentPage from './components/DonePayment/PaymentPage';
import MymovieHome from './MyMovie/MymovieHome';
import TransactionDetailPage from './components/TransactionDetailPage/TransactionDetailPage';
import Profile from './components/Home/Profile';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'; // Import the MovieDetailsPage

function App() {


  const dispatch = useDispatch();

  // console.log("------------",showMoviesData() as any)

  // dispatch(showMoviesData() as any)


  useEffect(() => {
    dispatch(showMoviesData() as any)
    dispatch(showTheaterData() as any);
    dispatch(showMoviesData() as any);
    dispatch(showUpcomaingData() as any);

  });


  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/moviepage' element={<MovieHome />} />
          {/* <Route path='/sitehomepage' element={<SiteHomePage />} /> */}
          <Route path='/movie/:id/sitehomepage' element={<SiteHomePage />} />
          {/* <Route path='/confirm_payment' element={<Con_Pay_HomePage />} /> */}
          <Route path="/movie/:id/sitehomepage/confirm_payment" element={<Con_Pay_HomePage />} />
          <Route path="/movie/:id/sitehomepage/confirm_payment/PaymentPage" element={<PaymentPage />} />
          {/* <Route path="/movie/:id/sitehomepage/confirm_payment/PaymentPage/MymovieHome" element={<MymovieHome />} /> */}
          
          <Route path='/movie' element={<MovieBlog/>} />
          <Route path='/upcomming' element={<HomeUpcommingPage/>} /> 
          <Route path='/movie/:movieName' element={<MovieDetailsPage />} />
          <Route path='/upcomming/:movieName' element={<PageUpcomming />} />
          {/* <Route path='/movie/:*' element={<h1>Page not found</h1>} />  */}
          <Route path="*" element={<h1>Page not found</h1>} />

          <Route path="/MymovieHome" element={<MymovieHome />} />
          <Route path="/MymovieHome/:ramdonnumber" element={<TransactionDetailPage/>} />


          
          <Route path="/profile" element={<Profile/>} />
        </Routes>

    </div>
  );
}

export default App;
