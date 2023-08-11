import { useEffect, useState } from "react";
import { articleBlog } from "../../services/userApi";

interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string;
  images: string;
}

function Display() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await articleBlog();
        console.log('Full Response:', response);
  
        if (response && response.data && response.data.blogs) {
          console.log('Response Data:', response.data);
          setBlogs(response.data.blogs);
        } else {
          console.error('Invalid response structure:', response);
        }
        
        console.log('Full Response:', response); // Log the response here
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
  
    fetchBlogs(); 
  }, []);
  
  return (
    <div>
      {blogs && blogs.map((blog) => (
        <div key={blog._id}>
          <h1>{blog.title}</h1>
          <h6>{blog.category}</h6>
          {/* Example in React */}
          <img src={`/images/Blog/${blog._id}.jpg`} alt="Blog Image" />
          <p>{blog.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Display;
