import React from "react";
import { useNavigate } from "react-router-dom";

export const ModerateArticle = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const navigateSearch = () => {
    navigate("/search");
  };

  return (
    <body>
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="submitButton" onClick={navigateSubmit}>
        <h6 className="gradient-text">Submit Article</h6>
      </button>
      <button id="searchButton" onClick={navigateSearch}>
        <h6 className="gradient-text">Search Article</h6>
      </button>
    </body>
  );
};
