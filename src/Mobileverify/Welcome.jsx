// import React, { useEffect } from 'react';
// import welcomeimg from "../Mobileverify/welcome1.avif" ;

// export default function Welcome() {
//   useEffect(() => {
//     // Get the modal element
//     const modal = document.getElementById('staticBackdrop');
//     // Create a new bootstrap Modal instance
//     const modalInstance = new window.bootstrap.Modal(modal);
//     // Show the modal
//     modalInstance.show();

//     // Cleanup function to close the modal when the component unmounts
//     return () => {
//       modalInstance.hide();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once after the initial render

//   return (
//     <>
//       <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//           <div className="modal-content">
//             <div className="modal-header">
//               {/* <h5 className="modal-title" id="staticBackdropLabel"> */}
//                 <img src={welcomeimg} alt="welcome" width={500} height={300}/>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
              
//              <h3 className='text-center'> Welcome to Evvi Select</h3>
//              <h6 className='text-center text-success'>Hire in Days, Not Months</h6>
              
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-success" data-bs-dismiss="modal">Start Now 👍</button>
//               {/* Add additional buttons or actions here if needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import welcomeimg from "../Mobileverify/welcome1.avif";

export default function Welcome() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const modal = document.getElementById('staticBackdrop');
    const modalInstance = new window.bootstrap.Modal(modal);
    modalInstance.show();

    return () => {
      modalInstance.hide();
    };
  }, []);

  const handleStartNowClick = () => {
    // Navigate to the next page when "Start Now" button is clicked
    navigate('/startpage');
  };

  return (
    <>
      <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <img src={welcomeimg} alt="welcome" width={500} height={300}/>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3 className='text-center'> Welcome to Evvi Select</h3>
              <h6 className='text-center text-success'>Hire in Days, Not Months</h6>
            </div>
            <div className="modal-footer">
              {/* Call handleStartNowClick when "Start Now" button is clicked */}
              <button type="button" className="btn btn-success" onClick={handleStartNowClick}>Start Now 👍</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



