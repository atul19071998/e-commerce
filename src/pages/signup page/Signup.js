import React from 'react'
import './Signup.css';
import AuthForm from '../../forms/AuthForm'
const Signup = () => {
  return (
    <section className='signup-container'>
     <div className="signup-img-container">
            <img src="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_960_720.jpg" alt="authenticate-background"/>
     </div>
     <div className="signup-content-container">
        <div className="container-wrap">
        <div className="content-wrapper">
            <h2 className='text-danger'>Signup</h2>
            <p>Create a new account with email and password.</p>
            <AuthForm buttonName="Sign Up"/>
        </div>
        </div>
     </div>
    </section>
  )
}

export default Signup
