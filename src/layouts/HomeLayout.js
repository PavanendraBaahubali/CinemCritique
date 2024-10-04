import React from 'react'
import "../styles/HomeLayout.css"
import SideBar from '../components/SideBar'
import MainSection from '../components/MainSection'

const HomeLayout = () => {
  return (
    <div className='homeLayout'>
        <SideBar />
        <MainSection />
    </div>
  )
}

export default HomeLayout