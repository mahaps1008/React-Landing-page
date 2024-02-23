import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { useEffect } from 'react';

function Login() {
  useEffect(() => {
    // Add a class to the body element when the component mounts
    document.body.classList.add('login-page-body');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('login-page-body');
    };
  }, []);
  return (    <div >
    <div className="div1"> facebook</div>
    <div className="container">
     
     <div className="Title"> Create a new account</div>
    
     <form action="#">
      <div className="userdetails">
        <div className='input-box'>
          
          <input type='text' placeholder='First Name'required={true}></input>
        </div>
        <div className='input-box'>
         
          <input type='text' placeholder='Surname'required={true}></input>
        </div>
        <div className='input-box'>
          
          <input type='text' placeholder='Mobile number or email address'required={true}></input>
        </div>
        <div className='input-box'>
          
          <input type='text' placeholder='Newpassword'required={true}></input>
        </div>
        
      </div>
      <div className='gender-details'>
        <input type='radio' name='gender' id='dot-1'></input>
        <input type='radio' name='gender' id='dot-2'></input>
        <input type='radio' name='gender' id='dot-3'></input>
        <span className='gender-title'>Gender</span>
        <div className='category'>
          <label for="dot-1">
            <span className='dot one'></span>
            <span className='gender'>Male</span>
          </label>

          <label for="dot-2">
            <span className='dot two'></span>
            <span className='gender'>Female</span>
          </label>

          <label for="dot-3">
            <span className='dot three'></span>
            +6<span className='gender'>Custom</span>
          </label>
        </div>
      </div>
      <div className='para1'>
        <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p><br></br>
        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
      </div>

      <div className='button'>
     
        <input type='submit' value='Sign up'></input>
       
      </div>
      <div className='bottom'>
        
        <p>Already have an account?</p>
      </div>
     </form>


    
    </div>
    </div>

   
      

    
  )
}

export default Login