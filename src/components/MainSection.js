import React from 'react'
import "../styles/MainSection.css"
import TopBar from './TopBar'
import MainBody from './MainBody'

const MainSection = () => {
  return (
    <div className='mainsection'>
        <TopBar />
        <MainBody />
    </div>
  )
}

export default MainSection