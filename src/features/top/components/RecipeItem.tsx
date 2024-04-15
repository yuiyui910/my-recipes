import React from "react";
import { useNavigate } from "react-router-dom";
import { recipe } from "types/recipe";

export const RecipeItem = (recipe: recipe) => {
  //中に書かなくて済む方法があればやりたい
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(recipe.url)}>
      <div>
        <img src={recipe.imagePath} alt="レジピの画像" />
      </div>
      <div>{recipe.name}</div>
    </div>
  );
};
