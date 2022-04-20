import React from "react";

export default function News(props) {
  return (
    <div>
      <div className="card my-4">
        <div className="card-header" style={{ background: "#faf3c0" }}>
          {props.name.toUpperCase()}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <b>
            {" "}
            <p className="card-text">News Category: {props.category}</p>
          </b>
          <p className="card-text">
            <small className="text-muted">
              By {!props.author ? "Unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a
            href={props.newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning text-light"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
