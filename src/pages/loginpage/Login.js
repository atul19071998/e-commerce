import React from 'react'
import './Login.css';
import AuthForm from '../../forms/AuthForm'
const Login = () => {
  return (
    <section className='signup-container'>
     <div className="signup-img-container">
            <img src=" https://images.unsplash.com/photo-1571688144157-25db897a81ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="authenticate-background"/>
     </div>
     <div className="signup-content-container">
        <div className="container-wrap">
        <div className="content-wrapper">
            <h2 className='text-danger'>Login</h2>
            <p> Login a account with  using email and password.</p>
          <AuthForm buttonName="Login"/>
        </div>
        </div>
     </div>
    </section>
  )
}

export default Login
