import React from 'react';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <div className="contact-item">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactItem;
