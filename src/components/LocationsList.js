import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [locations, setLocations] = useState([]);

    // const [searchTerm, setSearchTerm] = useState('');

    // const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {
                console.log(response.data.results)
                setLocations(response.data.results)
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

    if (!locations) {
        return <div>Looking for locations...</div>
    }

    return (
        <section className="location-list">
            {/* <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} /> */}
            <div>
                {locations.map(location => {
                    return (
                        <LocationCard LocationData={location} key={location.id} />
                    )
                })}
            </div>
        </section>
    );


}