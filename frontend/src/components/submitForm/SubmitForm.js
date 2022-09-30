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
  const [formatType, setFormatType] = useState("");

  const navigate = useNavigate();
  const Cite = require("citation-js");
  require("@citation-js/plugin-bibtex");

  const navigateHome = () => {
    navigate("/");
  };

  const postArticle = (e) => {
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
        document.getElementById("form").reset();
      })
      .catch((err) => {
        alert(
          "Unable to submit form. Please check fields have been entered correctly."
        );
        console.log("Error Submitting Article: " + err);
      });
  };

  //bibtex stuff
  const parseBibtex = async (bibtex, callback) => {
    let reader = new FileReader();
    reader.onload = async () => {
      const result = new Cite(reader.result);
      if (result != null && result.get().length > 0) {
        return result;
      }
    };
    try {
      reader.readAsText(bibtex);
    } catch (err) {
      return null;
    }
  };

  const submitBibtex = (e) => {
    e.preventDefault();
    const file = parseBibtex(e.target.files[0]);
    // let bibtexParse = require("@orcid/bibtex-parse-js");
    // let sample = bibtexParse.toJSON(e.target.value);
    // console.log(sample);
    console.log(file);
  };
  //^^^

  return (
    <body>
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="searchButton">
        <h6 className="gradient-text">Search Articles</h6>
      </button>
      <div className="container">
        <h1>Submit Article</h1>
        <select
          id="formSelection"
          onChange={(format) => setFormatType(format.target.value)}
        >
          <option value="" disabled selected>
            Select a Upload Format
          </option>
          <option value="form">Form</option>
          <option value="bibtex">BibTeX</option>
        </select>
        {formatType === "form" ? (
          <form id="form" onSubmit={postArticle}>
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
            <select onChange={(practice) => setPractice(practice.target.value)}>
              <option value="" disabled selected>
                Practice
              </option>
              <option value="TDD">TDD</option>
              <option value="BDD">BDD</option>
            </select>
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
              onChange={(description) =>
                setDescription(description.target.value)
              }
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
        ) : (
          <div id="bibtex">
            <input type="file" />
            <button onClick={submitBibtex}>
              <h6 className="gradient-text">Submit Article</h6>
            </button>
          </div>
        )}
      </div>
    </body>
  );
};
