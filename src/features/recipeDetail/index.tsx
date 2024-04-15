import React from "react";
import { recipe } from "types/recipe";

export const RecipeDetail = (recipe: recipe) => {
  return <div>{recipe.name}のレシピページです</div>;
};
