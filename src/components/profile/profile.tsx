
import React, { useEffect, useState } from 'react';
import { DeleteArticle, userProfile } from '../../services/userApi';
import { Link } from 'react-router-dom';

interface Blog {
  _id: string;
  title: string;
  // Other properties of your Blog type
}

interface UserProfile {
  firstname: string;
  blogs: Blog[];
  // Other properties of your UserProfile type
}

function Profile(){
  const[userprofiledata,setUserprofiledata]=useState<UserProfile|null>(null)

  useEffect(()=>{
    const fetchUserprofile=async()=>{
      try{
        const response=await userProfile()
        console.log(response,'blooog')
        setUserprofiledata(response.data)
      }catch(error){
        console.log('error happen',error)
      }
    }
    fetchUserprofile();
  },[])

  const handleDelete=async(articleId:string)=>{
    try{
      await DeleteArticle(articleId)
      setUserprofiledata((prevData)=>{
        if (!prevData) return null; // Handle null case
        return {
          ...prevData,
          blogs: prevData.blogs.filter((blog) => blog._id !== articleId),
        };
      })
    }catch(error){
      console.log('errror',error)
    }
  }
    return(
        <>
        {userprofiledata &&(
        <div className="flex">
      <div className="w-1/4 bg-gray-100 h-screen p-4">
        <h2 className="text-lg font-semibold mb-4">{userprofiledata.firstname}</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">Account</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">comments</a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-semibold mb-4">Your Articles</h2>
        <ul>
        {userprofiledata && userprofiledata.blogs && userprofiledata.blogs.map(blog=>(
            <li  className="mb-4 border-b border-gray-300 pb-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <div className="mt-2 flex items-center">
                <Link to={`/write/${blog._id}`}>
                <button className="text-blue-500 mr-2 hover:underline">Edit</button>
                </Link>
                
                <button className="text-red-500 hover:underline" onClick={()=>handleDelete(blog._id)}>Delete</button>
                
              </div>
            </li>
           ))}
        </ul>
      </div>
    </div>
    )}
  </>
  )
}

export default Profile