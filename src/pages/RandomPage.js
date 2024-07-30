import React from 'react'
import { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import RecipeDetails from '../components/RecipeDetails';

function RandomPage() {

    const [item, setItem] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const linkRef = useRef(null);
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
    
        axios
          .get("https://www.themealdb.com/api/json/v1/1/random.php")
          .then((response) => {
            const meal = response.data.meals[0];
            setItem(meal);
            if (meal) {
              getIngredients(meal);
            }
          });
      
    }, []);
  
    return (
        <>
    <Header></Header>
      {/* <div className='Details'>
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
              <button
                className="VideoButton"
              >
              <a className='YoutubeLink' ref={linkRef} href={item.strYoutube}>Youtube Video of the Recipe {item.strMeal}</a>
              </button>
  
      
            </div>
          </div>
        </div>
      </div> */}
      <RecipeDetails id={item.idMeal} ></RecipeDetails>
      </>
    );
}

export default RandomPage