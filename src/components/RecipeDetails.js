import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [item, setItem] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const linkRef = useRef(null);
  let { mealId } = useParams();

  const getIngredients = (meal) => {
    const ingr = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingr.push(`${ingredient} - ${measure ? measure : ''}`.trim());
      }
    }
    setIngredients(ingr);
  };

  function addFav(meal) {
    let favList = localStorage.getItem("favList");
    if (favList) {
      let parsedListFav = JSON.parse(favList);
      parsedListFav.push(meal);
      localStorage.setItem("favList", JSON.stringify(parsedListFav));
    } else {
      favList = [];
      favList.push(meal);
      localStorage.setItem("favList", JSON.stringify(favList));
    }
  }

  function removeFav(mealId) {
    let favList = localStorage.getItem("favList");
    if (favList) {
      let parsedListFav = JSON.parse(favList);
      parsedListFav = parsedListFav.filter(meal => meal.idMeal !== mealId);
      localStorage.setItem("favList", JSON.stringify(parsedListFav));
    }
  }

  useEffect(() => {
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
  }, [mealId]);

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
          <div className='ImageContainer'>
            <img src={item.strMealThumb} alt={item.strMeal} className='MealImage' />
            <button className="VideoButton">
              <a className='YoutubeLink' ref={linkRef} href={item.strYoutube}>Youtube Video of the Recipe {item.strMeal}</a>
            </button>
            <button className="FavButton" onClick={() => addFav(item)}>
             Add To Favorite
            </button>
            <button className="FavButton" onClick={() => removeFav(item.idMeal)}>
             Remove From Favorite
            </button>
          </div>
        </div>
        <div className='AdditionalInfo'>
          <p><strong>Category:</strong> {item.strCategory}</p>
          <p><strong>Area:</strong> {item.strArea}</p>
          <p><strong>Tags:</strong> {item.strTags ? item.strTags.split(',').join(', ') : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
