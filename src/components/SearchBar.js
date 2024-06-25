import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function SearchBar() {
  const [textSearch, setTextSearch] = useState("");
  const [foodList, setFoodList] = useState([]);
  //temporary
  const [id, setId] = useState()
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
            <button onClick={setId(element.idMeal)} key={element.idMeal}>{element.strMeal}</button>
          ))}
        </ul>
      </span>
      <RecipeCard id={52772}></RecipeCard>
    </div>
  );
}

export default SearchBar