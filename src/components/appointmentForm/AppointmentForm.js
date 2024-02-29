import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contactsFromApp,
  title,
  setTitle,
  currentName,
  setCurrentName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={currentName}>Name</label>
      <br />
      <input
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
      />{" "}
      <br />
      <label htmlFor={date}>Date</label>
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
      />
      <br />
      <label htmlFor={time}>Time</label>
      <br />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <label htmlFor={contactsFromApp}>Contacts</label>
      <br />
      <ContactPicker
        value={contact}
        name="contact"
        contactsFromAppointmentsPage={contactsFromApp}
        handleChange={setContact}
      />
      <br />
      <input type="submit" />
    </form>
  );
};
