import React from 'react'
import "./home.css"
import Header from '../../components/Header/Header'
import CategoriesDisplay from '../../components/CategoriesDisplay/CategoriesDisplay'

const Home = () => {
  return (
    <div className='home-page'>
        <div className='header-section'>
            
           <Header/>
           <CategoriesDisplay/> 
        </div>
        
    </div>
  )
}

export default Home