import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [textSearch, setTextSearch] = useState("");
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + textSearch)
      .then((response) => {
        setFoodList(response.data.meals);
      });
  }, [textSearch]);

  return (
    <div>
      <span>
        <input type="text" onChange={(e) => setTextSearch(e.target.value)} />
        <ul>
        {textSearch &&
          foodList &&
          foodList.map((element) => (
            <li key={element.idMeal}>{element.strMeal}</li>
          ))}
        </ul>
      </span>
    </div>
  );
}

export default SearchBar