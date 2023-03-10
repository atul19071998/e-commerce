 import {useEffect,useState,createContext} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import app from './firebase/FireBase';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
// import Product from './component/Product';
import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import BookPage from "./pages/bookpage/BookPage";
import BookDetail from "./pages/bookdetail/BookDetail";
import AboutPage from './pages/Aboutpage/AboutPage';
import ContactPage from './pages/Contactpage/ContactPage';
 
 import Login from './pages/loginpage/Login';
 import  Signup from './pages/signup page/Signup'
 import CartPage from './pages/cartpage/CartPage';
 
import Error from "./component/Error";
// import { User } from '@auth0/auth0-react';
export const UserContext = createContext({});
export const CartContext = createContext([])
function App() {
  const auth = getAuth(app);
  const [authenticatedUser,setAuthenticateUser] =useState(null);
  const [cartItems,setCartItems] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() =>{
    onAuthStateChanged(auth,(user) =>{
      // console.log(user);
      if(user){
      
        setAuthenticateUser(user)
      }else{
        setAuthenticateUser(null)
      }
    })
  },[])
  const [DataTransfer,setData] = useState("");
  useEffect(() =>{
     let total = 0;
     cartItems.forEach((item) =>{
      // console.log(item.price)
      total = total + parseInt(item.price);
     })
     setTotalAmount(total)
  },[cartItems])
  return (
    <UserContext.Provider value ={authenticatedUser}>
      <CartContext.Provider value={{cartItems,totalAmount ,setCartItems}}>
      <Navbar DataTransfer={DataTransfer} setData={setData}/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/book-details/:id" element={<BookDetail/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<Error />}></Route>
      </Routes>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
