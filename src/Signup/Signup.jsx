import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ResetPassword from "./ResetPassword"; // Import the ResetPassword component
import "../Signup/Signup.css";
import "bootstrap";
import Auth from "../Auth/Auth";

export default function AuthPage(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleForgotPassword = () => {
    // Set authMode to reset password
    setAuthMode("resetPassword");
  };

  if (authMode === "signin") {
    return (
      <div class="box">
        <Navbar name={"Home"} path={"/"} />
        <div class="box1 ">
          <div className="Auth-form-container ">
            <form className="Auth-form bg-transparent border border-light text-light">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title text-light">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-warning" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="bg-transparent border-0 border-bottom mt-5 text-light"
                    placeholder="Enter email"
                  />{" "}
                  <i class="bx bxs-user"></i>
                </div>
                <div className="form-group mt-3 ">
                  <input
                    type="password"
                    className="bg-transparent border-0 border-bottom mt-5 text-light"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 pt-5">
                  <button type="submit" className="btn btn-outline-warning">
                    <span className="link-warning text-dark">Login</span>
                  </button>
                </div>
                <p className="text-center mt-2">
                  Forgot{" "}
                  <a
                    href="#"
                    className=" text-warning"
                    onClick={handleForgotPassword} // Call handleForgotPassword when clicked
                  >
                    password?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (authMode === "signup") {
    return (
      <>
        <div class="box">
          <Navbar name={"Home"} path={"/"} />

          <div className="Auth-form-container">
            <form className="Auth-form bg-transparent border border-light text-light ">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title text-light ">Signup</h3>
                <div className="text-center">
                  Already registered?{" "}
                  <span className="link-warning" onClick={changeAuthMode}>
                    Sign In
                  </span>
                </div>
                <div className="form-group mt-3 justify-center align-center ">
                  {/* <label>Full Name</label> */}
                  <input
                    type="text"
                    className="bg-transparent border-0 border-bottom mt-2 text-light"
                    placeholder="e.g Jane Doe"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  {/* <label>Email address</label> */}
                  <input
                    type="email"
                    className="bg-transparent border-0 border-bottom mt-5 text-light"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  {/* <label>Password</label> */}
                  <input
                    type="password"
                    className="bg-transparent border-0 border-bottom mt-5 text-light"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-outline-warning">
                    <span className="link-warning text-dark"> Register</span>
                  </button>
                </div>
                <p className="text-center mt-2">
                  {" "}
                  <a href="#" className=" text-warning">
                    Terms & condition
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  // Render the ResetPassword component when authMode is resetPassword
  if (authMode === "resetPassword") {
    return <ResetPassword changeAuthMode={changeAuthMode} />;
  }
}
