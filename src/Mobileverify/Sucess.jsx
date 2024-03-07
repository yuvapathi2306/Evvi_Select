// import React from 'react'
// import image from '../Mobileverify/sucess.jpg'



// const sucess = () => {
//   return (
//     <>
//       {/* <Navbar name={"Signup"} path={"/signup"}/>  */}
//       <div className='text-center '>
//         <h1 className='pt-3'>Verification Sucessfully!</h1>  
//         <img src={image} alt='Verified sucessfully' height={600} width={600} />
//       </div>
      
//     </>

//   )
// }

// export default sucess



// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; 
// import image from '../Mobileverify/sucess.jpg';

// const Success = () => {
//   const history = useHistory();
//   const [seconds, setSeconds] = useState(5); // Initial countdown time in seconds

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       setSeconds(prevSeconds => {
//         if (prevSeconds === 0) {
//           clearInterval(countdownInterval);
//           // Navigate to the next page when countdown reaches zero
//           history.push('/Welcome');
//           return 0;
//         } else {
//           return prevSeconds - 1;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(countdownInterval); // Clean up the interval on component unmount
//   }, [history]);

//   return (
//     <>
//       <div className='text-center '>
//         <h1 className='pt-3'>Verification Successfully!</h1>
//         <img src={image} alt='Verified successfully' height={600} width={600} />
//         <p>Redirecting in {seconds} seconds...</p>
//       </div>
//     </>
//   );
// };

// export default Success;



import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'; // Importing useNavigate and useLocation

import image from '../assets/verified1.jpg';

const Success = () => {
  const navigate = useNavigate(); // Using useNavigate hook instead of useHistory
  // const location = useLocation(); // Using useLocation hook

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(countdownInterval);
          navigate('/welcome'); // Using navigate function to navigate to '/nextpage'
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [navigate]); // Only include navigate in the dependency array since it's the only dependency

  return (
    <>
      <div className='text-center'>
        <h1 className='pt-3'>Verification Successfully!</h1>
        <img src={image} alt='Verified successfully' height={400} width={400} />
        <p>Let's Start in {seconds} seconds...</p>
      </div>
    </>
  );
};

export default Success;
