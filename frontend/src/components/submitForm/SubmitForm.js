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
  const [formatType, setFormatType] = useState("form");
  const [bibtex, setBibtex] = useState("");

  const navigate = useNavigate();
  const Cite = require("citation-js");
  require("@citation-js/plugin-bibtex");

  const navigateHome = () => {
    navigate("/");
  };

  const navigateSearch = () => {
    navigate("/search");
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
      credible: "Pending",
      approvalStatus: "Pending",
      relevancyStatus: "Pending",
    };
    axios
      .post("/api/articles", submissionData)
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

  const readBibtex = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onload = async (e) => {
      const bibtexContent = e.target.result;
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <body>
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="searchButton" onClick={navigateSearch}>
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
            <div className="formFields">
              <div className="articleInfo">
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
                  placeholder="Pages"
                  value={pages}
                  onChange={(pages) => setPages(pages.target.value)}
                ></input>
                <select
                  onChange={(practice) => setPractice(practice.target.value)}
                >
                  <option value="" disabled selected>
                    Practice
                  </option>
                  <option value="TDD">TDD</option>
                  <option value="BDD">BDD</option>
                </select>
                <select onChange={(claim) => setClaim(claim.target.value)}>
                  <option value="" disabled selected>
                    Claim
                  </option>
                  <option value="Beneficial to quality">
                    Beneficial to quality
                  </option>
                  <option value="Detrimental to development">
                    Detrimental to development
                  </option>
                  <option value="Reduces development time">
                    Reduces development time
                  </option>
                </select>
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
              </div>
              <div className="journalInfo">
                <input
                  type="text"
                  required
                  placeholder="Journal Name"
                  value={journalName}
                  onChange={(journal) => setJournalName(journal.target.value)}
                ></input>
                <input
                  type="number"
                  min="1"
                  required
                  placeholder="Volume"
                  value={volume}
                  onChange={(volume) => setVolume(volume.target.value)}
                ></input>
                <input
                  type="text"
                  required
                  placeholder="DOI Link"
                  value={DOI}
                  onChange={(DOI) => setDOI(DOI.target.value)}
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
              </div>
            </div>
            <button type="submit" className="submitButton">
              <h6 className="gradient-text">Submit Article</h6>
            </button>
          </form>
        ) : (
          <div id="bibtex">
            <input
              type="file"
              onChange={(e) => {
                readBibtex(e);
              }}
            />
            <button>
              <h6 className="gradient-text">Submit Article</h6>
            </button>
          </div>
        )}
      </div>
    </body>
  );
};
