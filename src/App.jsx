import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";
const App = () => {
  const APP_ID = "41ecd9ed";
  const APP_KEY = "b9b316e91aa83f9f384e38d225a04ef2";

  // recipes below include all list recipes in the database
  const [recipes, setRecipes] = useState([]);

  const [search, setsearch] = useState("");

  const [query, setquery] = useState("cocktail");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setsearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setquery(search); //salad
    setsearch(search);
  };
  // jsx components
  return (
    <div className="App">
      <form className="search-Form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search recipe..."
          value={search} //salad
          onChange={updateSearch}
        />
        <button onClick={getSearch} className="search-button" type="submit">
          search
        </button>
      </form>
      {/* mapping recipes from api line_no.13*/}
      <div className="RGCER"><h2>With &hearts; for RGCER</h2></div>
      <div className="searched_recipe">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            time={recipe.recipe.totalTime}
            ingredients={recipe.recipe.ingredients}
            dish_type={recipe.recipe.dishType}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
