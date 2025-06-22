import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <NavLink
            to="/"
            className="body-sm"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-primary-100)" : "var(--text-color)",
              fontWeight: isActive ? "var(--font-weight-bold)" : "var(--font-weight-regular)",
              textDecoration: "none",
            })}
          >
            Events
          </NavLink>
        </li>
        {/* Possibility to add additional links? */}
      </ul>
    </nav>
  );
};

export default Nav;


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Nav = () => {
//   return (
//    <nav>

// <NavLink to="/">Events</NavLink>

//    </nav>
//   );
// }

// export default Nav;