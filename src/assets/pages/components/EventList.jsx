
import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await fetch("https://ec-eventservice01-anathedbb5h6h8an.swedencentral-01.azurewebsites.net/api/events");
    if (res.ok) {
      const response = await res.json();
      setEvents(response.result);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className="container">
      <h2 className="title-lg">Kommande events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventItem key={event.id} item={event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;

// import React, { use } from "react";
// import EventItem from "./EventItem";

// import { useState, useEffect } from "react";





// const EventList = () => {
// const [events, setEvents] = useState([]);

// const getEvents = async () => {
// const res = await fetch("https://ec-eventservice01-anathedbb5h6h8an.swedencentral-01.azurewebsites.net/api/events");

// if (res.ok) {
// const response = await res.json();
// setEvents(response.result);
// }

// }

// useEffect(() => {
// getEvents();
// }, []);

//     return (

//        <section id="events">
//        {
//         events.map(event => (<EventItem key={event.id} item ={event} /> ))
//        }

//        </section> 

//     )

// }

// export default EventList;
