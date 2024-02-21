import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Mobileverify/Mobileverify.css";


export default function ResetPassword({ changeAuthMode }) {
  const navigate = useNavigate();
  const [mobileverify, setMobileverify] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlesucess = () => {
    // Set authMode to reset password
    console.log("Mobile..");
    navigate('/sucess')
   
  };
  const handlecancel = () => {
    navigate('/')
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the OTP and reset the password
    // You can make an API call to your backend to handle this functionality

    // For demonstration purposes, let's just log the inputs
    console.log("mobilenumber:", mobileverify);
    console.log("OTP:", otp);
    // console.log("New Password:", newPassword);

    // After successfully resetting the password, you can show a success message
    setSuccessMessage("Password reset successfully!");
  };

  return (
    <div class="otp">
      <div >
        <div className="Auth-form-container">
        <div class="boxs">
          <form
            className="Auth-form bg-transparent border border-light text-light"
            onSubmit={handleResetPassword}
          >
           
             <div className=" Auth-form-content">
              <h3 className="Auth-form-title text-light">Mobile Verification</h3>
              {/* <div className="form-group mt-3"> */}
                {/* <input
                  type="text"
                  className="bg-transparent border-0 border-bottom mt-5 text-light"
                  placeholder="Enter Mobile Number"
                  value={mobileverify}
                  onChange={(e) => setMobileverify(e.target.value)}
                  required
                /> */}
              {/* </div>  */}
                <div ><label className="text-light">Enter Your MobileNumber</label></div>
          <div class="mb-3 d-flex justify-content-around">
            <input type="text" class="text-light text-center border border-light bg-transparent col-2 otp-input" id="otp1" maxlength="1" autocomplete="off"/>
            <h1 className="ps-1"> </h1>
            <input type="text" class="text-light text-center border border-light bg-transparent col-2 otp-input" id="otp2" maxlength="1" autocomplete="off"/>
            <h1 className="ps-1"> </h1>

            <input type="text" class="text-light text-center border border-light bg-transparent col-2 otp-input" id="otp4" maxlength="1" autocomplete="off"/>
            <h1 className="ps-1"> </h1>

            <input type="text" class="text-light text-center border border-light bg-transparent col-2 otp-input" id="otp5" maxlength="1" autocomplete="off"/>
            <h1 className="ps-1"> </h1>

            <input type="text" class="text-light text-center border border-light bg-transparent col-2 otp-input" id="otp3" maxlength="1" autocomplete="off"/>
            <h1 className="ps-1"> </h1>

            <input type="text" class="text-light text-center border border-light bg-transparent col-2 otp-input" id="otp6" maxlength="1" autocomplete="off"/>
          </div>
              {/* <div className="form-group mt-3">
                <input
                  type="text"
                  className="bg-transparent border-0 border-bottom mt-5 text-light"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              {/* <div className="form-group mt-3"> */}
                {/* <input
                  type="password"
                  className="bg-transparent border-0 border-bottom mt-5 text-light"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>  */}
              <div className="d-grid gap-2 mt-5">
                <button
                  type="submit"
                  className="btn btn-outline-warning"
                  onClick={handlesucess}
                >
                  Verify
                </button>
              </div>
              <p className="text-center mt-2">
                <span
                  className="link-warning text-warning"
                  onClick={handlecancel}
                >
                  Cancel
                </span>
              </p>
              
            </div>
            
          </form>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
