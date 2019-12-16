import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

    const [episodes, setEpisodes] = useState([]);

    // const [searchTerm, setSearchTerm] = useState('');

    // const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then(response => {
                console.log(response.data.results)
                setEpisodes(response.data.results)
                // setCharacters(response.data.results);
                // setSearchResults(response.data.results);
            })
            .catch(error => {
                console.log('error', error)
            })
    }, []);

    // useEffect(() => {
    //     const results = locations.filter(location => {
    //         return location.name.toLowerCase().includes(searchTerm.toLowerCase());
    //     });
    //     setSearchResults(results);
    // }, [searchTerm]);

    if (!episodes) {
        return <div>Looking for locations...</div>
    }

    return (
        <section className="episode-list">
            <div>
                {episodes.map(episode => {
                    return (
                        <EpisodeCard EpisodeData={episode} key={episode.id} />
                    )
                })}
            </div>
        </section>
    );


}