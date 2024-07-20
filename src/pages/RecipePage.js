import React from 'react'
import RecipeDetails from '../components/RecipeDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../Css/RecipePage.css"



function RecipePage() {
  return (

    <div>
      <Header></Header>
      <RecipeDetails></RecipeDetails>
      <Footer></Footer>
      </div>
  )
}

export default RecipePage