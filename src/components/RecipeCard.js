import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import "../Css/RecipeCard.css";

function RecipeCard(props) {
  const [item, setItem] = useState(null);
  const id = props.id;

  useEffect(() => {
    if (id) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then((response) => {
          const meal = response.data.meals[0];
          setItem(meal);
        });
    }
  }, [id]);


  return (

    <div className='RecipeCard'>
      {item && (
        <div key={item.idMeal}>
          <h3>{item.strMeal}</h3>
          <br />
          <img src={item.strMealThumb} alt={item.strMeal}></img>
          <br />
          <NavLink to={"/details/" + id} ><button className='Details-btn'> More details about the recipe</button></NavLink >
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
