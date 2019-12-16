import React from "react";

export default function SearchForm({ searchTerm, setSearchTerm }) {

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

    </section>
  );
}


