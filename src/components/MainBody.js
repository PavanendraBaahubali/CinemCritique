import React from 'react'
import "../styles/MainBody.css"
import HomeBody from './HomeBody'
import TrailerBody from './TrailerBody'
import { useLocation } from 'react-router-dom'
import MovieDetailsLayout from '../layouts/MovieDetailsLayout'

const MainBody = () => {
    const location = useLocation()
    const isMovieDetails = location.pathname.includes('/movie')
  return (
    <div className='mainbody'>
        {
            !isMovieDetails ? 
            (<>
            <HomeBody />
            <TrailerBody /> 
            </>)
            :
            (
                <>
                <MovieDetailsLayout />
                </>
            )    
        }
        
    </div>
  )
}

export default MainBody