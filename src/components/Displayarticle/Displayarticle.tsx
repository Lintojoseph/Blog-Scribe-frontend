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
  isPremium: boolean;
}

interface DisplayProps {
  selectedCategory: string | null;
  isPremiumUser: boolean;
}

function Display({ selectedCategory, isPremiumUser }: DisplayProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [expandedBlogs, setExpandedBlogs] = useState<string[]>([]);
  const [currentUserPremiumStatus, setCurrentUserPremiumStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await articleBlog();

        if (response && response.data && response.data.blogs) {
          console.log('Fetched Blogs:', response.data.blogs);
          console.log('Current User Premium Status:', response.data.currentUserPremiumStatus);
          setBlogs(response.data.blogs);
          setCurrentUserPremiumStatus(response.data.currentUserPremiumStatus);
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
  console.log(currentUserPremiumStatus, 'isss')
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
                {blog.isPremium && (
                  <span className="text-yellow-500 ml-2">Premium</span>
                )}
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
  <>
    {(currentUserPremiumStatus || blog.isPremium) ? (
      <Link to={`/article/${blog._id}`} className="text-blue-500">
        Read more
      </Link>
    ) : (
      <Link to={`/article/${blog._id}`} className="text-blue-500">
        Read more (Premium Content - Upgrade Now)
      </Link>
    )}
  </>
)}




              </p>
            </div>
          ))}
    </div>
  );
}

export default Display;
