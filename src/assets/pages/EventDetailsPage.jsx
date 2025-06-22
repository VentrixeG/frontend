import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EventDetailsPage = () => {
  const { id } = useParams();


  const [event, setEvent] = useState({});
  
  const getEvents = async () => {
  const res = await fetch(`https://ec-eventservice01-anathedbb5h6h8an.swedencentral-01.azurewebsites.net/api/events/${id}`);
  
  if (res.ok) {
  const response = await res.json();
  setEvent(response.result);
  }
  
  }
  
  useEffect(() => {
  getEvents();
  }, []);

  
    return (
      <div className="container">
      <div className="card">
        <h1 className="title-lg">{event.title}</h1>
        {event.description && (
          <p className="body-md" style={{ margin: "1rem 0" }}>
            {event.description}
          </p>
        )}
        <Link to={`/events/booking/${id}`}>
          <button className="btn-md primary">Book Event</button>
        </Link>
      </div>
    </div>
  );
}

export default EventDetailsPage;