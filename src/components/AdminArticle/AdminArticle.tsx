import React, { useState, useEffect } from 'react';
import { getAllArticles } from '../../services/adminApi';

// Define the Article interface
interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user_id: {
    firstname: string;
  };
}

// Define the PaginationData interface
interface PaginationData {
  previous?: {
    page: number;
  };
  next?: {
    page: number;
  };
  limit?: number;
}

function AdminArticle() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const [paginationData, setPaginationData] = useState<PaginationData | null>(null);

  // Function to fetch articles and pagination data
  const getArticles = (page: number) => {
    getAllArticles(page)
      .then((response) => {
        setArticles(response.data.result);
        setPaginationData(response.data.paginations); // Updated key name
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getArticles(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    // Clear the previous articles before fetching the next page
    setArticles([]);
    setCurrentPage(pageNumber);
    getArticles(pageNumber);
  };

  // Filter the articles to only display the articles on the current page
  const filteredArticles = articles.filter((article, index) => {
    // Use the optional chaining operator to access the `limit` property of the `paginationData` object
    const limit: any = paginationData?.limit;

    // If the `limit` property is undefined, use the default value of 10
    return index < limit ?? 5;
  });

  return (
    <div className="container mx-auto p-4 mt-7">
      <h1 className="text-2xl font-bold mb-4">Article List</h1>

      {/* Display articles on the current page in a row model */}
      <div className="flex flex-wrap">
        {filteredArticles.map((article) => (
          <div key={article.id} className="w-1/5 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-600">By {article.user_id?.firstname} | Created on {article.createdAt}</p>
            <p className="mt-2">{article.content}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {paginationData && (
        <div className="flex justify-center mt-4">
          {paginationData.previous?.page && (
            <button
              key="previous-button"
              className="px-3 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => handlePageChange(paginationData.previous!.page)}
            >
              Previous
            </button>
          )}
          {paginationData.next?.page && (
            <button
              key="next-button"
              className="px-3 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => handlePageChange(paginationData.next!.page)}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminArticle;
