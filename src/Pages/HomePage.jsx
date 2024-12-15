
// import ProductCard from "../component/ProductCard";
import { useState } from "react";
import Box from "../component/Box";
import InputContext from "../context/InputContext";

export default function HomePage() {
  const [firstName,setFirstName]=useState("");
  const contextValue={
    label:"your name",
    type:"text",
    placeholder:"Enter Your Name",
    handleKeyUp:(e)=>{setFirstName(e.target.value)}
  }
 
  return (
    <div>
      <InputContext.Provider value={contextValue}>
         <Box/>
      </InputContext.Provider>
      
        <hr />
        <p>{firstName}</p>
        
        {/* <ProductCard /> */}
    </div>
  )
}
