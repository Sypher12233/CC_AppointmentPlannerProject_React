import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    setDuplicate(contacts.some((contact) => contact.name === name));
  }, [name]);

  /*
  Add contact info and clear data
  if the contact name is not a duplicate
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!duplicate) {
        handleContacts(name, phone, email);

        // reset the state variables hence clearing the form fields;
        setName("");
        setPhone("");
        setEmail("");
      } else {
        console.log("Duplicate contact : " + name);
      }
    } catch (e) {
      console.error("Error creating contact: " + e.message);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
