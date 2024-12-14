import { useContext } from "react";
import InputContext from "../context/InputContext";

function Input() {
  const contextData=useContext(InputContext);
    
 return (
    <div className='flex justify-between items-center p-2'>
        <label htmlFor="text-input">{contextData.label}</label>
        <br />
        <input type={contextData.type} placeholder={contextData.placeholder} id='text-input' onKeyUp={(event)=>{contextData.handleKeyUp(event)}} className='border border-gray-700 p-2 rounded-lg m-5' />
        
    </div>
  )
}

export default Input;