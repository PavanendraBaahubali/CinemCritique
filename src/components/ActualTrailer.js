import React from 'react'
import "../styles/ActualTrailer.css"

const ActualTrailer = () => {
  return (
    <div className='actual-trailer'>
        <div class="video-container">
    <iframe src="https://www.youtube.com/embed/KPLWWIOCOOQ?si=-ezcRhGMK7tKhRxp" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
</div>

        <div className='trailer-data'>
            <p>Game Of Thrones S06E02</p>
        </div>
    </div>
  )
}

export default ActualTrailer