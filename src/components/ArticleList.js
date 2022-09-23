import React from "react";
import Article from "./Article";

const ArticleList = (articles) => {
  return (
    <main id="articleList">
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
          />
        );
      })}
    </main>
  );
};

export default Article;
