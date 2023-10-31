import React, { useState } from 'react';
import '../../../assets/css/project.css';
// import Logos from '../../../assets/image/imgregis/par.PNG';
import Logo2 from '../../../assets/image/imgregis/BeliKuy.png';
function ContentLogin({handleSubmit,handleInputChange,ToastContainer}) {

  return (
      
<>
<div id='container-login'>
    <div className='content-login' >
    <img className='logo-par' src={Logo2}alt="logo" />
    <ToastContainer/>
    <form className='form-login'onSubmit={handleSubmit} >
         <img className='prima-logo' src={Logo2}alt="logo" />
    <h1>Login Here</h1>
         <input
            type="email"
            name="email"
            placeholder="Your email"
            className="login-input"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="login-input"
            onChange={handleInputChange}
          />
          <button className="btn-Login">Login</button>
          
      </form>
    </div>
</div>
    
</>
    );
  }
  
  export default ContentLogin;