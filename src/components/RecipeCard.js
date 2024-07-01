import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Css/RecipeCard.css";

function RecipeCard(props) {
  const [item, setItem] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructons, setInstructons] = useState([]);
  const id = props.id;

  useEffect(() => {
    if (id) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then((response) => {
          const meal = response.data.meals[0];
          setItem(meal);
          if (meal) {
            getIngredients(meal);
 
          }
        });
    }
  }, [id]);

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
 

  return (
    
    <div className='RecipeCard'>
      {item && (
        <div key={item.idMeal}>
          <h3>{item.strMeal}</h3>
          <br />
          <img src={item.strMealThumb} alt={item.strMeal}></img>
          <br />
          <div className='ListIngredients'>
            {ingredients.map((ing, index) => (
              <React.Fragment key={index}>
                <span>{ing}</span>
                <br />
              </React.Fragment>
            ))}
          </div>
          <br />
          <article className='Instructions'>{item.strInstructions}</article><br />
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
