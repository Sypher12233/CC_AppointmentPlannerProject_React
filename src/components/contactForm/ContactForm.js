import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={name}>Name</label> <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor={phone}>Phone</label>
      <br />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        // pattern="07(?:[02469][0-9]{7})"
      />
      <br />
      <label htmlFor={email}>Email</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
};
