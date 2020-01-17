import React from 'react';
import styled from 'styled-components';

const RecipeDiv = styled.div`  

    border-radius: 10px;
    box-shadow: 0 5px 20px rgb(71, 71, 71);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #FFF;
    align-items: center;
    min-width: 40%;

    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

`;

const Recipe = ({title, calories, image, ingredients }) => {
    return (
        <RecipeDiv>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={Math.random()}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calorias: {calories}</p>
            <img src={image} alt="" />
        </RecipeDiv>
    );
}

export default Recipe;