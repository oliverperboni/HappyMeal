import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Css/CategoryPage.css'; // Import the CSS file

function CategoryFilter(props) {
  const [categories, setCategories] = useState([]);

  function getCategory() {
    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        setCategories(response.data.meals);
      });
  }

  useEffect(() => {
    getCategory();
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div className='CategoryFilter'>
      <h1>Categories</h1>
      <ul>
        {categories.map((cat, idx) => (
          <li key={idx}>
            <button className='CategoryButton'>{cat.strCategory}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;