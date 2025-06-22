import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-grey-20)",
        padding: "1rem 0",
        textAlign: "center",
        fontSize: "var(--font-size-body-sm)",
        color: "var(--text-muted)",
        marginTop: "2rem"
      }}
    >
      &copy; {new Date().getFullYear()} Ventixe. All rights reserved. 2035
    </footer>
  );
};

export default Footer;

