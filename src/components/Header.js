import React from "react";

const Header = (props) => {
  return (
    <header id="header">
      <h1>{props.name}</h1>
    </header>
  );
};

export default Header;
