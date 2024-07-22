import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage"
import React from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:mealId" element={<RecipePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </div>
    // <div className="App">
    //  <HomePage>
      
    //  </HomePage>
    // </div>
  );
}

export default App;
