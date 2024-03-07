// import React from 'react';
// import Sidebar from '../../startpage/Sidebar';
// import "../Interview/Interview.css"
// import cardimg from "../../assets/reviews.jpg"

// const Interview = () => {
//   return (
// <>
//     <div class='job'>
//       <Sidebar/>
//       <div class="card">
//   <div class="card-body">
//     <h1>We Want Yor Feedback✨..</h1>
//     <p class="card-para">Check the our interview schedule and current status.. </p>
//     <img src={cardimg} alt="Recuritment" height={200} width={200} class="cardimg"/>
//   </div>
// </div>
//     </div>
//     <div className='d-flex justify-content-center pt-5'>
//         <div className='d-flex ps-5'>
//             <div className='ps-2 btn btn-light col-4 '>
//                 <div className='bg-info p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Canditates</p>
//                 </div>
//             </div>
//             <div className='ps-2 btn btn-light col-4'><div className='bg-success p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Selected</p></div></div>
//             <div className='ps-2 btn btn-light col-4'><div className='bg-danger p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Rejected</p></div></div>
//             {/* <div className='ps-2 btn btn-light col-3'><div className='bg-primary p-3 rounded-3 border-dark border-bottom border-end shadow'><p>Round 3</p></div></div> */}
//         </div>
//     </div>
//     </>
//   );
// };

// export default Interview;


import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../Reviews/Reviewstyle";
import Sidebar from "../../startpage/Sidebar";
import cardimg from "../../assets/reviews.jpg"
import "../Reviews/Reviews.css"

const Rate = () => {
	const [rate, setRate] = useState(0);


  

	return (
    <>
    <div class='job'>

    <Sidebar/>
    <div class="card">
 <div class="card-body">
    <h1>We Want Yor Feedback✨..</h1>
   <p class="card-para">Check the our interview schedule and current status.. </p>
    <img src={cardimg} alt="Recuritment" height={200} width={200} class="cardimg"/>
  </div>
 </div>
 <div class="support">
 <h1>Click here give your support👇</h1>
 </div>

		<Container>
			{[...Array(5)].map((item, index) => {
				const givenRating = index + 1;
				return (
					
					<label>
						
						<Radio
							type="radio"
							value={givenRating}
							onClick={() => {
								setRate(givenRating);
								alert(
									`Are you sure you want to give 
									${givenRating} stars ?`
								);
							}}
							

						/>
						<Rating>
							<FaStar
								color={
									givenRating < rate || givenRating === rate
										? "000"
										: "rgb(192,192,192)"
								}
							/>
						</Rating>
					</label>
					
					

        
				);
			})}
		</Container>
		<div class='textthank'> <h5>Thankyou for your support!</h5></div>
    </div>
    </>
	
	);
};

export default Rate;
