import React from 'react';


// import React from 'react'
import "../Dashboard/Card.css"
import cardimg from "../../assets/dashboard.avif"

function Card() {
  return (
    <>
    <div class="card1">
   <div class="card">
  <div class="card-body">
    <h1>Welcome!</h1>
    <p class="card-para">Find the jobs and right Canditates.. </p>
    <img src={cardimg} alt="Recuritment" height={200} width={200} class="cardimg"/>
  </div>
</div>
</div>


    </>
  )
}

export default Card