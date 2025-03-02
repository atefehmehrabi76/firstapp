import React from 'react'

import useBasket from '../store/UseBasket';


function ProductItem({productData}) {
  const {imageSrc,title,id,price}=productData;
  const {actions}=useBasket();
  return (
    <div>
            <div key={id} className='bg-gray-300  p-8 w-72 m-3'>
                <img src={imageSrc} alt={title} />
                <h3>{title}</h3>
                <div className='flex justify-between'>
                    <strong className='text-green-800 '>Price</strong>
                    <p className='text-xl'>{price} $</p>
                </div>
                <button onClick={()=>actions.addToBasket(productData)} className='bg-blue-700 p-2 mt-5 text-white border rounded-lg '>Add Item</button>
            </div>
    </div>
  )
}

export default ProductItem;