import React from "react";

const Article = ({ title, date, preview, minutes }) => {
  return (
    <article>
      <h3> {title} </h3>
      <small>
        {date ? date : "January 1, 1970"}, {minutes} minutes read
      </small>
      <p> {preview} </p>
      <p></p>
    </article>
  );
};

export default Article;
