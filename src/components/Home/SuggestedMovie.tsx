//static data------------------------------------

// import React from 'react'
// import './SuggestedMovie.css'

// const SuggestedMovie = () => {
//   return (
//     <div>
//          <div className="text-after-add1">
//             <div className="lefttext-after">
//                 <h3 className="textheader">Akan Datang</h3>
//                 <p>Tunggu kehadirannya di bioskop kesayangan kamu!</p>
//             </div>
//             <div className="righttext-after"><a>Lihat Semua</a></div>
//         </div>

//         {/* <!-- movie suggest --> */}

//         <div className="main-container">

//             {/* <!-- First Img --> */}
//             <div className="first-container">
//                 <div className="first-con-img">
//                     <img src="./img/The Matrix Resurrections.png"/>
//                 </div>
//                 <div className="first-con-info">
//                     <div className="first-con-head"><h3>The Matrix: Resurrections</h3></div>
//                     <div className="premium-group">
//                         <div className="insidediv">
//                             <div className="premium1">XXI</div>
//                             <div className="premium2">CGV</div>
//                             <div className="premium3">CINEPOLIS</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Second Img --> */}
//             <div className="first-container">
//                 <div className="first-con-img">
//                     <img src="./img/Picture.png"/>
//                 </div>
//                 <div className="first-con-info">
//                     <div className="first-con-head">
//                         <h3>Resident Evil: Welcome to Raccoon City</h3>
//                     </div>
//                     <div className="premium-group">
//                         <div className="insidediv">
//                             <div className="premium1">XXI</div>
//                             <div className="premium2">CGV</div>
//                             <div className="premium3">CINEPOLIS</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Third Img --> */}
//             <div className="first-container">
//                 <div className="first-con-img">
//                     <img src="./img/Picture (1).png"/>
//                 </div>
//                 <div className="first-con-info">
//                     <div className="first-con-head">
//                         <h3>Sword Art Online: Progressive - Aria of a Starless Night</h3>
//                     </div>
//                     <div className="premium-group">
//                         <div className="insidediv">
//                             <div className="premium1">XXI</div>
//                             <div className="premium2">CGV</div>
//                             <div className="premium3">CINEPOLIS</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         {/* <!-- </div> -->      */}
        

//     </div>
//     <hr className="hr"></hr>
//     </div>
//   )
// }

// export default SuggestedMovie






//dynamic data ----------------------------------------------------
import React, { useEffect } from 'react';
import { upMovie } from '../Data/UpcomingMovies'; // Import the Movie interface
// import UpcomingMovies from '../Data/UpcomingMovies'; // Import the UpcomingMovies array
import { NavLink } from 'react-router-dom';
import './SuggestedMovie.css';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { showTheaterData } from '../Redux/Thunk/TheaterDataThunk';
import { showUpcomaingData } from '../Redux/Thunk/UpcommaingThunk';

const SuggestedMovie = () => {

  //direct json file data
  // const suggestedMovies: upMovie[] = UpcomingMovies
  // console.log("suggestedMovies",suggestedMovies)

  const navigate = useNavigate(); 

  //url
  const handleClick = (movieid: string) => {
    navigate(`/upcomming/${movieid}`);
    console.log(movieid) // Navigate to the movie details page
  };

  //Thunk API fetch Data 
  const dispatch = useDispatch()
  const { upcomingData, upcomingloading, error } = useSelector((state: any) => state.upcomingMovie);
  console.log(upcomingData ,"this is upcommain daat file")
  const suggestedMovies=upcomingData;


  return (
    <div>
      <div className="text-before-add1">
        <div className="lefttext1">
          <div>
            <h3 className="textheader11 newclass">TIX ID News</h3>
          </div>
          <div>
            <p className='textdescr1'>The latest news about the world of cinema for you!</p>
          </div>
        </div>
        <div className="righttext1">
          <NavLink to="/upcomming"><span className='seeallsug'>See All</span></NavLink> 
        </div>
      </div>

      <div className="suggested-container">
        {suggestedMovies.map((movie: upMovie) => (
          <div
            className="suggested-card"
            key={movie.id}
            onClick={() => handleClick(movie.id)} // Pass movie name to handleClick
          >
           <div className="suggested-image-container">
              <img src={movie.image} className="suggested-image" alt="Description"/>
            </div>

            <div className="suggested-details">
              <div className='suggested-details-part'>
                <div className="suggested-tag">
                  <div className='suggested-border'>{movie.tag}</div>
                </div>
                <h2 className="suggested-title">{movie.name}</h2>
                <div className="suggested-releasedate">{movie.releaseDate}</div>
              </div>
              <div className="sug-premium-type">
                <div className="prem-1 pad">{movie.type1}</div>
                <div className="prem-2 pad">{movie.type2}</div>
                <div className="prem-3 pad">{movie.type3}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default SuggestedMovie;
