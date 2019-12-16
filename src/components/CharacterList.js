import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState();


  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // console.log('response', response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('error', error)
      })
  }, []);

  if (!characters) {
    return <div>Looking for characters...</div>
  }

  return (
    <section className="character-list">
      <SearchForm CharactersForSearch={characters} />
      <div>
        {characters.map(character => {
          // console.log(character.name);
          return (
            <CharacterCard CharacterData={character} key={character.id} />
          )
        })}

      </div>
    </section>
  );
}