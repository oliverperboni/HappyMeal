import React from "react";
import SearchBar from "../components/SearchBar";
import "../Css/HomePage.css"
import Header from "../components/Header";
function HomePage() {

  return (
    <div>
      <Header></Header>
      <h1>Home Page</h1>
    <SearchBar></SearchBar>
    </div>
  );
}

export default HomePage;
