// import React from 'react'
// import './Admovie.css'

// const Admovie = () => {
//   return (
//     <div>
//           {/* <!-- Text  --> */}
//         <div className="text-before-add">
//             <div className="lefttext">
//                 <div><h3 className="textheader">TIX ID News</h3></div>
//                 <div><p>Berita tentang dunia perfilman terbaru untuk anda!</p></div>
//             </div>
//             <div className="righttext"><a>Lihat Semua</a></div>
//         </div>


//         {/* <!-- three poster --> */}

//         <div className="news-container">

//             <div className="news-frame">

//                 <div className="news-poster">
//                     <img src="/img/image 13.png" alt="imagee"/>
//                 </div>

//                 <div className="news-content">
//                     <div className="news-content-spotlight">
//                         <div className="spotlight">Spotlight</div>
//                     </div>

//                     <div className="news-content-info">
//                         <div className="news-content-info-title">
//                             Spider-Man: No Way Home Rilis Trailer Terbaru.
//                         </div>

//                         <div className="news-content-info-date">
//                             08 Nov 2021 | TIX ID
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="news-frame">
            
//                 <div className="news-poster">
//                     <img src="/img/image 13 (1).png" alt="imagee"/>
//                 </div>
            
//                 <div className="news-content">
//                     <div className="news-content-spotlight">
//                         <div className="spotlight">Spotlight</div>
//                     </div>
            
//                     <div className="news-content-info">
//                         <div className="news-content-info-title">
//                         Fakta Film Yowis Ben Finale Yang Perlu Kamu Ketahui Sebelum Nonton!.   
//                         </div>
            
//                         <div className="news-content-info-date">
//                             08 Nov 2021 | TIX ID
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="news-frame">
            
//                 <div className="news-poster">
//                     <img src="/img/image 13 (2).png" alt="imagee"/>
//                 </div>
            
//                 <div className="news-content">
//                     <div className="news-content-spotlight">
//                         <div className="spotlight">Spotlight</div>
//                     </div>
            
//                     <div className="news-content-info">
//                         <div className="news-content-info-title">
//                            Ghostbusters: Afterlife Hadir Menampilkan Variasi Hantu Baru
//                         </div>
            
//                         <div className="news-content-info-date">
//                             08 Nov 2021 | TIX ID
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Admovie



// new working code *********************************************



// import React from 'react';
// import movies from './../../components/Data/poster_movie';
// import './Admovie.css';
// import { NavLink } from 'react-router-dom';

// const Admovie = () => {
//   const itemsToShow = movies.slice(0, 3); // Slice the first three movies

//   return (
//       <div>

//          <div className="text-before-add">
//              <div className="lefttext">
//                  <div><h3 className="textheader">TIX ID News</h3></div>
//                  <div><p>Berita tentang dunia perfilman terbaru untuk anda!</p></div>
//              </div>
//              <div className="righttext"><NavLink to="/movieblog">Lihat Semua</NavLink></div>
//          </div>

//            <div className="admovie-container">
//       {itemsToShow.map((movie) => (
//         <div className="admovie-card" key={movie.id}>
//           <img src={movie.image} alt={movie.name} className="admovie-image" />
//           <div className="admovie-details">
//             <div className="admovie-tag"><div className='tag-border'>{movie.tag}</div></div>
//             <h2 className="admovie-title">{movie.name}</h2>
//             <div className="admovie-releasedate">{movie.releaseDate}</div>
//           </div>
//         </div>
//       ))}
//     </div>

//       </div>
//   );
// };

// export default Admovie;





//data display but after image ------------------------

// Admovie.tsx

// import React, { useState } from 'react';
// import movies from './../../components/Data/poster_movie';
// import './Admovie.css';
// import { NavLink } from 'react-router-dom';
// import MovieDetails from './../MovieBlog/MovieDetails'; // Update the import path for MovieDetails
// import { Movie } from './../MovieBlog/MovieDetails'; // Update the import for the Movie interface

// const Admovie: React.FC = () => {
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
//   const itemsToShow = movies.slice(0, 3); // Slice the first three movies

//   const handleClick = (movie: Movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div>
//       <div className="text-before-add">
//         <div className="lefttext">
//           <div>
//             <h3 className="textheader">TIX ID News</h3>
//           </div>
//           <div>
//             <p>Berita tentang dunia perfilman terbaru untuk anda!</p>
//           </div>
//         </div>
//         <div className="righttext">
//           <NavLink to="/movieblog">Lihat Semua</NavLink>
//         </div>
//       </div>

