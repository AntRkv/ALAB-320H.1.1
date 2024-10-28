
import React from "react";

function Header({ title }) {
  const headerStyle = {
    border: "1px solid #ddd",
    padding: "15px",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h2>HeaderComponent</h2>
    </header>
  );
}

export default Header;
