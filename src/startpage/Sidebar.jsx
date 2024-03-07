// // // import React, { useState } from 'react';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faBars, faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// // // import '../startpage/Sidebar.css';

// // // const Sidebar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   const toggleSidebar = () => {
// // //     setIsOpen(!isOpen);
// // //   };

// // //   return (
// // //     <div className={isOpen ? 'sidebar open' : 'sidebar'}>
// // //       <div className="toggle-button" onClick={toggleSidebar}>
// // //         <FontAwesomeIcon icon={faBars} />
// // //       </div>
// // //       <ul>
// // //         <li><FontAwesomeIcon icon={faHome} /> Home</li>
// // //         <li><FontAwesomeIcon icon={faUser} /> Profile</li>
// // //         <li><FontAwesomeIcon icon={faCog} /> Settings</li>
// // //         <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;

// // import 'bootstrap/dist/css/bootstrap.min.css';  
// // import { Button, Container, Offcanvas } from 'react-bootstrap';  
// // import {useState} from 'react'  
// // import '../startpage/Sidebar.css';
// // import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// // function Sidebar() {  
// //   const [show, setShow] = useState(false);  
// //   const closeSidebar = () => setShow(false);  
// //   const showSidebar = () => setShow(true);  
  
// //   return (  
// //     <>  
// //     <div class="sidebar">
// //     <Container className='p-4'>  
// //       <Button variant="primary" onClick={showSidebar}>  
// //    MENU <FontAwesomeIcon icon="fa-solid fa-angle-right" /> 
// //       </Button>  
// //       <Offcanvas backdrop='false' show={show} onHide={closeSidebar}>  
// //         <Offcanvas.Header closeButton>  
// //           <Offcanvas.Title>Sidebar Title</Offcanvas.Title>  
// //         </Offcanvas.Header>  
// //         <Offcanvas.Body>  
// //           In this OffCanvas backdrop will not work.  
// //         </Offcanvas.Body>  
// //       </Offcanvas>  
// //       </Container>  
// //       </div>
// //     </>  
// //   );  
// // }  
// // export default Sidebar;  

// // import 'bootstrap/dist/css/bootstrap.min.css';  
// // import { Button, Container, Offcanvas } from 'react-bootstrap';  
// // import { useState } from 'react';  
// // import '../startpage/Sidebar.css';
// // import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // function Sidebar() {  
// //   const [show, setShow] = useState(false);  

// //   const handleClose = () => setShow(false);  
// //   const handleShow = () => setShow(true);  
  
// //   return (  
// //     <>  
// //       <div className="sidebar">
// //         <Container class="containbox">  
// //           <Button variant="secondary" onClick={handleShow}>  
// //             <FontAwesomeIcon icon={faAngleRight}  /> 
// //           </Button>  
// //           <Offcanvas show={show} onHide={handleClose} width={200} height={400}>  
// //             <Offcanvas.Header closeButton>  
// //               <Offcanvas.Title>MENU</Offcanvas.Title>  
// //             </Offcanvas.Header>  
// //             <Offcanvas.Body>  
// //             <Offcanvas.Body>
// //             <Offcanvas.Body>
// //             <a href='#'>JOB Post</a>
// //             </Offcanvas.Body>
// //             </Offcanvas.Body>
// //             <Offcanvas.Body>  
// //             <Offcanvas.Body>
// //             <a href='#'>Shortlisted</a>
// //             <Offcanvas.Body class='submenu'> 
// //                 Selected Canditates
// //                 Rejected Canditates
// //             </Offcanvas.Body>
// //             </Offcanvas.Body>
// //             </Offcanvas.Body>
// //             <Offcanvas.Body>  
// //             <Offcanvas.Body>
// //            <a href='#'> Reviews</a>
// //             </Offcanvas.Body>
// //             </Offcanvas.Body>
// // </Offcanvas.Body>  

// //           </Offcanvas>  
// //         </Container>  
// //       </div>
// //     </>  
// //   );  
// // }  