//       <div className="admovie-container">
//         {itemsToShow.map((movie) => (
//           <div className="admovie-card" key={movie.id}>
//             <img
//               src={movie.image}
//               alt={movie.name}
//               className="admovie-image"
//               onClick={() => handleClick(movie)} // Handle click event
//             />
//             <div className="admovie-details">
//               <div className="admovie-tag">
//                 <div className='tag-border'>{movie.tag}</div>
//               </div>
//               <h2 className="admovie-title">{movie.name}</h2>
//               <div className="admovie-releasedate">{movie.releaseDate}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedMovie && <MovieDetails movie={selectedMovie} />} 
//     </div>
//   );
// };

// export default Admovie;




// 3 movie slice code ------------------------------------------------------- 

import React, { useEffect, useState } from 'react';
// import movies from './../../components/Data/poster_movie';
import './Admovie.css';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Movie } from '../MovieBlog/SingleMovieDetails'; // Update the import for the Movie interface
import { useDispatch, useSelector } from 'react-redux';
import { showMoviesData } from '../Redux/Thunk/MovieThunk';


const Admovie = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  // const itemsToShow = movies.slice(0, 3);
  // const itemsToShow = movies;

  const handleClick = (movieName: string) => {
    
    navigate(`/movie/${movieName}`);
      
  };


  // data fetch (thunk movieSlice, movieThunk)
    const dispatch = useDispatch()

    const {moviesData, loading} =  useSelector((state: any) =>  state.movies)
    console.log("Movie Data from thunk: " , moviesData)
    useEffect(() => {
      dispatch(showMoviesData() as any)
    },[])

    const itemsToShow = moviesData;

    
  return (
    <div >
      <div className="text-before-add">
        <div className="lefttext">
          <div>
            <h3 className="textheader">TIX ID News</h3>
          </div>
          <div>
            <p className='textdescr'>The latest news about the world of cinema for you!</p>
          </div>
        </div>
        <div className="righttext">
          <NavLink to="/movie"><span className="admovieseeall">See All</span></NavLink> 
        </div>
      </div>
<div className="admovie-container">
        {itemsToShow.map((movie:any) => (
          <div className="admovie-card" key={movie.id}
            onClick={() => handleClick(movie.name)}
            >
            <img
              src={movie.imgurl}
              alt={movie.name}
              className="admovie-image"
               // Handle click event
            />
            <div className="admovie-details">
              <div className="admovie-tag">
                <div className='tag-border'>{movie.tag}</div>
              </div>
              <h2 className="admovie-title">{movie.name}</h2>
              <div className="admovie-releasedate">{movie.releaseDate}</div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Admovie;



// add move movie scroll code-------------------------------------


// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Movie } from '../MovieBlog/SingleMovieDetails';
// import movies from './../../components/Data/poster_movie';
// import { newsData } from './../Data/NesPostData'; // Import newsData array
// import './Admovie.css';

// const Admovie = () => {
//   const navigate = useNavigate();

//   const handleClick = (movieName: string) => {
//     navigate(`/movie/${movieName}`);
//   };

//   return (
//     <div className="admovie-container">
//       <div className="text-before-add">
//         <div className="lefttext">
//           <div>
//             <h3 className="textheader">TIX ID News</h3>
//           </div>
//           <div>
//             <p>Berita tentang dunia perfilman terbaru untuk anda!</p>
//           </div>
//         </div>
//         <div className="righttext">
//           <NavLink to="/movie">Lihat Semua</NavLink>
//         </div>
//       </div>
//       <div className="admovie-list">
//         {newsData.map((movie) => (
//           <div className="admovie-card" key={movie.id} onClick={() => handleClick(movie.name)}>
//              <div className="admovie-card" key={movie.id}
//             onClick={() => handleClick(movie.name)}
//             >
//             <img
//               src={movie.image}
//               alt={movie.name}
//               className="admovie-image"
               
//             />
//             </div>
            
//             <div className="admovie-details">
//               <div className="admovie-tag">
//                 <div className='tag-border'>{movie.tag}</div>
//               </div>
//               <h2 className="admovie-title">{movie.name}</h2>
//               <div className="admovie-releasedate">{movie.releaseDate}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Admovie;
