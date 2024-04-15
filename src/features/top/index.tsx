import { recipes } from "data/recipes";
import React from "react";
import { RecipeItem } from "./components/RecipeItem";

export const Top = () => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} {...recipe} />
      ))}
    </>
  );
};
