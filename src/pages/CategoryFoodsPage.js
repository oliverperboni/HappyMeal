import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import '../Css/CategoryPage.css'; // Import the CSS file for grid styling

function CategoryFoodsPage() {
    let { catStr } = useParams();
    const [foodList, setFoodList] = useState([]);

    function getMeals(catName) {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + catName)
            .then(response => {
                setFoodList(response.data.meals);
            })
            .catch(error => {
                console.error("Error fetching meals:", error);
            });
    }

    useEffect(() => {
        getMeals(catStr);
    }, [catStr]);

    return (
        <>
            <Header />
            <div className="recipe-grid">
                {foodList.length > 0 ? (
                    foodList.map((meal, idx) => (
                        <RecipeCard key={idx} id={meal.idMeal} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default CategoryFoodsPage;
