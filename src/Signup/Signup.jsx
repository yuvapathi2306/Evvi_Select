// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import ResetPassword from "./ResetPassword"; // Import the ResetPassword component
// import "../Signup/Signup.css";
// import { useNavigate } from "react-router-dom";
// import "bootstrap";
// // import Auth from "../Auth/Auth";
// // import Mobileverify from "../Mobileverify/Mobileverify"


// export default function AuthPage(props) {
//   const navigate = useNavigate();

//   let [authMode, setAuthMode] = useState("signin");

//   const changeAuthMode = () => {
//     setAuthMode(authMode === "signin" ? "signup" : "signin");
//   };

//   const handleForgotPassword = () => {
//     // Set authMode to reset password
//     setAuthMode("resetPassword");
//   };
//   const handleMobileverify = () => {
//     // Set authMode to reset password
//     console.log("Mobile..");
//     navigate('/mobileverify');
   
//   };


 
//   if (authMode === "signin") {
//     return (
//       <div class="box">
//         <Navbar name={"Home"} path={"/"} />
//         <div class="box1 ">
//           <div className="Auth-form-container ">
//             <form className="Auth-form bg-transparent border border-light text-light">
//               <div className="Auth-form-content">
//                 <h3 className="Auth-form-title text-light">Sign In</h3>
//                 <div className="text-center">
//                   Not registered yet?{" "}
//                   <span className="link-warning" onClick={changeAuthMode}>
//                     Sign Up
//                   </span>
//                 </div>
//                 <div className="form-group mt-3">
//                   <input
//                     type="email"
//                     className="bg-transparent border-0 border-bottom mt-5 text-light"
//                     placeholder="Enter email"
//                     required
//                   />{" "}
//                   <i class="bx bxs-user"></i>
//                 </div>
//                 <div className="form-group mt-3 ">
//                   <input
//                     type="password"
//                     className="bg-transparent border-0 border-bottom mt-5 text-light"
//                     placeholder="Enter password"
//                     required
//                   />
//                 </div>
//                 {/* <div className="d-grid gap-2 pt-5">
//                   <button type="submit" className="btn btn-outline-warning">
//                     <span className="">Login</span>
//                   </button>
//                 </div> */}
//                 <div className="d-grid gap-2 mt-3">
//                   <button onClick={handleMobileverify} className="btn btn-outline-warning">
//                     <span > Login</span>
//                   </button>
//                 </div>
//                 <p className="text-center mt-2">
//                   Forgot{" "}
//                   <a
//                     href="#"
//                     className=" text-warning"
//                     onClick={handleForgotPassword} // Call handleForgotPassword when clicked
//                   >
//                     password?
//                   </a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (authMode === "signup") {
//     return (
//       <>
//         <div class="box">
//           <Navbar name={"Home"} path={"/"} />

//           <div className="Auth-form-container">
//             <form className="Auth-form bg-transparent border border-light text-light ">
//               <div className="Auth-form-content">
//                 <h3 className="Auth-form-title text-light ">Signup</h3>
//                 <div className="text-center">
//                   Already registered?{" "}
//                   <span className="link-warning" onClick={changeAuthMode}>
//                     Sign In
//                   </span>
//                 </div>
//                 <div className="form-group mt-3 justify-center align-center ">
//                   {/* <label>Full Name</label> */}
//                   <input
//                     type="text"
//                     className="bg-transparent border-0 border-bottom mt-2 text-light"
//                     placeholder="e.g Jane Doe"
//                     required
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   {/* <label>Email address</label> */}
//                   <input
//                     type="email"
//                     className="bg-transparent border-0 border-bottom mt-5 text-light"
//                     placeholder="Email Address"
//                     required
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   {/* <label>Password</label> */}
//                   <input
//                     type="password"
//                     className="bg-transparent border-0 border-bottom mt-5 text-light"
//                     placeholder="Password"
//                     required
//                   />
//                 </div>
//                 <div className="d-grid gap-2 mt-3">
//                   <button onClick={handleMobileverify} className="btn btn-outline-warning">
//                     <span > Register</span>
//                   </button>
//                 </div>
//                 <p className="text-center mt-2">
//                   {" "}
//                   <a href="#" className=" text-warning">
//                     Terms & condition
//                   </a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Render the ResetPassword component when authMode is resetPassword
//   if (authMode === "resetPassword") {
//     return <ResetPassword changeAuthMode={changeAuthMode} />;
//   }
// }



import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import ResetPassword from "./ResetPassword";
import "../Signup/Signup.css";
import { useNavigate } from "react-router-dom";
import "../Mobileverify/Mobileverify"

export default function AuthPage(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [authMode, setAuthMode] = useState("signin");

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      const SubmitEvent = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (SubmitEvent) {
        navigate("/mobileverify");
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("An error occurred while signing in.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      setError("All fields are required.");
      return;
    }
    try {
      const SubmitEvent = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, fullName }),
      });
      if (SubmitEvent) {
        navigate('/mobileverify');
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while signing up.");
    }
  };

  const changeAuthMode = () => {
    setAuthMode((prevMode) => (prevMode === "signin" ? "signup" : "signin"));
  };

  // const handleMobileverify = () => {
  //       // Set authMode to reset password
  //       console.log("Mobile..");
  //       navigate('/mobileverify');
       
  //     };

  return (
    <div class="box2"> 
    <div> 
      <Navbar name={"Home"} path={"/"} />
      </div>
      {/* <div className="card"> */}
        <div className="row justify-content-center mt-5">
        <div className="col-md-6">
        <div class="pages">
          <div className="card bg-transparent">
            <div class="page-body">            
              <div className="card-body">
              <h3 className="card-title text-center text-light">
                {authMode === "signin" ? "Sign In" : "Sign Up"}
              </h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={authMode === "signin" ? handleSignIn : handleSignUp}>
                {authMode === "signup" && (
                  <>
                  <div className="mb-4">
                    <label className="text-label">Enter full name</label>
                    <input
                      type="text"
                      className="form-control"
                      // placeholder="Enter full name"
                      // value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-label">Enter Mobile number</label>
                    <input
                      type="number"
                      className="form-control"
                      // placeholder="Enter full name"
                      // value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  </>
                )}
    
                <div className="mb-3">
                <label className="text-label">Enter email</label>

                  <input
                    type="email"
                    className="form-control"
                    // placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                <label className="text-label">Enter Password</label>

                  <input
                    type="password"
                    className="form-control"
                    // placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="buttonn">                
                <div className="d-grid">

                  <button type="submit" className="btn btn-warning">
                    <span className="link-warning text-dark" >
                    {authMode === "signin" ? "Sign In" : "Sign Up"}
                    </span>


                  </button>
                </div>
                </div>

              </form>
              <p className="text-center mt-3">
                {authMode === "signin"
                  ? "Not registered yet? "
                  : "Already registered? "}
                <span className="link-warning" onClick={changeAuthMode}>
                  {authMode === "signin" ? "Sign Up" : "Sign In"}
                </span>
              </p>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </div>

  );
}






