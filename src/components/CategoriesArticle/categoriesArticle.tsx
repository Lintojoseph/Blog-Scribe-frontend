import React, { useEffect, useState } from 'react';
import { categories } from '../../services/userApi';
import Display from '../Displayarticle/Displayarticle';

function Category() {
  const [category, setCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  console.log(selectedCategory,'selse')
  useEffect(() => { 
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categories();
      console.log(response.data, 'categories data');
      setCategories(response.data.categories); 
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  console.log(category, 'category state');

  const maxCategories = showAllCategories ? category.length : 21;

  const handleCategoryClick = (clickedCategory:any) => {
    setSelectedCategory(clickedCategory);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {category.slice(0, maxCategories).map((item, index) => (
          <div
            key={index}
            className={`bg-gray-300 p-2 m-2 rounded-lg cursor-pointer ${
              selectedCategory === item ? 'bg-blue-200' : ''
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </div>
        ))}
        {category.length > maxCategories && (
          <div
            className="bg-gray-300 p-2 m-2 rounded-lg cursor-pointer"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={showAllCategories ? "M6 18L18 6M6 6l12 12" : "M12 4v16m8-8H4"}
              />
            </svg>
          </div>
        )}
      </div>
      {selectedCategory && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Selected Category: {selectedCategory}</h2>
          
          <div className="bg-blue-200 p-2 m-2 rounded-lg">
            List of items in {selectedCategory}
          </div>
          <Display selectedCategory={selectedCategory} />
        </div>
      )}
    </div>
  );
}

export default Category;
