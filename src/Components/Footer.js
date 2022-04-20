import React from 'react'

export default function Footer() {
  return (
    <div>
       <div>
         <footer
        className="bg-warning text-center text-light"
        style={{ width: "100%", top: "50vh", position: "relative" }}
      >
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              target="_blank"
              rel="noreferrer"
              href="https://m.facebook.com/100025166202480/"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Lakshay35660321?t=kScv_UWVtqgcfEDrVYkYrA&s=09"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/lakshaysharma"
              role="button"
            >
              <i className="fab fa-codepen"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/lakshays9625/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/lakshay-sharma-4a8a9a230"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/LakshayLakshaySharma"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://newsdata.io/"
          >
            NewsData.io
          </a>
        </div>
      </footer>
    </div>
    </div>
  )
}
