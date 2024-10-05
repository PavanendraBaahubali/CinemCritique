import React from 'react'
import "../styles/MovieDetails.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MovieDetails = () => {
  return (
    <div className='movie-info'>
        <div className='movie-info-left'>
            <div className='info'>
            <h1>Game Of Thrones</h1>
            {/* <br></br> */}
            <label>Genre : </label>
            <p>Plot : "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            </p>
            <p>Cast : </p>
            <p>Directors : </p>
            <p>Writers :</p>
            <p>Awards : </p>
            </div>
            <div className='watchlist'>
                <p>Watchlist</p>
                <AddCircleOutlineIcon />
            </div>
        </div>
        <div className='movie-info-right'>
            Rating Score
        </div>
    </div>
  )
}

export default MovieDetails