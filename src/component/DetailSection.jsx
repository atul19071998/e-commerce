import React ,{useEffect ,useState,useContext} from 'react'
import "./componentcss/DetailSection.css";
 import {useParams,useNavigate} from 'react-router-dom';
import { BookData } from '../Data/BookDatas';
import {UserContext,CartContext} from '../App'
const DetailSection = () => {
  const {id} = useParams();
 const [bookData,setBookData] = useState({});
 const navigate = useNavigate();
   const user = useContext(UserContext);
   const {cartItems,setCartItems} = useContext(CartContext)
    useEffect(() =>{
      let newData = BookData.filter((book) => book.id === parseInt(id));
      // console.log(newData[0]) ;
      setBookData(newData[0])
       console.log(user);
    },[])
// useEffect(() =>{
//   console.log(cartItems)
// })
    const handleAddToCart =() =>{
      // console.log("working")
      
      if(user){
        //add to cart
        setCartItems([...cartItems,bookData]);
        alert(`The Book ${bookData.book_name} add to the cart.`)
      }else{
           navigate('/login');
           alert("Please Login or SignUp first  👈")
      }
    }
  
  return (
    <section className='detail-section-container'>
        <div className="book-wrapper">
           <div className="flex-container">
            <div className="book-img-container">
             <img src={bookData. book_url} alt="" />
            </div>
            <div className="book-detail-container">
               <h2>{bookData. book_name}</h2>
               <p className="text-danger p-1"><b>{bookData.author_name}</b></p>
               <p className="book-description p-1">{bookData. book_description}</p>
               <p className='p-1'><b>Language </b>:{bookData.language}</p>
               <p className='p-1'> <b>Booklength</b>: {bookData.print_length}</p>
               <h3 className='p-1'>&#8377;{bookData.price}</h3>

               <a onClick={handleAddToCart} className="cart-button p">Add To Cart</a>
            </div>
           </div>
        </div>
    </section>
  )
}

export default DetailSection

