import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    let URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7626d3959cdf40c784cadc7b1a75c0c9`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, [category]);

  return (
    <div>
      <h1 className="text-center fs-2 my-2">
        <span className="text-capitalize">{category}</span>{" "}
        <span className="badge bg-primary">News</span>
      </h1>
      <div className="d-flex flex-row flex-wrap d-flex justify-content-around">
        {article.map((news, index) => {
          return (
            <NewsItem
              key={index}
              id={index}
              title={news.title}
              src={news.urlToImage}
              description={news.description}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
