import React from 'react'
import Navbar from '../Home/Navbar'
import MovieDetails from './MovieDetails'
import Footer from '../Home/Footer'

const MovieHome = () => {
  return (
    <div>
        <Navbar/>
        <MovieDetails/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default MovieHome