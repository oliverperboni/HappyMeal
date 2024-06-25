import React, { useState } from 'react'
import axios from "axios";

function RecipeCard(props) {

  const [item, setItem] = useState([])
  const [ingredients, setIngredients] = useState([])
  const id = props.id
  axios
    .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
    .then((response) => {
      setItem(response.data.meals);
    });

  const getIngredients = (meal) => {
    const ingr = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingr.push(`${measure ? measure : ''} ${ingredient}`.trim());
      }
    }
    setIngredients(ingr);
  };

  return (
    <div>
      {item.forEach(element => (
        <div key={element.idMeal}>
          <span>{element.strMeal}</span>
          <img src={element.strMealThumb}></img>
          {getIngredients(element)}
          {ingredients.forEach(ing => (
            <span>{ing}</span>
          ))}
          <span>{element.strInstructions}</span>
        </div>
      ))};
    </div>
  )
}

export default RecipeCard