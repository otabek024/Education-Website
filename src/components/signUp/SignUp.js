import React from 'react'
import './signup.css'

const SignUp = () => {
  return (
    <>
      <div className="container-fluid signup">
        <div className="container">
          <div className="signup-content">
            <h1 className="signup-title">Sign up for courses</h1>
            <div className="sign-block">
              <input name="fname" type="text" placeholder="Full name"  className="fname"/>
              <input name="pnumber" type="text" placeholder="Phone number"  className="pnumber"/>
              <input name="e-mail" type="email" placeholder="E-mail"  className="e-mail"/>
              <button className="signup-btn">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
