// import React from 'react';
// import { Movie } from '../Data/UpcomingMovies'; // Import the Movie interface

// interface Props {
//   movie: Movie; // Define the movie prop
// }

// const DetailsUpComming: React.FC<Props> = ({ movie }) => {
//   return (
//     <div>
//       <h2>{movie.name}</h2>
//       <img src={movie.image} alt={movie.name} style={{ width: '200px' }} />
//       <p>Release Date: {movie.releaseDate}</p>
//       <p>Tag: {movie.tag}</p>
//       <p>Types: {movie.type1}, {movie.type2}, {movie.type3}</p>
//     </div>
//   );
// }

// export default DetailsUpComming;


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React, { useEffect } from 'react';
// import { Movie } from '../Data/UpcomingMovies'; 
// import { useNavigate } from 'react-router-dom';
// import ShareButton from '../ShareButton/Sharebutton';
// import './SingleDetailsUpComming.css'


// interface Props {
//   movie: Movie; 
//   poster_movie: Movie[];
// }

// const DetailsUpComming: React.FC<Props> = ({ movie,poster_movie }) => {

//   const navigate = useNavigate();
   
//   useEffect(() => {
//     window.scrollTo(0, 0); 
//   },[])

// const handledetails = (movie: Movie) => {
//   window.scrollTo(0, 0); 
//   navigate(`/upcomming/${movie.name}`, { state: movie });
   
// };
// console.log("movie is this --",movie.name)

//   return (
//     <div>
//        <div className='up-single-main-con'>
     
//     <div  className='up-single-movie-details'>

//       {/* title data */}
//       <div>
//         <h2 className='up-single-title'>{movie.name}</h2>
//         <p  className='up-single-date'>Comming Soon...   {movie.releaseDate}</p>
//       </div>
//       {/* image & Descr */}
//       <div className='up-single-details'>
//          <div className='up-img-div'>
//            <img src={movie.image} alt={movie.name}  className='up-single-img'/>
//          </div>
//           <div>
//             {/* <span className='up-single-text-desc'>Movie Description :</span> */}
//             <p className='up-single-desc'>{movie.description}</p>
//             <p className='up-single-desc'>{movie.description}</p>
//             <p className='up-single-desc'>{movie.description}</p>
//             <p className='up-single-desc'>{movie.description}</p>
  
//             {/* share article button */}
//             <h2 className='up-padd'><ShareButton/></h2>
//           </div>

          
          
          
//       </div>
      

      
//     </div>
//         </div>
//          <hr/>
//         <div className='up-other-movie-title'>Other Movies</div>
       
// <div className="up-other-movies-container">
//         {poster_movie.map((posterMovie) => (
//           <div key={posterMovie.id} className="up-other-movie" onClick={() => handledetails(posterMovie)}>
//             <img src={posterMovie.image} alt={posterMovie.name} className="up-other-movie-img" />
//             <h3 className="up-other-movie-title">{posterMovie.name}</h3>
//           </div>
//         ))}
//       </div>
        
       

//     </div>
//   );
// }

// export default DetailsUpComming;



// search using movie Id ------------------------


import React, { useEffect } from 'react';
import { upMovie } from '../Data/UpcomingMovies'; 
import { useNavigate } from 'react-router-dom';
import ShareButton from '../ShareButton/Sharebutton';
import './SingleDetailsUpComming.css'

interface Props {
  movie: upMovie; 
  poster_movie: upMovie[];
}

const DetailsUpComming: React.FC<Props> = ({ movie, poster_movie }) => {

  const navigate = useNavigate();
   
  const handledetails = (selectedMovie: upMovie) => {
    navigate(`/upcomming/${selectedMovie.id.toLowerCase()}`, { state: selectedMovie });
   
    window.scrollTo(0, 0);

  };
  

  return (
    <div>
      <div className='up-single-main-con'>
        <div  className='up-single-movie-details'>
          <div>
            <h2 className='up-single-title'>{movie.name}</h2>
            <p  className='up-single-date'>Coming Soon...   {movie.releaseDate}</p>
          </div>
          <div className='up-single-details'>
            <div className='up-img-div'>
              <img src={movie.image} alt={movie.name}  className='up-single-img'/>
            </div>
            <div>
              <p className='up-single-desc'>{movie.description}</p>
              <p className='up-single-desc'>{movie.description}</p>
              <p className='up-single-desc'>{movie.description}</p>
              <p className='up-single-desc'>{movie.description}</p>
              <h2 className='up-padd'><ShareButton/></h2>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className='up-other-movie-title'>Other Movies</div>
      <div className="up-other-movies-container">
        {poster_movie.map((posterMovie) => (
          <div key={posterMovie.id} className="up-other-movie" onClick={() => handledetails(posterMovie)}>
            <img src={posterMovie.image} alt={posterMovie.name} className="up-other-movie-img" />
            <h3 className="up-other-movie-title moviename1">{posterMovie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsUpComming;
