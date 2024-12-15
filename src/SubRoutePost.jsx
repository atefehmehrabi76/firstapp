import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SubRoutePost() {
    const {id}=useParams();
    const[post,setPost]=useState({});
    const getPosts=async()=>{
        const endPoint=`https://jsonplaceholder.typicode.com/posts/${id}`;
        const request=await fetch(endPoint);
        const response=await request.json();
        setPost(response);

    };
    useEffect(()=>{
        getPosts()
    },[id])
  return (
    <div>
        <h1>{post.title}</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>{post.body}</p>
    </div>
  )
}

export default SubRoutePost;