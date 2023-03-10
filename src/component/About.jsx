import React from "react";
import "./componentcss/About.css";
import Footer from "../component/Footer";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrap">
        <div className="about-wraps1">
          <h2 className="mt-2 p-3">
            Welcome to <span class="text-danger">BooksWagon</span>{" "}
          </h2>
          <div>
            <span className="mt-1 p-3" style={{ fontSize: "20px" ,fontFamily:"georgia"  ,color:"blue"}}>
              Bookswagon is India’s  Cheapest Online Bookstore
            40+ Million selections
            </span>
            <p style={{fontSize:"1.2rem",textAlign:"justify", fontFamily:"serif"}} className="p-3">
              Dear readers, We offer huge collection of books in diverse
              category of Fiction, Non-fiction, Biographies, History, Religions,
              Self -Help, Children. We also sell in vast collection of
              Investments and Management, Computers, Engineering, Medical,
              College and School text references books proposed by different
              institutes as syllabus across the country. Besides to this, we
              also offer a large collection of E-Books at very fair pricing. We
              attempt to extend the customer satisfaction by catering easy
              user-friendly search engine, quick and user-friendly payment
              options and quicker delivery systems. Upside to all of this, we
              are disposed to provide exciting offers and pleasant discounts on
              our books. As well, we humbly invite all the sellers around the
              country to partner with us. We will surely provide you the
              platform for many sparkling domains and grow the “BooksWagon”
              family.We would like to thank you for shopping with us. You can
              write us for any new thoughts at “email-id” helping us to
              improvise for the reader satisfaction
            </p>
          </div>
        </div>
        <div className="about-wraps2">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80"
            alt="..."
          />
        </div>
      </div>
      <div className="about-wraps3">
        <img
          src="https://www.bookswagon.com/images/aboutuspicbottom.png"
          alt="....."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
