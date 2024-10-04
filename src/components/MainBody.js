import React from 'react'
import "../styles/MainBody.css"
import HomeBody from './HomeBody'
import TrailerBody from './TrailerBody'

const MainBody = () => {
  return (
    <div className='mainbody'>
        <HomeBody />
        <TrailerBody />
    </div>
  )
}

export default MainBody