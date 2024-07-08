import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


function RecipeDetails() {

  const [item, setItem] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructons, setInstructons] = useState([]);
  let { mealId } = useParams()



  const getIngredients = (meal) => {
    const ingr = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingr.push(` ${ingredient} - ${measure ? measure : ''}`.trim());
      }
    }
    setIngredients(ingr);
  };




  useEffect(() => {
    if (mealId) {
      if (mealId) {
        axios
          .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId)
          .then((response) => {
            const meal = response.data.meals[0];
            setItem(meal);
            if (meal) {
              getIngredients(meal);

            }
          });

      }
    }
  }, [mealId]);


  console.log(item);

  return (
    <div className='Details'>
      <div key={item.idMeal}>
        <h3 className='RecipeTitle'>{item.strMeal}</h3>
        <div className='Content'>
          <div className='TextContent'>
            <ul className='ListIngredients'>
              {ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
            <article className='Instructions'>{item.strInstructions}</article>
          </div>
          <img src={item.strMealThumb} alt={item.strMeal} className='MealImage'></img>
        </div>
      </div>
    </div>
  );
  
  
  
}

export default RecipeDetails