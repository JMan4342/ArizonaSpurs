import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h1>Arizona Spurs</h1>
        </div>
        <ul className="nav nav-pills">
          <li className="nav-item link">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item link">
            <a
              href="#history"
              onClick={() => handlePageChange("History")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "History" ? "nav-link active" : "nav-link"
              }
            >
              History
            </a>
          </li>
          <li className="nav-item link">
            <a
              href="#merchandise"
              onClick={() => handlePageChange("Merchandise")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Merchandise" ? "nav-link active" : "nav-link"
              }
            >
              Merchandise
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
