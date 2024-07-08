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
        setId(null)
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
        <div className="Grid-elements">
          {textSearch &&
            foodList &&
            foodList.slice(0, 10).map((element) => ( // Limit to 10 items
              <button
                className="MealSelect"
                onClick={() => setId(element.idMeal)}
                key={element.idMeal}
              >
                {element.strMeal}
              </button>
            ))}
        </div>
      </span>
      { id &&

      <div className="RecipeCardContainer">
        {textSearch && <RecipeCard id={id}></RecipeCard>}
      </div>
      }
    </div>
  );
}

export default SearchBar;

