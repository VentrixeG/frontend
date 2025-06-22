import React from "react";
import { Link } from "react-router-dom";

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} style={{ textDecoration: "none" }}>
      <div className="card" style={{ cursor: "pointer" }}>
        <h3 className="title-md">{item.title}</h3>
      </div>
    </Link>
  );
};

export default EventItem;



// import React from "react";
// import { Link } from "react-router-dom";


// const EventItem = ({item}) => {
// return (
   
//     <Link to={`/events/${item.id}`}>
   
//    <div className="card">

// <div>{item.title}</div>

//     </div> 
//     </Link>
   
// )
// }

// export default EventItem;