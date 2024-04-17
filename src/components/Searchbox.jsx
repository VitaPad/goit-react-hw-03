
import React, { useState } from 'react';
import css from "./SearchBox.module.css"

export default function Searchbox({value, onChange, contacts}) {

  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm)
    );
    setFilteredContacts(filtered);
    onChange(event);
  }

  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <input
      className={css.search}
        value={value}
        onChange={handleSearch}
        type="text"
      />
    </div>
  );
}