// // export default Sidebar;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container, Offcanvas } from 'react-bootstrap';
// import { useState } from 'react';
// import '../startpage/Sidebar.css';
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Sidebar() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <div className="sidebar">
//         <Container className="containbox">
//           <Button variant="secondary" onClick={handleShow}>
//             <FontAwesomeIcon icon={faAngleLeft} />
//           </Button>
//           <Offcanvas show={show} onHide={handleClose} placement="start" width={200} height={400}>
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>MENU</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <ul>
//                 <li>
//                   <a href='#'>JOB Post</a>
//                 </li>
//                 <li>
//                   <a href='#'>Shortlisted</a>
//                   <ul className="submenu">
//                     <li>Selected Candidates</li>
//                     <li>Rejected Candidates</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href='#'>Reviews</a>
//                 </li>
//               </ul>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default Sidebar;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container, Offcanvas } from 'react-bootstrap';
// import { useState } from 'react';
// import '../startpage/Sidebar.css';
// import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";



// function Sidebar() {
//   const navigate = useNavigate()

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Navbar name={"Home"} path={"/"} />

//       <div className="sidebar pt-2">

//       <div class="background">
//         <Container className="containbox">
         
//           <Button variant="primary" onClick={handleShow}>
//             <FontAwesomeIcon icon={faAnglesRight} />
//           </Button>
//           <Offcanvas show={show} onHide={handleClose} placement="end" width={200} height={400}>
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>MENU</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <ul>
//                 <li>
//                   <a href='#'>JOB Post</a>
//                 </li>
//                 <li>
//                   <a href='#'>Shortlisted</a>
//                   <ul className="submenu">
//                     <li>Selected Candidates</li>
//                     <li>Rejected Candidates</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href='#'>Reviews</a>
//                 </li>
//               </ul>
//             </Offcanvas.Body>
//           </Offcanvas>
          
//         </Container>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;





// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container, Offcanvas } from 'react-bootstrap';
// import { useState } from 'react';
// import '../startpage/Sidebar.css';
// import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { useNavigate } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";

// function Sidebar() {
//   // const navigate = useNavigate()

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Navbar name={"Home"} path={"/"} />

//       <div className="sidebar pt-2">

//       <div class="background">
//         <Container className="containbox">
         
          // <Button variant="primary" onClick={handleShow}>
//             <FontAwesomeIcon icon={faAnglesRight} />
//           </Button>
//           <div class="side">
//           <Offcanvas show={show} onHide={handleClose} placement="start" width={200} height={100} className="offcanvas">
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>MENU</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <ul>
//                 <li class='list1'>
//                   <a href='#'>JOB Post</a>
//                 </li>
//                 <li class='list2'>
//                   <a href='#'>Shortlisted</a>
//                   <ul className="submenu">
//                     <li class='sublist1'>Selected Candidates</li>
//                     <li class='sublist2'>Rejected Candidates</li>
//                   </ul>
//                 </li>
//                 <li class='list3'>
//                   <a href='#'>Reviews</a>
//                 </li>
//               </ul>
//             </Offcanvas.Body>
//           </Offcanvas>
//           </div>
//         </Container>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;




// import React from 'react';
// import "../startpage/Sidebar.css"
// // import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   // const [show, setShow] = useState(false);

//   return (
//     <div class="overlay">
//       <div class="view">
//     {/* <main className={show ? 'space-toggle' : null}>
//       <header className={`header ${show ? 'space-toggle' : null}`}>
//         <div className='header-toggle' onClick={() => setShow(!show)}>
//           <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
//         </div>
//       </header>

//       <aside className={`sidebar ${show ? 'show' : null}`}>
//         <nav className='nav text-dark'>
//           <div className='text-dark'>
//             <Link to='/' className='nav-logo'>
//               <i className={`fas fa-home-alt nav-logo-icon`}></i>
//               <span className='nav-logo-name text-dark'>Homepage</span>
//             </Link>

