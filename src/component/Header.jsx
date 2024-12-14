import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className='bg-blue-200 flex justify-between items-center p-5'>
            <NavLink className={({isActive , isPending})=>isActive ? "text-blue-700" : isPending ? "text-gray-600" : ""} to="/homepage">Home</NavLink>
            <NavLink className={({isActive , isPending})=>isActive ? "text-blue-700" : isPending ? "text-gray-600" : ""} to="/basketpage">Basket</NavLink>

        </nav>
    </div>
  )
}

export default Header;