import React from "react";
import style from "./card.module.css";
const Recipe = ({ title, image, dish_type, calories, time, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.recipe_img} src={image} alt="" />
      <ul>
        {dish_type.map((dishType) => (
          <li>DISH TYPE -"{dishType}"</li>
        ))}
      </ul>
      <p>CALORIES : {calories}</p>
      <p>COOK TIME : {time}min</p>
      STEPS :
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <hr></hr>
    </div>
  );
};

export default Recipe;
