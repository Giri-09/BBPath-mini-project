import { Component,useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate,Link } from 'react-router-dom'
import { validation  } from '../LoginValidation'
import axios from 'axios'

import './index.css'

function LoginPage() {

const [values,setValues]=useState({
  email:"",
  password:""
})
const [errors,setErrors]=useState({
  
})

const navigate=useNavigate();

const handleInput=(event)=>{
  setValues(prev=>({...prev,[event.target.name]: [event.target.value]}))
}

const handleSubmit = async (event) => {
  event.preventDefault();
  const validationErrors = validation(values);
  setErrors(validationErrors);

  if (!validationErrors.email && !validationErrors.password) {
      try {
          const response = await axios.post('http://localhost:8084/login', values);
          const { status, message,jwt_token } = response.data;

          if (status === "Success") {
            Cookies.set('jwt_token', jwt_token, {
              expires: 30,
            })
              navigate("/");
          } else {
              alert(message);  // Display the error message from the server
          }
      } catch (err) {
          console.log(err);
          alert("An error occurred while logging in.");
      }
  }
};
    return (
      <div className="login-form-container">
        <img
          src="/images/login.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="/images/login.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container pt-0" action="" onSubmit={handleSubmit}>
          <div className='d-flex align-items-center justify-content-start w-100 '>
          <img src="/images/login-logo.png" alt="BBPath" className='login-logo me-2'/>
          </div>  
            <div className='mb-3 '>
              <label htmlFor="email" className="mb-1"><strong>Email:</strong></label><br />
              <input id="email" type="email" placeholder='Enter Email' className='form-control rounded-0' onChange={handleInput} name="email" />
              {errors.email && <span className='text-danger'>{errors.email }</span>} 
          </div> 
          <div className='mb-3 '>
              <label htmlFor="password"className="mb-1"><strong>Password:</strong></label><br />
              <input id="password" type="password" placeholder='Enter Password ' className='form-control rounded-0' onChange={handleInput} name="password"/>
              {errors.password && <span className='text-danger'>{errors.password }</span>} 
          </div>
          <button className='btn btn-outline-info w-100 mb-3 rounded-0 ' type='submit'><strong>Log in </strong></button>
          <p>You are agree to our terms and policies</p>
         <Link to="/signup"> <button className='btn btn-default  border w-100 bg-light rounded-0 text-decoration-none'>Create Account</button></Link> 
        </form>
      </div> 
    )
}

export default LoginPage
