// import React from 'react';
// import { useParams } from 'react-router-dom';
// import movies from '../Data/poster_movie';
// import MovieDetails from './MovieDetails'; // Assuming you have a MovieDetails component

// // Define the Movie interface
// interface Movie {
//   id: number;
//   name: string;
//   image: string;
//   releaseDate: string;
//   tag: string;
// }

// const MovieDetailsPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>(); // Get the movie ID from the URL parameters
//   const movie = movies.find((movie) => movie.id === parseInt(id)); // Find the movie with the matching ID

//   return (
//     <div>
//       <h1>Movie Details</h1>
//       {movie ? <MovieDetails movie={movie} /> : <p>Movie not found</p>}
//     </div>
//   );
// };

// export default MovieDetailsPage;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movies from './../../components/Data/poster_movie';
import MovieDetails from './SingleMovieDetails';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const MovieDetailsPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const { movieName } = useParams<{ movieName: string }>(); 
  console.log("-----------",movieName) // Get the movie name from the URL parameters
  const movie = movies.find((movie) => movie.name === movieName); // Find the movie with the matching name
  const otherMovies = movies.filter(movie => movie.name !== movieName);

  return (
    <div>
      <Navbar/>
      {movie ? <MovieDetails movie={movie}  poster_movie={otherMovies}/> : <p>Movie not found</p>}
      <hr/>
      <Footer/>
    </div>
  );
};

export default MovieDetailsPage;
