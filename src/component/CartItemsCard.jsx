 import React,{useContext} from 'react'
 import './componentcss/CardItemsCard.css'
import {CartContext} from '../App';
import {useState} from 'react';
 const CartItemsCard = ({bookData}) => {
     let [count,setCount] = useState(0)
    const {cartItems,setCartItems} = useContext(CartContext)
    const handleRemove =()=>{
        console.log(bookData.id)
        setCartItems(cartItems.filter((item) => item.id !== bookData.id));
    }
   return (
    <div className="cart-item">
    <div className="cart-item-img-container">
   <img src={bookData.book_url} alt="cart" />
    </div>
  <div className="cart-item-content-container">
     <h2 style={{fontSize:"1rem"}}>{bookData.book_name}</h2>
     <p>{bookData.author_name}</p>
     <h3 className='cart-item-price' style={{fontSize:"1rem"}}> ₹{bookData.price }</h3>
     <h1 style={{fontSize:"1rem"}}>Quantity: {count}</h1>
     <div className="incre">
    <button onClick={() => setCount(count+1)} style={{width:"25px"}}>+</button>
      <button onClick={() => (count === 0? setCount(0) : setCount(count - 1))} style={{width:"25px"}} >-</button>
      </div>
      <div>
     <button onClick={handleRemove} className='btn btn-dark'style={{marginTop:"0.5rem"}}>Remove Cart</button>
     </div>
  </div>
</div>
   )
 }
 
 export default CartItemsCard
 
