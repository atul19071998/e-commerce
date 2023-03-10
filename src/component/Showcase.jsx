import React from 'react'
import "./componentcss/Showcase.css";
const Showcase = () => {
  return (
    <div className="header">
   <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="100">
      <img src=" https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src=" https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src=" https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src=" https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4 " class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src=" https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4 " class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="  https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4 " class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  
  </button>
</div>

 
    </div>
  )
}

export default Showcase ;