//             <div className='nav-list'>
//               <Link to='/dashboard' className='nav-link active'>
//                 <i className='fas fa-tachometer-alt nav-link-icon'></i>
//                 <span className='nav-link-name text-dark'>Dashboard</span>
//               </Link>
//               <Link to='/hotel' className='nav-link'>
//                 <i className='fas fa-hotel nav-link-icon'></i>
//                 <span className='nav-link-name'>Hotel</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-image nav-link-icon'></i>
//                 <span className='nav-link-name'>Gallery</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-dollar-sign nav-link-icon'></i>
//                 <span className='nav-link-name'>Transaction</span>
//               </Link>
//             </div>
//           </div>

//           <Link to='/logout' className='nav-link'>
//             <i className='fas fa-sign-out nav-link-icon'></i>
//             <span className='nav-link-name'>Logout</span>
//           </Link>
//         </nav>
//       </aside>

//       {/* <h1 class="content">Content</h1> */}

//       <div className="text">Let's find your Right Canditate</div>
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
        
//     {/* </main> */}
//     </div> 
//     </div> 
//   );
// };

// export default Sidebar;




// import React, { useState } from 'react';
// import "../startpage/Sidebar.css"
// import "../startpage/startpage.css"
// import { Link } from 'react-router-dom';
// // import logo from "../Navbar/logo.png"
// // import { useNavigate } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";
// import "../startpage/Sidebar";
// // import Sidebar from '../startpage/Sidebar';


// const Sidebar = () => {
//   const [View, setview] = useState(false);
//   // const navigate = useNavigate()

//   return (
//     <div class="overlay">
//       <div class="view">
//     <main Navbar name={"Home"} path={"/"} >
   
//       <div className={`header ${View ? 'space-toggle' : null} fixed-bottom`}>
//         <div className='header-toggle' onClick={() => setview(!View)}>
//           <i className={`fas fa-angle-double-right ${View ? 'fa-solid fa-xmark' : null} ` }></i>
//             <div class="bar"><Navbar name={"Home"} path={"/"} /></div>
//         </div>
//       </div>
   
//       <aside className={`sidebar ${View ? 'view' : null}`}>
//         <nav className='nav text-dark'>
          
//           <div className='text-dark'>
           


//             <div className='nav-list'>
//             <Link to='/' className='nav-logo'>
//               <i className={`fas fa-home-alt nav-logo-icon`}></i>
//               <span className='nav-logo-name text-light'>Homepage</span>
//             </Link>
              
//               <Link to='/hotel' className='nav-link'>
//                 <i className='fas fa-handshake nav-link-icon'></i>
//                 <span className='nav-link-name'>Job Post</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-circle-check nav-link-icon'></i>
//                 <span className='nav-link-name'>Shortlisted</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-circle-check nav-link-icon'></i>
//                 <span className='nav-link-name'>SelectedCanditate</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-circle-xmark nav-link-icon'></i>
//                 <span className='nav-link-name'>RejectedCanditate</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-face-grin-stars nav-link-icon'></i>
//                 <span className='nav-link-name'>Reviews</span>
//               </Link>

//             </div>
//             <Link to='/logout' className='nav-link'>
//             <i className='fas fa-sign-out nav-link-icon'></i>
//             <span className='nav-link-name'>Logout</span>
//           </Link>

           
//           </div>

//           {/* <Link to='/logout' className='nav-link'>
//             <i className='fas fa-sign-out nav-link-icon'></i>
//             <span className='nav-link-name'>Logout</span>
//           </Link> */}
//           </nav>  
//       </aside>
    
//       {/* <h1 class="content">Content</h1> */}

//       {/* <h4 class="text">Find your Right Canditates</h4>
//         <h6 className="edit">Nearly 1million companies already have an Evvi Select profile</h6>
      

//           <div className="mt-5">
//           <label class="label">Search your company🔎</label>

//             <form action="/">
//               <div className="input-group mb-4">
//                   <input type="search" placeholder="Enter your company name eg:google,apex..." aria-describedby="button-addon5"  className="inputbox" />
//                {/* <div className="input-group-append text-center"> */}
//                     {/* <button id="button-addon5" type="submit" className="btn btn-primary"> <i className="fa fa-search"> </i> </button> */}
//                   {/* </div>  */}
              
