import React from "react";
import SearchBar from "../components/SearchBar";
import "../Css/HomePage.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
function HomePage() {

  return (
    <div>
      <Header></Header>
      <h1>Welcome to My Happy Meal</h1>
    <SearchBar></SearchBar>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
