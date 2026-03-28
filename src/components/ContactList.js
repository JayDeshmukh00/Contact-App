import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        contacts.map(contact => (
 <ContactItem key={contact.id} contact={contact} onDelete={onDelete} /> 
        ))
      )}
    </div>
  );
};

export default ContactList;
