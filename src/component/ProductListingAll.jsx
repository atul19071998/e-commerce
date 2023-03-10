import React from 'react'
import "./componentcss/ProductListingAll.css";
import CardData from '../Data/CardData';
import {BookData} from "../Data/BookDatas"
const ProductListingAll = () => {
  return (
    <section>
        <div className="container">
            <div className="grid-conatiner"  style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr  "}}>
                {
                
                
                BookData.map((BookData) =>{
                    return(
                        <div key={BookData.id}  className="grid-item">
                        <CardData BookData={BookData}/>
                         </div>
                    )
                })}
               
            </div>
        </div>
      
    </section>
  )
}

export default ProductListingAll;
 
