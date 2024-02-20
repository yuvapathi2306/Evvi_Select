import React, { useState } from "react";

export default function ResetPassword({ changeAuthMode }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the OTP and reset the password
    // You can make an API call to your backend to handle this functionality

    // For demonstration purposes, let's just log the inputs
    console.log("Email:", email);
    console.log("OTP:", otp);
    console.log("New Password:", newPassword);

    // After successfully resetting the password, you can show a success message
    setSuccessMessage("Password reset successfully!");
  };

  return (
    <div class="box">
      <div class="box1 ">
        <div className="Auth-form-container">
          <form
            className="Auth-form bg-transparent border border-light text-light"
            onSubmit={handleResetPassword}
          >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title text-light">Reset Password</h3>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="bg-transparent border-0 border-bottom mt-5 text-light"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="bg-transparent border-0 border-bottom mt-5 text-light"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="bg-transparent border-0 border-bottom mt-5 text-light"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-outline-warning"
                >
                  Reset Password
                </button>
              </div>
              <p className="text-center mt-2">
                <span
                  className="link-warning text-warning"
                  onClick={() => changeAuthMode()}
                >
                  Back to Sign In
                </span>
              </p>
              {errorMessage && (
                <div className="text-danger text-center mt-2">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="text-success text-center mt-2">
                  {successMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
