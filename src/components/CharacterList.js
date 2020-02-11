import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.log('error', error)
      })
  }, []);

  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  if (!characters) {
    return <div>Looking for characters...</div>
  }

  return (
    <section className="character-list">
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div>
        {searchResults.map(character => {
          return (
            <CharacterCard CharacterData={character} key={character.id} />
          )
        })}
      </div>
    </section>
  );
}