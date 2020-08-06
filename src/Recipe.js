import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title,calories,image,ing }) => {
    return (
        <div  className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ing.map(ingr => (
                    <li>{ingr.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe;