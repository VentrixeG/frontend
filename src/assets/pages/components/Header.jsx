import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "var(--color-grey-20)",
        padding: "1rem 0",
        borderBottom: "1px solid var(--color-grey-30)"
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="title-md" style={{ margin: 0 }}>Ventixe</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;


// import React from "react";


// const Header = () => {
//   return (
//     <header>test</header>
//   );
// }

// export default Header;