 import React from 'react'
 import "./componentcss/ProductListing.css";
 import CardData from '../Data/CardData';
 import {BookData} from "../Data/BookDatas"
 const ProductListing = () => {
  // console.log(BookData.substring(0,5))
   return (
     <div className="Product-listing-container">
       <div className="container">
          <h2 style={{textAlign:"center"}}>Latest <span className="text-danger">Books</span>  Arrival   Here check  it Now........</h2>
           <div className="grid-container" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr  "}} >
            {BookData.slice(0,4).map((BookData) =>{
              return(
                <div className="grid-item">
                   <CardData key={BookData.id} BookData={BookData}/>
                </div>
              )
            } )
            }
         
           </div>
     
           
      </div>
     </div>
   )
 }
 
 export default ProductListing;
 