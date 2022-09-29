import React, { useState } from "react";
import "./SubmitForm.css";

export const SubmitForm = () => {
  const [title, setTitle] = useState("");
  const [journalName, setJournalName] = useState("");
  const [volume, setVolume] = useState();
  const [pages, setPages] = useState("");
  const [DOI, setDOI] = useState("");
  const [practice, setPractice] = useState("");
  const [claim, setClaim] = useState("");
  const [researchType, setResearchType] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  return (
    <body>
      <button id="homeButton">
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="searchButton">
        <h6 className="gradient-text">Search Articles</h6>
      </button>
      <div className="container">
        <form>
          <h1>Submit Article</h1>
          <input type="text" required placeholder="Title" value={title}></input>
          <input
            type="text"
            required
            placeholder="Journal Name"
            value={journalName}
          ></input>
          <input
            type="number"
            required
            placeholder="Volume"
            value={volume}
          ></input>
          <input type="text" required placeholder="Pages" value={pages}></input>
          <input type="text" required placeholder="DOI" value={DOI}></input>
          <input
            type="text"
            required
            placeholder="Practice"
            value={practice}
          ></input>
          <input type="text" required placeholder="Claim" value={claim}></input>
          <input
            type="text"
            required
            placeholder="Research Type"
            value={researchType}
          ></input>
          <input
            type="text"
            required
            placeholder="Author"
            value={author}
          ></input>
          <input
            type="text"
            required
            placeholder="Description"
            value={description}
          ></input>
          <input
            id="publishedDate"
            type="date"
            placeholder="Published Date"
            required
          ></input>
          <input type="text" required placeholder="Publisher"></input>
          <button>
            <h6 className="gradient-text">Submit Article</h6>
          </button>
        </form>
      </div>
    </body>
  );
};
