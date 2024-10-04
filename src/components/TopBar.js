import React from 'react'
import "../styles/TopBar.css"
import TopSearchBar from './TopSearchBar'
import TopNav from './TopNav'

const TopBar = () => {
  return (
    <div className='topbar'>
        <TopSearchBar />
        <TopNav />
    </div>
  )
}

export default TopBar