//               {/* </div> */}
//             {/* </form> */}
//           {/* </div>  */}
//          {/* <Sidebar/> */}
//     </main>
//     </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import "../startpage/Sidebar.css"
// import "../startpage/startpage.css"
// import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";

// const Sidebar = () => {
//   const [view, setView] = useState(false);

//   return (
//     <div className="overlay">
//       <div className="view">
//         <main>
//           <div className={`header ${view ? 'space-toggle' : null} fixed-bottom`}>
//             <div className='header-toggle' onClick={() => setView(!view)}>
//               <i className={`fas fa-angle-double-right ${view ? 'fa-solid fa-xmark' : null} `}></i>
//               <div className="bar"><Navbar name={"Home"} path={"/"} /></div>
//             </div>
//           </div>
//           <aside className={`sidebar ${view ? 'view' : 'invisible'} `}>
//             <nav className='nav text-dark'>
//               <div className='text-dark'>
//                 <div className='nav-list'>
//                   {/* <Link to='/' className='nav-logo'>
//                     <i className={`fas fa-home-alt nav-logo-icon`}></i>
//                     <span className='nav-logo-name text-light'>Homepage</span>
//                   </Link> */}
//                   <div className="nav-submenu ">
//                     <div className="nav-link">
//                       <i className='fas fa-handshake nav-link-icon'></i>
//                       <span className='nav-link-name'>Job Post</span>
//                     </div>
//                     <div className="nav-link">
//                       <i className='fas fa-clipboard-list nav-link-icon'></i>
//                      <div class="shortlist"> <span className='nav-link-name ms-2'>Shortlisted</span></div>
//                       <div className="nav-submenu">
//                         <Link to='/gallery' className='nav-link'>
//                           <i className='fas fa-circle-check nav-link-icon'></i>
//                           <span className='nav-link-name'>Selected</span>
//                         </Link>
//                         <Link to='/gallery' className='nav-link'>
//                           <i className='fas fa-circle-xmark nav-link-icon'></i>
//                           <span className='nav-link-name'>Rejected</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   {/* <Link to='/gallery' className='nav-link'>
//                     <i className='fas fa-circle-check nav-link-icon'></i>
//                     <span className='nav-link-name'>SelectedCandidate</span>
//                   </Link>
//                   <Link to='/gallery' className='nav-link'>
//                     <i className='fas fa-circle-xmark nav-link-icon'></i>
//                     <span className='nav-link-name'>RejectedCandidate</span>
//                   </Link> */}
//                   <Link to='/gallery' className='nav-link'>
//                     <i className='fas fa-face-grin-stars nav-link-icon'></i>
//                     <span className='nav-link-name'>Reviews</span>
//                   </Link>
//                 </div>
//                 <Link to='/logout' className='nav-link'>
//                   <i className='fas fa-sign-out nav-link-icon'></i>
//                   <span className='nav-link-name'>Logout</span>
//                 </Link>
//               </div>
//             </nav>
//           </aside>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import "../startpage/Sidebar.css"
// import "../startpage/startpage.css"
// import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";

// const Sidebar = () => {
//   const [view, setView] = useState(false);

//   const openCandidatesWindow = (status) => {
//     if (status === 'selected') {
//       window.open('/selectedCandidates', '_blank');
//     } else if (status === 'rejected') {
//       window.open('/rejectedCandidates', '_blank');
//     }
//   };

