import React from 'react'
import "./componentcss/Categories.css"
const Categories = () => {
  return (
    <div className="category-wrapper p-1">
      <div className="category-wrap">
        
        <div className="category-item">
            <img src="https://www.bookswagon.com/Images/staticimages/icon1.png" alt="..." />
        </div>
    
        <div className="category-item">
        <img src="https://www.bookswagon.com/Images/staticimages/icon8.png" alt="..." />
        </div>
        <div className="category-item">
        <img src="https://www.bookswagon.com/Images/staticimages/icon4.png" alt="..." />
        </div>
        <div className="category-item">
        <img src="https://www.bookswagon.com/Images/staticimages/icon7.png" alt="..." />
        </div>
        <div className="category-item">
        <img src="https://www.bookswagon.com/Images/staticimages/icon2.png" alt="..." />
        </div>
        <div className="category-item">
        <img src="https://www.bookswagon.com/Images/staticimages/icon5.png" alt="..." />
        </div>
        <div className="category-item">
        <img src="https://www.bookswagon.com/Images/staticimages/tarot.png" alt="..." />
        </div>
         
      </div>
      <div className="category-head">
        <div className="category-heading">Best Seller</div>
        <div className="category-heading">Award Winners</div>
        <div className="category-heading">Box Sets</div>
        <div className="category-heading">International Best Seller</div>
        <div className="category-heading">New Arrivals</div>
        <div className="category-heading">Fictions Books</div>
        <div className="category-heading">Tarot Cards</div>
      </div>
    </div>
  )
}

export default Categories
