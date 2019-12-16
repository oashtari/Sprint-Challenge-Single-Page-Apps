import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';


export default function App() {

  return (
    <main>
      <Header />

      <div className="App">

        <Link to='/'>Back to Home</Link>
        <br />
        <Link to='/list'>List of Characters</Link>


        <Route exact path='/' />
        <Route path='/list' component={CharacterList} />

      </div>

    </main>

  );
}




// const results = CharacterList.filter(character => {
//   return character.toLowerCase().includes(searchTerm.toLowerCase());
// })

// setSearchResults(results);

// const test = () => {
//   searchTerm = 'search';
//   console.log('search', searchTerm);
// }
