import React ,{useContext}from 'react'
import './componentcss/CartItemsContainer.css';
 import CartItemsCard from './CartItemsCard';
 import StripeCheckout from 'react-stripe-checkout';
 import {CartContext} from '../App';
 import {useNavigate} from 'react-router-dom'
const CartItemsContainer = () => {
   const  {cartItems,totalAmount} = useContext(CartContext);
   const  stripeKey="pk_test_51Mk4oWSFXoGtfLsbBsJL9Xhf3rHh566Nr1SUbeZ4qfGvnJdYlSLARHYaLCZS3zCEv4jE4DQGlLunXA6Hh1VQhtnH00h1eEQUNa"
  const navigate = useNavigate();
   const onToken = (token) =>{
      console.log(token)
      alert("Your Payment has done Successfully.");
      navigate('/');

   }
   console.log(cartItems);
  return (
     <section className="cart-items-container">
        <div className="cart-container">
        {totalAmount === 0 ? (
         <h2>Currently your Cart is Empty.</h2>
        
        ):(
         <React.Fragment>
         <div className="cart1">
            <h2>Cart</h2>
         {cartItems.map((item) =>(
            <CartItemsCard key={item.id}bookData={item}/>
         ))}
         </div>
         <div className="cart2">
         <h2>Total Amount =  ₹{totalAmount } </h2>
        
        <StripeCheckout
          name="Book Checkout"
          description ="Please fill the details below"
          amount={totalAmount * 100}
          currency="INR"
          stripeKey ={stripeKey}
          token={onToken}
          billingAddress 
        >
         <button className='btn btn-danger' > CheckOut</button>
         </StripeCheckout>
         </div>
         </React.Fragment>
        )
        }



        
        </div>
     </section>
  )
}

export default CartItemsContainer
