/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
/* import './App.css' */

import { useState } from 'react';
import SearchBox from './Searchbox.jsx';
import ContactList from './ContactList.jsx'








function App() {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [value, setValues] = useState("");

  const handleChange = (event) => {
    setValues(event.target.value);
  };


  return (
    <>
 <div>
  <h1>Phonebook</h1>
  {/* <ContactForm /> */}

  <SearchBox value={value} onChange={handleChange}/>

<ContactList contacts={contacts} />
</div>

    </>
  )
}

export default App
 