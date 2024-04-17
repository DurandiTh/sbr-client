import React from 'react'
import './home.css'
import image from "./images/images2.jpg"


const Home = () => {
  return (

   
    <div className='home'>
      <h2 className='firstline'>Welcome</h2>
      <img src={image} alt="studentmgmt" />
    </div>
  )
}

export default Home
