import { useEffect, useState } from "react";
import { articleBlog } from "../../services/userApi";
import { Link } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string;
  images: string[];
  selectedCategory: string | null;
}

interface DisplayProps {
  selectedCategory: string | null;
}

function Display({ selectedCategory }: DisplayProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [expandedBlogs, setExpandedBlogs] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await articleBlog();

        if (response && response.data && response.data.blogs) {
          setBlogs(response.data.blogs);
        } else {
          console.error('Invalid response structure:', response);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleExpand = (blogId: string) => {
    setExpandedBlogs((prevExpandedBlogs) => {
      if (prevExpandedBlogs.includes(blogId)) {
        return prevExpandedBlogs.filter((id) => id !== blogId);
      } else {
        return [...prevExpandedBlogs, blogId];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {blogs &&
        blogs
          .filter(
            (blog) =>
              selectedCategory === null || blog.category === selectedCategory
          )
          .map((blog) => (
            <div key={blog._id} className="border p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-lg font-semibold">{blog.title}</h1>
              </div>
              <div className="blog-image">
                {blog.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Blog Image ${index}`}
                  />
                ))}
              </div>
              <p className="mt-2">
                {expandedBlogs.includes(blog._id)
                  ? blog.content
                  : blog.content.split(' ').slice(0, 10).join(' ')}{' '}
                {/* Display first 10 words */}
                {blog.content.split(' ').length > 10 && (
                  <button
                    onClick={() => toggleExpand(blog._id)}
                    className="text-blue-500"
                  >
                    {expandedBlogs.includes(blog._id)
                      ? 'Show less'
                      : ''}
                  </button>
                )}
                {!expandedBlogs.includes(blog._id) && (
                  <Link to={`/article/${blog._id}`} className="text-blue-500">
                    Read more
                  </Link>
                )}
              </p>
            </div>
          ))}
    </div>
  );
}

export default Display;
