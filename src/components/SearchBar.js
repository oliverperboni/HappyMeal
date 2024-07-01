import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import "../Css/SearchBar.css"

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
      <span className="search-container">
        <input
          type="text"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          placeholder="Search here"
        />
        <ul>
          {textSearch &&
            foodList &&
            foodList.map((element) => (
              <li> <button className="MealSelect" onClick={() => setId(element.idMeal)} key={element.idMeal}>
                {element.strMeal}
              </button>
              </li>
            ))}
        </ul>
      </span>
      <div className="RecipeCardContainer">
      {textSearch && <RecipeCard id={id}></RecipeCard>}
      </div>
    </div>
  );
}

export default SearchBar;
