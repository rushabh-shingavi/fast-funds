import React from "react";

export default function AuthLayout({ children }) {
 

  return (
    <>
      <div className="auth-container">
        <div className="row" style={{ height: "inherit" }}>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 hide-xs login-slide" 
          // style={{background: '#003161'}}
          >
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="auth-render-section">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
