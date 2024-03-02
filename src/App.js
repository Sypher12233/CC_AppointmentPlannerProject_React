import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    // { name: "a", ph: "1", email: "a@a" },
  ]);
  const [appointments, setAppointments] = useState([
    // { name: "c", contact: "3", date: "", time: "" },
  ]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function handleContacts(name, phone, email) {
    try {
      setContacts([...contacts, { name: name, phone: phone, email: email }]);
    } catch (e) {
      console.error("Error adding new Contact: " + e.message);
    }
  }

  function handleAppointments(currentName, contact, date, time) {
    try {
      setAppointments([
        ...appointments,
        { name: currentName, contact: contact, date: date, time: time },
      ]);
    } catch (e) {
      console.error("Error adding new Appointment: " + e.message);
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              handleContacts={handleContacts}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              handleAppointments={handleAppointments}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
