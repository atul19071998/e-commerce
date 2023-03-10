import React from "react";
import "./CardData.css";
import {Link} from 'react-router-dom';

export default function   CardData({BookData}) {
    console.log(BookData + "newone");
return (
  
   <div className="product-listing-card">
       
        <div className="product-listing-img-container p-3">

          <img src={BookData.book_url} className="product-listing-image p-1" alt="product-img" height="120px" width="110px" />
         
        
            <h5 style={{fontSize:"0.8rem",fontWeight:"bold"}} className="p-1">{BookData.book_name}</h5>
            <p style={{fontSize:"0.8rem" }}>{BookData.author_name}</p>
            <p style={{fontSize:"0.8rem",fontWeight:"bold"}}>₹{BookData.price}</p>
            <Link to={`/book-details/${BookData.id}`}> <button className="buttons-cart"> Buy Now</button></Link>
           
        
        </div>
 
 
 
</div>
 
)
};
 