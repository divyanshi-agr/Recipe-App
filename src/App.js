import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '978a9de6' ;
  const APP_KEY = 'b9f10cea3d77dfb94adde36177549498	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text"
               value={search}
               onChange={updateSearch} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} 
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  key={recipe.recipe.label}
                  ing={recipe.recipe.ingredients}/>
        ))}
      </div> 
     

    </div>
  );
}

export default App;
