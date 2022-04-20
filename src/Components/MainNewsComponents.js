import React, { useState, useEffect } from "react";

import News from "./News";
import Spinner from "./Spinner";

export default function MainNewsComponents() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  const fetchNewsData = async () => {
    const data = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_638349eb602f1363b0e022b472c70855eaa2&country=in`
    );
    setLoading(true);
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setArticle(result);
    setLoading(false);
    setTotalResults(result);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNextPage = async () => {
    if (page + 1 > Math.ceil(totalResults / 20)) {
    } else {
      const data = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_638349eb602f1363b0e022b472c70855eaa2&country=in&page=${
          page + 1
        }`
      );
      setLoading(true);
      const dataJ = await data.json();
      const result = dataJ.results;
      console.log(result);
      setArticle(result);
      setLoading(false);
      setPage(page + 1);
      console.log("next page");
    }
  };

  const fetchPreviousPage = async () => {
    const data = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_638349eb602f1363b0e022b472c70855eaa2&country=in&page=${
        page - 1
      }`
    );
    setLoading(true);
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setArticle(result);
    setLoading(false);
    setPage(page - 1);
    console.log("previous page");
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <h1 className="text-center">NewsMania - Top Headlines</h1>
        {loading && <Spinner />}

        {article.map((element) => {
          return (
            <div key={element.link}>
              <News
                title={element.title}
                desc={element.description}
                newsurl={element.link}
                name={element.source_id}
                author={element.creator}
                date={element.pubDate}
                category={element.category}
              />{" "}
            </div>
          );
        })}

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            className="btn btn-warning text-light"
            type="button"
            onClick={fetchPreviousPage}
          >
            Previous
          </button>
          <button
            className=" btn btn-warning text-light"
            type="button"
            onClick={fetchNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