//   return (
//     <div className="overlay">
//       <div className="view">
//         <main>
//           <div className={`header ${view ? 'space-toggle' : null} fixed-bottom`}>
//             <div className='header-toggle' onClick={() => setView(!view)}>
//               <i className={`fas fa-angle-double-right ${view ? 'fa-solid fa-xmark' : null} `}></i>
//               <div className="bar"><Navbar name={"Home"} path={"/"} /></div>
//             </div>
//           </div>
//           <aside className={`sidebar ${view ? 'view' : 'invisible'} `}>
//             <nav className='nav text-dark'>
//               <div className='text-dark'>
//                 <div className='nav-list'>
//                   <div className="nav-submenu ">
//                     <div className="nav-link">
//                       <i className='fas fa-handshake nav-link-icon'></i>
//                       <span className='nav-link-name'>Job Post</span>
//                     </div>
//                     <div className="nav-link">
//                       <i className='fas fa-clipboard-list nav-link-icon'></i>
//                      <div class="shortlist"> <span className='nav-link-name ms-2'>Shortlisted</span></div>
//                       <div className="nav-submenu">
//                         <button className='nav-link' onClick={() => openCandidatesWindow('selected')}>
//                           <i className='fas fa-circle-check nav-link-icon'></i>
//                           <span className='nav-link-name'>Selected</span>
//                         </button>
//                         <button className='nav-link' onClick={() => openCandidatesWindow('rejected')}>
//                           <i className='fas fa-circle-xmark nav-link-icon'></i>
//                           <span className='nav-link-name'>Rejected</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <Link to='/gallery' className='nav-link'>
//                     <i className='fas fa-face-grin-stars nav-link-icon'></i>
//                     <span className='nav-link-name'>Reviews</span>
//                   </Link>
//                 </div>
//                 <Link to='/logout' className='nav-link'>
//                   <i className='fas fa-sign-out nav-link-icon'></i>
//                   <span className='nav-link-name'>Logout</span>
//                 </Link>
//               </div>
//             </nav>
//           </aside>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import "../startpage/Sidebar.css"
// import "../startpage/startpage.css"
// import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";

// const Sidebar = () => {
//   const [view, setView] = useState(false);
//   // const [isShortlistOpen, setIsShortlistOpen] = useState(false);

//   // const toggleShortlist = () => {
//   //   setIsShortlistOpen(!isShortlistOpen);
//   // };

//   return (
//     <>
//     <div className="overlay">
//       <div className="view">
//         <main>
//           <div className={`header ${view ? 'space-toggle' : null} fixed-bottom`}>
//             <div className='header-toggle' onClick={() => setView(!view)}>
//               <i className={`fas fa-angle-double-right ${view ? 'fa-solid fa-xmark' : null} `}></i>
//               <div className="bar"><Navbar name={"Home"} path={"/"} /></div>
//             </div>
//           </div>
//           <aside className={`sidebar ${view ? 'view' : 'invisible'} `}>
//             <nav className='nav text-dark'>
//               <div className='text-dark'>
//                 <div className='nav-list'>
//                   {/* <div className="nav-submenu "> */}
//                     <div className="nav-link">
//                       <Link to='/Jobpost' className='nav-link'>
//                       <i className='fas fa-handshake nav-link-icon'></i>
//                       <span className='nav-link-name'>Job Post</span>
//                       </Link>
//                     </div> 
//                     <div className="nav-link">
//                       <Link to='/Interview' className='nav-link'>
//                       <i className='fas fa-handshake nav-link-icon'></i>
//                       <span className='nav-link-name'>Interview</span>
//                       </Link>
//                     </div>
//                     {/* <div className="nav-link" onMouseEnter={toggleShortlist} onMouseLeave={toggleShortlist}> */}
//                       <div className="nav-link">
//                         <Link to='/Interview' className='nav-link'>
//                         <i className='fas fa-clipboard-list nav-link-icon'></i>
//                       <span className='nav-link-name'>Shortlisted</span>
//                       </Link>
//                       </div>
//                       {/* <i className={`fas fa-angle-down dropdown-icon ${isShortlistOpen ? 'open' : ''}`}></i> */}
//                       {/* <div className={`nav-submenu ${isShortlistOpen ? 'open' : ''}`}> */}
//                         {/* <div className='nav-link'>
//                           <i className='fas fa-circle-check nav-link-icon'></i>
//                           <span className='nav-link-name'>Selected</span> */}
//                           {/* <div className="submenu-items">
//                             <Link to='/selectedCandidates' className='nav-link'>
//                             <i className='fas fa-circle-check nav-link-icon'></i>

