// movie find using movie name -----------------------


import { useParams } from 'react-router-dom';
import UpcomingMovies from '../Data/UpcomingMovies';
import { upMovie } from '../Data/UpcomingMovies'; 
import DetailsUpComming from './SingleDetailsUpComming';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import React, { useEffect } from 'react';

const PageUpcomming = () => {
  const { movieName } = useParams<{ movieName: string }>();
  const movie = UpcomingMovies.find((movie: upMovie) => movie.id === movieName);
  const otherMovies = UpcomingMovies.filter(movie => movie.id !== movieName); 
 console.log("movie single",movie);
 console.log("other movie",otherMovies);
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the window when the component mounts
  }, []);
  return (
    <div>
      <Navbar/>
      {movie ? <DetailsUpComming movie={movie} poster_movie={otherMovies}/> : <p>Movie not found</p>}
      <hr/>
      <Footer/>
    </div>
  );
};

export default PageUpcomming;


/*movie find using movie id  -----------------------*/

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import UpcomingMovies from '../Data/UpcomingMovies';
// import { Movie } from '../Data/UpcomingMovies'; 
// import DetailsUpComming from './SingleDetailsUpComming';
// import Navbar from '../Home/Navbar';
// import Footer from '../Home/Footer';

// const PageUpcomming = () => {
//   const { movieId } = useParams<{ movieId: string | undefined }>(); // Ensure movieId is possibly undefined
//   const id = movieId ? parseInt(movieId, 10) : undefined; // Parse movieId to integer if it's defined
//   const movie = id !== undefined ? UpcomingMovies.find((movie: Movie) => movie.id === id) : undefined; // Find movie by ID if id is defined
//   const otherMovies = id !== undefined ? UpcomingMovies.filter(movie => movie.id !== id) : []; // Filter out the current movie if id is defined
//   console.log("movie single", movie);
//   console.log("other movies", otherMovies);
  
//   return (
//     <div>
//       <Navbar/>
//       {movie ? <DetailsUpComming movie={movie} poster_movie={otherMovies}/> : <p>Movie not found</p>}
//       <hr/>
//       <Footer/>
//     </div>
//   );
// };

// export default PageUpcomming;

