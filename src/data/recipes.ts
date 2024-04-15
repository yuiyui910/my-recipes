import { recipe } from "types/recipe";
import defaultImagePath from "../images/defaultRecipeImage.png";

export const recipes: recipe[] = [
  {
    //IDはランダム文字列にしたい
    id: "0000000001",
    name: "オムライス",
    imagePath: defaultImagePath,
    url: "/recipes/omelette-rice",
  },
  {
    id: "0000000002",
    name: "カレーライス",
    imagePath: defaultImagePath,
    url: "/recipes/curry-rice",
  },
];