//                               <span className='nav-link-name'>Selected</span>
//                             </Link> */}
//                             {/* <Link to='/selectedCandidates' className='nav-link'>
//                               <span className='nav-link-name'>Option 2</span>
//                             </Link> */}
//                           {/* </div> */}
//                         {/* </div> */}
//                         {/* <div className='nav-link'> */}
//                           {/* <i className='fas fa-circle-xmark nav-link-icon'></i> */}
//                           {/* <span className='nav-link-name'>Rejected</span> */}
//                           {/* <div className="submenu-items">
//                             <Link to='/rejectedCandidates' className='nav-link'>
//                         <i className='fas fa-circle-xmark nav-link-icon'></i>

//                               <span className='nav-link-name'>Rejected</span>
//                             </Link> */}
//                             {/* <Link to='/rejectedCandidates' className='nav-link'>
//                               <span className='nav-link-name'>Option 2</span>
//                             </Link> */}
//                           {/* </div> */}
//                         {/* </div> */}
//                       {/* </div> */}
//                     {/* </div> */}
//                 <div className="nav-link">
//                   <Link to='/Reviews' className='nav-link'>
//                     <i className='fas fa-face-grin-stars nav-link-icon'></i>
//                     <span className='nav-link-name'>Reviews</span>
//                   </Link>
//                   </div>
//                 {/* </div> */}
//                 <div className="nav-link">
//                 <Link to='/signup' className='nav-link'>
//                   <i className='fas fa-sign-out nav-link-icon'></i>
//                   <span className='nav-link-name'>Logout</span>
//                 </Link>
//                 </div>
              
//                   </div>
//                 </div>
//               </nav>
//           </aside>
//         </main>
        
//       </div>
      
//     </div>
   
//   </>
//   );
// };

// export default Sidebar;



import React, { useState } from 'react';
import "../startpage/Sidebar.css"
import "../startpage/startpage.css"
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

const Sidebar = () => {
  const [view, setView] = useState(false);


  return (
    <>
    <div className="overlay">
      <div className="view">
        <main>
          <div className={`header ${view ? 'space-toggle' : null} fixed-bottom`}>
            <div className='header-toggle' onClick={() => setView(!view)}>
              <i className={`fas fa-angle-double-right ${view ? 'fa-solid fa-xmark' : null} `}></i>
              <div className="bar"><Navbar name={"Home"} path={"/"} /></div>
            </div>
          </div>
          <aside className={`sidebar ${view ? 'view' : 'invisible'} `}>
            <nav className='nav text-dark'>
              <div className='text-dark'>
                <div className='nav-list'>
                    <div className="nav-link">
                      <Link to='/Jobpost' className='nav-link'>
                      <i className='fas fa-briefcase nav-link-icon'></i>
                      <span className='nav-link-name'>Job Post</span>
                      </Link>
                    </div> 
                    <div className="nav-link">
                      <Link to='/interview' className='nav-link'>
                      <i className='fas fa-handshake nav-link-icon'></i>
                      <span className='nav-link-name'>Interview</span>
                      </Link>
                    </div>
                      <div className="nav-link">
                        <Link to='/shortlisted' className='nav-link'>
                        <i className='fas fa-clipboard-list nav-link-icon'></i>
                      <span className='nav-link-name'>Shortlisted</span>
                      </Link>
                      </div>
                     
                <div className="nav-link">
                  <Link to='/reviews' className='nav-link'>
                    <i className='fas fa-face-grin-stars nav-link-icon'></i>
                    <span className='nav-link-name'>Reviews</span>
                  </Link>
                  </div>
                {/* </div> */}
                <div className="nav-link">
                <Link to='/signup' className='nav-link'>
                  <i className='fas fa-sign-out nav-link-icon'></i>
                  <span className='nav-link-name'>Logout</span>
                </Link>
                </div>
              
                  </div>
                </div>
              </nav>
          </aside>
        </main>
        
      </div>
      
    </div>
   
  </>
  );
};

export default Sidebar;



