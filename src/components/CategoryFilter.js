import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((cat, idx) => (
          <li key={idx}>{cat.strCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
