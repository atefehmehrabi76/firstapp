import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function SideBar() {
    const[post,setPost]=useState([]);
    const getPosts=async()=>{
        const endPoint="https://jsonplaceholder.typicode.com/posts";
        const request=await fetch(endPoint);
        const response=await request.json();
        setPost(response);
    };
    useEffect(()=>{
        getPosts()
    },[]);
  return (
    <ul>
        {post.map((item)=>{
            return <li key={item.id} className='mb-5'>
                <NavLink className={({isActive , isPending})=>
                isActive ? "text-blue-600" : isPending ? "text-gray-700" : ""
                } to={`/route-2/${item.id}`}>{item.title}</NavLink>
            </li>
        })}
    </ul>
  )
}

export default SideBar;