// import React from 'react'
// import './Poster.css'
// import movies from '../../components/Data/poster_movie'
// import { NavLink } from 'react-router-dom'

// const Poster = () => {
//   return (
//     <div>
         
//          <div className="horizontal-scroll-view">
//       {movies.map((movie) => (
//         <div className="card" key={movie.id}>
//           <NavLink to="moviepage">
//             {/* Adjust the src attribute to point to the correct image path */}
//             <img src={movie.image} className="abc" alt={movie.name} />
//             <h2 className="movietitle">{movie.name}</h2>
//           </NavLink>
//           <div className="premium-group">
//             <div className="insidediv">
//               <div className="premium1">{movie.type1}</div>
//               {/* Assuming there are only 3 types as mentioned */}
//               <div className="premium2">{movie.type2}</div>
//               <div className="premium2">{movie.type3}</div>

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Poster

// import React, { useState } from 'react';
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import './Poster.css';
// import movies from '../../components/Data/poster_movie';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Poster = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const moviesPerPage = 2;

//   // id pass next page
//     const navigate = useNavigate();
//    const handleClick = (id: number) => {
//     // Navigate to the "moviepage" route and pass the movie id as state
//     navigate('/moviepage', { state: { id: movieId } });
//   };

//   const handleNext = () => {
//     if (startIndex + moviesPerPage < movies.length) {
//       setStartIndex(startIndex + 1);
//     } else {
//       setStartIndex(0); 
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex - 1 >= 0) {
//       setStartIndex(startIndex - 1);
//     } else {
//       setStartIndex(movies.length - moviesPerPage); 
//     }
//   };

//   return (
//     <div>
//       <div className="horizontal-scroll-view">
//         {(
//             <div className="scroll-circle" onClick={handlePrev}><FaChevronLeft /></div>
//         )}
//         <div className='center-main-con card'>
//           {movies.slice(startIndex, startIndex + moviesPerPage).map((movie) => (
//           <div className="" key={movie.id}>
//             <div key={movie.id} onClick={()=>handleClick(movie.id)}>
//               <img src={movie.image} className="abc" alt={movie.name} />
//               <h2 className="movietitle">{movie.name}</h2>
//             </div>
//             <div className="premium-type">
//                 <div className="prem-1 pad">{movie.type1}</div>
//                 <div className="prem-2 pad">{movie.type2}</div>
//                 <div className="prem-3 pad">{movie.type3}</div>
//             </div>
//           </div>
//         ))}
//         </div>
//         { (
//             <div className="scroll-circle" onClick={handleNext}><FaChevronRight /></div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Poster;


import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Poster.css';
import movies from '../../components/Data/poster_movie';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showMoviesData } from '../Redux/Thunk/MovieThunk';
import { resetMovieBooking, setMovieData } from '../Redux/Slice/MovieBookingSlice';

const Poster = () => {


  // 2 poster dispaly code
  const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 2;
  const navigate = useNavigate();


  const handleNext = () => {
    if (startIndex + moviesPerPage < moviesData.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); 
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(moviesData.length - moviesPerPage); 
    }
  };


  // 1 poster dispaly code
  const [startIndex1, setStartIndex1] = useState(0);
  const moviesPerPage1 = 1;
  

  const handleNext1 = () => {
  if (startIndex1 + moviesPerPage1 < moviesData.length) {
    setStartIndex1(startIndex1 + 1);
  } else {
    setStartIndex1(0); 
  }
};

const handlePrev1 = () => {
  if (startIndex1 - 1 >= 0) {
    setStartIndex1(startIndex1 - 1);
  } else {
    setStartIndex1(moviesData.length - moviesPerPage1); 
  }
};


  //show all dat using thunk
  const dispatch = useDispatch()
  const {moviesData, loading} =  useSelector((state: any) =>  state.movies)
  console.log("Movie Data from thunk: " , moviesData)
  useEffect(() => {
    dispatch(showMoviesData() as any)
  },[])

  //secelted movie Store in Movie slice
  const handleClick = (movie: any) => {
    dispatch(setMovieData(movie)); 
    navigate(`/moviepage/?id=${encodeURIComponent(movie.id)}`);
    // dispatch(resetMovieBooking())
  };

  return (
    <div>
      {/* // display 2 poster */}
      <div className='hiddenpart0'>
        <div className="horizontal-scroll-view">
        {<div className="scroll-circle" onClick={handlePrev}><FaChevronLeft /></div>}
        <div className='center-main-con card hiddenpart0'>
          {moviesData.slice(startIndex, startIndex + moviesPerPage).map((movie: any) => (
            <div className="" key={movie.id} onClick={() => handleClick(movie)}> 
              <img src={movie.image} className="abc" alt={movie.name} />
              <h2 className="movietitle">{movie.name}</h2>
              <div className="premium-type">
                <div className="prem-1 pad">{movie.type1}</div>
                <div className="prem-2 pad">{movie.type2}</div>
                <div className="prem-3 pad">{movie.type3}</div>
              </div>
            </div>
          ))}
        </div>
        {<div className="scroll-circle" onClick={handleNext}><FaChevronRight /></div>}
      </div>
      </div>
      
      {/* // display 1 poster */}
     <div className='hiddenpart1'>
       <div className="horizontal-scroll-view ">
        {<div className="scroll-circle" onClick={handlePrev1}><FaChevronLeft /></div>}
        <div className='center-main-con card'>
          {moviesData.slice(startIndex1, startIndex1 + moviesPerPage1).map((movie: any) => (
            <div className="" key={movie.id} onClick={() => handleClick(movie)}> 
              <img src={movie.image} className="abc" alt={movie.name} />
              <h2 className="movietitle">{movie.name}</h2>
              <div className="premium-type">
                <div className="prem-1 pad">{movie.type1}</div>
                <div className="prem-2 pad">{movie.type2}</div>
                <div className="prem-3 pad">{movie.type3}</div>
              </div>
            </div>
          ))}
        </div>
        {<div className="scroll-circle" onClick={handleNext1}><FaChevronRight /></div>}
      </div>
     </div>
    </div>
  );
};

export default Poster;
