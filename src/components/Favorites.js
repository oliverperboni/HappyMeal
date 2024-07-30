import React, { useState, useEffect } from 'react';
import RecipeCard from "./RecipeCard";
import '../Css/RecipeCard.css'; // Make sure to import your CSS file

function Favorites() {
  const [Favs, setFavs] = useState([]);

  useEffect(() => {
    let listFav = localStorage.getItem("favList");
    let parsedListFav = listFav ? JSON.parse(listFav) : [];
    setFavs(parsedListFav);
  }, []);

  function removeFav(mealId) {
    let favList = localStorage.getItem("favList");
    if (favList) {
      let parsedListFav = JSON.parse(favList);
      parsedListFav = parsedListFav.filter(meal => meal.idMeal !== mealId);
      localStorage.setItem("favList", JSON.stringify(parsedListFav));
      setFavs(parsedListFav);
    }
  }

  return (
    <>
      <div className="recipe-grid">
        {Favs.length > 0 ? (
          Favs.map((meal, idx) => (
            <>
              <RecipeCard id={meal.idMeal} />
            </>
          ))
        ) : (
            <p className="empty-favorites-message">Nothing in the Favorites</p>
        )}
      </div>
    </>
  );
}

export default Favorites;
