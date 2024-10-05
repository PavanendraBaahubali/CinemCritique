import React from 'react'
import "../styles/MovieDetailsLayout.css"
import MovieDetails from '../components/MovieDetails'

const MovieDetailsLayout = () => {
  return (
    <div className='movie-details'>
        <div className='movie-img'>
            <img alt='GOT'
            src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/best-fan-favorite-game-of-thrones-characters-ranked.jpg'></img>
        </div>
        <MovieDetails />
    </div>
  )
}

export default MovieDetailsLayout
