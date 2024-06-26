/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
/* import './App.css' */

import { useState, useEffect } from 'react';
import ContactList from './ContactList.jsx';
import ContactForm from './ContactForm.jsx';
import SearchBox from './Searchbox.jsx';
import css from './App.module.css'





export default function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [value, setValue] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
 
  const onDelete = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  

  return (
    <>
 <div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact}/>

  <SearchBox value={value} onChange={handleChange} contacts={filteredContacts}/>

<ContactList contacts={filteredContacts} onDelete={onDelete}/>
</div>

    </>
  )
}