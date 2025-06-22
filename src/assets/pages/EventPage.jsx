import React from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventList from "./components/EventList";
import CreateEventForm from "./components/CreateEventForm";

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <Header />
      <main>
        <EventList />
        <CreateEventForm />
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;