import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Search from './components/Search';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('contacts');
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="app-header">
        <h1>Contact Management App</h1>
      </header>
      <main className="app-main">
        <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ContactForm onAdd={addContact} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </main>
    </div>
  );
}

export default App;
