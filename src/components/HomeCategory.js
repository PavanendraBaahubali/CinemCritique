import React from 'react'
import "../styles/HomeCategory.css"
import CategoryCard from './CategoryCard'

const HomeCategory = () => {
  return (
    <div className='homecategory'>
        <div className='head' >
            <p>Weekly Top Rated Movies</p>
            <h5>See More</h5>
        </div>
        <div className='cardSection'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
        <hr/>
    </div>
  )
}

export default HomeCategory