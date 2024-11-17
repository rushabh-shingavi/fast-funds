import BANK_LOGO from "client/assets/images/Cash-Connectors.png";

export default function ForgotPassword() {


  return (
    <>
      <div id="Auth">
        <div id="authWrapper" align="center">
        <div className="mb-3" align="center">
              <img
                src={BANK_LOGO}
                height={50}
                alt="Bank Logo"
                className="mb-1"
              />
            </div>

          <div className="auth-card-form" align="center">
            <div className="auth-form-align">
            <div className="login-title mt-1 mb-1">
                            <span>
                            Forgot Password ?
                            </span>
                  </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}





// import React from 'react'

// function Landing() {
//   return (
//     <div>Landing</div>
//   )
// }

// export default Landing