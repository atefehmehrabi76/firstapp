import React, { useState } from 'react';
import InputContext from '../context/InputContext';
import Box from "../component/Box";

function HomePage() {
  const [firstName,setFirstName]=useState("");
  const ContextValue={
    label:"Your Name",
    type:"text",
    placeholder:"Enter Your Name",
    handleKeyUp:(e)=>{setFirstName(e.target.value)}
    
  }
  return (
    <>
      <InputContext.Provider value={ContextValue}>
        <Box/>
      </InputContext.Provider>
      <hr />
      <p className='text-center'>{firstName}</p>
    </>
  )
}

export default HomePage;