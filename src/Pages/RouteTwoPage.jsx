import React from 'react';
import SideBar from "../SideBar";
import { Outlet } from 'react-router-dom';

function RouteTwoPage() {
  return (
    <div className='grid grid-cols-5 gap-5 m-5'>
        <aside className='col-start-1 col-end-3 border border-gray-600 rounded-lg p-5 '>
            <SideBar/>
        </aside>
        <main className='col-start-3 col-end-6 border border-gray-600 rounded-lg p-5'>
            <Outlet/>
        </main>
    </div>
  )
}

export default RouteTwoPage