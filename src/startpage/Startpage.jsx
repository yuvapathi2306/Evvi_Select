// // import React from 'react'
// import './startpage.css'
// import logo from '../startpage/logo.png';
// import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react';
// import Sidebar from './Sidebar';



// function Startpage() {
//   return (
 
//     <>
//     <div class='bg'>
//     <div class='bg1'><img src={logo} alt="Logo" height={50} width={100}/>
// <button type='button' class="demobtn">View Demo</button>
//   </div>
//   <div class="icon"><FontAwesomeIcon icon={faCircleUser} /></div>
 

// <div class='drop'>
// <div class="dropdown">
//   <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Saravanan T
//   <span class="caret"></span></button>
//   <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
//     <li role="presentation"><a role="menuitem" href="#">HTML</a></li>
//     <li role="presentation"><a role="menuitem" href="#">CSS</a></li>
//     <li role="presentation"><a role="menuitem" href="#">JavaScript</a></li>
//     <li role="presentation" class="divider"></li>
//     <li role="presentation"><a role="menuitem" href="#">About Us</a></li>
//   </ul>
// </div>
// </div>
//   </div>
//   <Sidebar/>

//     </>
//   )
//   }
  
  // export default Startpage




  // import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.png'; 
// import '../startpage/startpage.css'

// function Startpage() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='bg'>
//       <div className='bg1'>
//         <img src={logo} alt="Logo" height={50} width={100} />
//         </div>

//         <div><button type='button' className="demobtn">View Demo</button></div>
        
        
//       <div className="icon">
//         <FontAwesomeIcon icon={faCircleUser} />
//       </div>
//     </div>
//   );
// }

// export default Startpage;


// import React from 'react';
// // import {  Link } from "react-router-dom";
// import bgimage from '../startpage/bg5.jpeg';
// // import "bootstrap";
// import "../Navbar/Navbar.css"
// // import Signup from '../Signup/Signup';
// // import { useNavigate } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import '../startpage/startpage.css';
// import Sidebar from './Sidebar';
// // import { Navbar } from 'react-bootstrap';
// // import Navbar from "../Navbar/Navbar";
// import '../startpage/startpage.css'




// function Startpage() {
//   // const navigate = useNavigate()

//   return (

//     <>
//     <div class='bg'>

//             {/* <Navbar name={"Home"} path={"/"} /> */}

//     <div className="px-lg-4 pt-3">
//                 {/* <div className="bg-light border-light border container-flid d-flex justify-content-between p-3 rounded-4 shadow sticky-top">
// // 
//                     <img src={Logo} alt="Logo" height={50} width={100}/> */}

//                     {/* <div className="px-5">
//                         <button className="btn btn-warning px-5 mb-1" onClick={handleClick} >  <div class="icon"><FontAwesomeIcon icon={faCircleUser} /></div>
// <h6 className='text-secondary mb-3 text-center'>Saravanan P </h6><i className={props.icon}></i> {props.name}</button> 
//                     </div> */}

//                 {/* </div> */}
//             </div>
    
//       <Sidebar/>
//       <div class="bgimage">      <div class="mt-5">  
//         <form action="/">  
//           <div class="input-group mb-4">  
//             <input type="search" placeholder="Enter your company name eg:google,apex..." aria-describedby="button-addon5"  class="form-control" />  
//             <div class='inputbox'>
//               <div class="input-group-append">  
//               <button id="button-addon5" type="submit" class="btn btn-primary"> <i class="fa fa-search"> </i> </button>  
//             </div>  
//             </div>
//           </div>  
//           </form>
//           </div>
//       </div>
//       </div>
 
//   </>
//   );
// }
// export default Startpage;



// import React from 'react';
// // import bgimage from '../startpage/bg5.jpeg';
// import "../Navbar/Navbar.css"
// import '../startpage/startpage.css';
// import Sidebar from '../startpage/Sidebar';

// function Startpage() {
//   return (
//     <>
//       {/* <div className="img-fluid" style={{ backgroundImage: `url(${bgimage})` }}> */}
//         {/* <div className="px-lg-4 pt-3"> */}
//           {/* Your other content */}
//         {/* </div> */}
//         <Sidebar/>
//         <h3 className="text-center mt-4">Let's find your Right Canditate</h3>
//         <h6 className="text-center mt-4">Nearly 1million companies already have an Evvi Select profile</h6>
      

//           <div className="mt-5">
//           <label class="label">Search your company🔎</label>

//             <form action="/">

//               <div className="input-group mb-4">
//                   <input type="search" placeholder="Enter your company name eg:google,apex..." aria-describedby="button-addon5"  className="ibox" />
//                   <div className="input-group-append text-center">
//                     <button id="button-addon5" type="submit" className="btn btn-primary"> <i className="fa fa-search"> </i> </button>
//                   </div>
              
//               </div>
//             </form>
//           </div>
        
      /* </div> */
//     </>
//   );
// }

// export default Startpage;





import React from 'react';
import "../startpage/Sidebar.css"
import "../startpage/startpage.css"
// import { Link } from 'react-router-dom';
// import logo from "../Navbar/logo.png"
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";
import "../startpage/Sidebar";
import Sidebar from '../startpage/Sidebar';
import Dashboard from '../Pages/Dashboard/Dashboard';
// import { Link } from 'react-router-dom'; // Import Link from React Router


const Startpage = () => {
  // const [View, setview] = useState(false);
  // const navigate = useNavigate()


  // const [isLightMode, setIsLightMode] = useState(true);

  // const toggleLightMode = () => {
  //   setIsLightMode(prevMode => !prevMode);
  // };


  return (

<>

{/* <div className={isLightMode ? 'light-mode' : 'light-mode'}>

<Link to="/startpage" onClick={toggleLightMode}>
{isLightMode ? 'Switch to Light Mode' : 'Switch to Light Mode'}
</Link>
</div> */}
         <Sidebar/>
         <Dashboard/>

      {/* <h4 class="text">Find your Right Canditates</h4>
        <h6 className="edit">Nearly 1million companies already have an Evvi Select profile</h6>
      

          <div className="mt-5">
          <label class="label">Search your company🔎</label>

            <form action="/">
              <div className="input-group mb-4">
                  <input type="search" placeholder="Enter your company name eg:google,apex..." aria-describedby="button-addon5"  className="inputbox" />
               {/* <div className="input-group-append text-center"> */}
                    {/* /* <button id="button-addon5" type="submit" className="btn btn-primary"> <i className="fa fa-search"> </i> </button> */} 
                   {/* </div>  */}
              
              {/* </div> */}
          {/* //   </form> */}
          {/* // </div>  */} 
   
    </>
  );
};

export default Startpage;




