import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "features/top";
import { recipes } from "data/recipes";
import { RecipeDetail } from "features/recipeDetail";

function App() {
  return (
    <BrowserRouter basename="/my-recipes">
      <Routes>
        <Route path="/" element={<Top />} />
        {recipes.map((recipe) => (
          <Route path={recipe.url} element={<RecipeDetail {...recipe} />} />
        ))}

        {/* ここにパスを追加していく */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
