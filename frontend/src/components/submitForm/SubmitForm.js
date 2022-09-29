import React, { useState } from "react";
import "./SubmitForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [publishedDate, setPublishedDate] = useState();
  const [publisher, setPublisher] = useState("");

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  const postArticle = (e) => {
    console.log("posting article");
    e.preventDefault();
    const submissionData = {
      title: title,
      journalName: journalName,
      volume: volume,
      pages: pages,
      doi: DOI,
      practice: practice,
      claim: claim,
      researchType: researchType,
      author: author,
      description: description,
      published_date: publishedDate,
      publisher: publisher,
    };
    console.log(submissionData);
    axios
      .post("http://localhost:8082/api/articles", submissionData)
      .then((res) => {
        setTitle("");
        setJournalName("");
        setVolume();
        setPages("");
        setDOI("");
        setPractice("");
        setClaim("");
        setResearchType("");
        setAuthor("");
        setDescription("");
        setPublishedDate();
        setPublisher("");
        console.log("Submitted Article");
      })
      .catch((err) => {
        console.log("Error Submitting Article: " + err);
      });
  };

  return (
    <body>
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="searchButton">
        <h6 className="gradient-text">Search Articles</h6>
      </button>
      <div className="container">
        <form onSubmit={postArticle}>
          <h1>Submit Article</h1>
          <input
            type="text"
            required
            placeholder="Title"
            value={title}
            onChange={(title) => setTitle(title.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Journal Name"
            value={journalName}
            onChange={(journal) => setJournalName(journal.target.value)}
          ></input>
          <input
            type="number"
            required
            placeholder="Volume"
            value={volume}
            onChange={(volume) => setVolume(volume.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Pages"
            value={pages}
            onChange={(pages) => setPages(pages.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="DOI"
            value={DOI}
            onChange={(DOI) => setDOI(DOI.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Practice"
            value={practice}
            onChange={(practice) => setPractice(practice.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Claim"
            value={claim}
            onChange={(claim) => setClaim(claim.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Research Type"
            value={researchType}
            onChange={(researchType) =>
              setResearchType(researchType.target.value)
            }
          ></input>
          <input
            type="text"
            required
            placeholder="Author"
            value={author}
            onChange={(author) => setAuthor(author.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Description"
            value={description}
            onChange={(description) => setDescription(description.target.value)}
          ></input>
          <input
            id="publishedDate"
            type="date"
            placeholder="Published Date"
            required
            onChange={(date) => setPublishedDate(date.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Publisher"
            value={publisher}
            onChange={(publisher) => setPublisher(publisher.target.value)}
          ></input>
          <button type="submit">
            <h6 className="gradient-text">Submit Article</h6>
          </button>
        </form>
      </div>
    </body>
  );
};
