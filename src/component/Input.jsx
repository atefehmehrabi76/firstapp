import React, { useContext } from 'react';
import InputContext from '../context/InputContext';

function Input() {
    const InputDate=useContext(InputContext);
    
  return (
    <div className='flex justify-between items-center'>
        <label htmlFor="text-input">{InputDate.label}</label>
        <input className='border rounded-md border-gray-300 p-1' type={InputDate.type} id='text-input' placeholder={InputDate.placeholder} onKeyUp={(event)=>{InputDate.handleKeyUp(event)}} />
    </div>
  )
}

export default Input;