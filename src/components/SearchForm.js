import React, { useState, useEffect } from "react";

export default function SearchForm({ CharactersForSearch }) {


  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState({ CharactersForSearch });
  console.log('test', CharactersForSearch)

  useEffect(() => { }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="search-form">

      <form>
        <label htmlFor="search_form">SEARCH:</label>
        <input
          id="search_form"
          type='text'
          name="search_form"
          placeholder="Search by Name"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="search_for">
        {/* <ul>
          {searchResults.map(character => {
            return <li key={character}>{character}</li>
          })}
        </ul> */}
      </div>

    </section>
  );
}


