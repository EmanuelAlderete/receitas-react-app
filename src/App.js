import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Recipe from './Recipe';

const AppDiv = styled.div`

  min-height: 100vh;
  background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);

  form {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

  input {
    width: 50%;
    border: none;
    padding: 10px;
}

button {
    background: lightcoral;
    border: none;
    padding: 10px 20px;
}

.recipes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

`;

const App = () => {
  
  const APP_ID = '79c7f61c';
  const APP_KEY = '6d941fede628a47e91db91a4e4c87403';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  let API_GET_REQ = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect (() => {
    getRecipes();
  },[query]); 

  const getRecipes = async () => {
    const response = await fetch(API_GET_REQ);
    const data = await response.json();

    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (  
    <AppDiv>
      <form className="search-form" onSubmit={getSearch} >
        <input 
        type="text" 
        className="search-bar" 
        value={search} 
        onChange={updateSearch}
        placeholder="Banana"  
        />
        <button type="submit" className="search-button" >
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </AppDiv>
  )
}

export default App;
