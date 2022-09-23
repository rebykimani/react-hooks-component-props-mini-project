import React from "react";

const About = (props) => {
  return (
    <aside id="aside">
      <img src={props.image} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
};

export default About;
