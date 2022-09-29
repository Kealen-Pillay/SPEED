import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const navigateSubmit = () => {
    navigate("/post");
  };
  return (
    <div className="titleContainer">
      <h1 className="title-text">SPEED</h1>
      <div className="buttonContainer">
        <button id="homeSearchButton">
          <h6 className="gradient-text">Search Articles</h6>
        </button>
        <button id="homeSubmitButton" onClick={navigateSubmit}>
          <h6 className="gradient-text">Submit Article</h6>
        </button>
      </div>
    </div>
  );
};
