import React from 'react'
import "../styles/TrailerBody.css"
import ActualTrailer from './ActualTrailer'

const trailers = () => {
  return (
    <div>
        <div className="trailer-head">
            <h3>New Trailers</h3>
        </div>
        <ActualTrailer />
    </div>
  )
}

export default trailers