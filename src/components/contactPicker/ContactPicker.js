import React from "react";

export const ContactPicker = ({
  contactsFromAppointmentsPage,
  name,
  value,
  handleChange,
}) => {
  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      name={name}
    >
      <option value="">No Contact Selected</option>
      {contactsFromAppointmentsPage.map((contact) => (
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
