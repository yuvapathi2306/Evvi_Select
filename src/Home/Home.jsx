import React from 'react'
import image from '../assets/bg1.avif'
import Navbar from '../Navbar/Navbar';
// import "../Home/Home.css"

// import "../src/Home.css"

const Home = () => {
  return (
    <>
      <Navbar name={"Signup"} path={"/signup"}/> 
      <div class="imge">
        <img src={image} alt='Home' height={900} width={1300}/>
        
      </div>
    </>

  )
}

export default Home