import React from 'react'
import ProductListingAll  from '../../component/ProductListingAll'

const BookPage = ({DataTransfer,setData}) => {
  return (
    <div>
      <h3 style={{textAlign:"center"}} className="mt-2 p-2">Find the <span class="text-danger">Books</span> that you want....</h3>
 <ProductListingAll DataTransfer={DataTransfer} setData={setData}/>
    </div>
  )
}

export default BookPage
