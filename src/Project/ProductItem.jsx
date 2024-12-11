import React from 'react'

function ProductItem(props) {
  return (
    <div>
         <div key={props.id} className='bg-gray-300  p-8 w-72 m-3'>
                <img src={props.imageSrc} alt={props.title} />
                <h3>{props.title}</h3>
                <div className='flex justify-between'>
                    <strong className='text-green-800 '>Price</strong>
                    <p className='text-xl'>{props.price} $</p>
                </div>
                <button className='bg-blue-700 p-3 text-white border rounded-lg '>Add Item</button>
            </div>
    </div>
  )
}

export default ProductItem;