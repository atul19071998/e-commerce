import React,{useContext} from "react";
import {Link ,useNavigate} from "react-router-dom";
 
import { useContextValue } from "../Context";
import { UserContext } from "../App";
import app from '../firebase/FireBase'
import {getAuth, signOut } from "firebase/auth";
const Navbar = ({DataTransfer,setData}) => {
 
  const auth = getAuth(app);
  const user = useContext(UserContext);
  const navigate = useNavigate();

 let {setSearch} = useContextValue();
  const onChange = (event)=>{
    console.log(event.target.value);
    setSearch(event.target.value);

  }


  const handleLogout =()=>{
   signOut(auth).then(() =>(
    navigate('/')
   ))
   .catch((err)=>{
    console.log(err);
   })
  }
 
 const showLoginandSignUp =(
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <Link to="/" class="nav-link active " aria-current="page" style={{color:" white"}}>
        Home
      </Link>
    </li>
    <li class="nav-item">
      <Link  to="/Books" class="nav-link "   style={{color:" white",cursor:"pointer"}}>
        Books
      </Link>
    </li>
     
    <li class="nav-item">
      <Link  to="/About"class="nav-link "   style={{color:" white"}}>
        About
      </Link>
    </li>
 
    <li class="nav-item">
    <Link to="/login"   class="nav-link "  style={{color:" white"}}>
     Login</Link>
    </li>
    <li>
    <Link to="/signup"   class="nav-link "  style={{color:" white"}}>
     Signup</Link>
    </li>
   
    
  </ul>
  <form class="d-flex " role="search" >
    <input
      class="form-control me-2"
      type="text"
      placeholder="Search the Book "
      aria-label="Search"
      onChange={onChange}
    />
   
      </form>
    <div className="buttons">
       
    
      
      <Link to="/" className="nav-links" style={{color:" white"}}>
      <i class="fa-solid fa-cart-shopping"></i>Cart </Link>
    </div>

</div>
 )
 const showLogoutAndCart =(
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active " aria-current="page" style={{color:" white"}}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link  to="/Books" class="nav-link "   style={{color:" white"}}>
                  Books
                </Link>
              </li>
            
              <li class="nav-item">
                <Link  to="/About"class="nav-link "   style={{color:" white"}}>
                  About
                </Link>
              </li>
              
              <li class="nav-item">
              <a onClick={handleLogout} to="/cart"   class="nav-link "  style={{color:" white"}}>
               Logout</a>
              </li>
             
            
              
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search the Book "
                aria-label="Search"
                onChange={onChange}
              />
             
                </form>
              <div className="buttons">
                 
              
                
                <Link to="/cart" className="nav-links" style={{color:" white"}}>
                <i class="fa-solid fa-cart-shopping"></i></Link>
              </div>
          
          </div>
 )
  return (
    <div>
      <nav class="navbar navbar-expand-lg  py-3 shadow-sm" style={{backgroundColor:" #333",height:"70px"}}>
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#" style={{color:" white"}}>
         <img src=" https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" alt="..."  style={{height:"40px",width:"4rem",  }} />

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
         {user ? showLogoutAndCart : showLoginandSignUp}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
