import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function SearchBar() {
  const [textSearch, setTextSearch] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (textSearch) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + textSearch)
        .then((response) => {
          setFoodList(response.data.meals || []);
        });
    } else {
      setFoodList([]);
    }
  }, [textSearch]);

  return (
    <div>
      <span>
        <input
          type="text"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <ul>
          {textSearch &&
            foodList &&
            foodList.map((element) => (
              <button onClick={() => setId(element.idMeal)} key={element.idMeal}>
                {element.strMeal}
              </button>
            ))}
        </ul>
      </span>
      <RecipeCard id={id}></RecipeCard>
    </div>
  );
}

export default SearchBar;
