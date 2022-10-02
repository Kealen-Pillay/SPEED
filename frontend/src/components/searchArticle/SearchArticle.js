import React, { useState } from "react";
import "./SearchArticle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SearchArticle = () => {
  const [titles, setTitles] = useState([]);
  const [journalNames, setJournalNames] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [pages, setPages] = useState([]);
  const [dois, setDois] = useState([]);
  const [practices, setPractices] = useState([]);
  const [claims, setClaims] = useState([]);
  const [researchTypes, setResearchTypes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [publishedDates, setPublishedDates] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const searchArticle = () => {
    axios
      .get("http://localhost:8082/api/articles/")
      .then((res) => {
        setTitles(res.data.map((article) => article.title));
        setJournalNames(res.data.map((article) => article.journalName));
        setVolumes(res.data.map((article) => article.volume));
        setPages(res.data.map((article) => article.page));
        setDois(res.data.map((article) => article.doi));
        setPractices(res.data.map((article) => article.practice));
        setClaims(res.data.map((article) => article.claim));
        setResearchTypes(res.data.map((article) => article.researchType));
        setAuthors(res.data.map((article) => article.author));
        setDescriptions(res.data.map((article) => article.description));
        setPublishedDates(res.data.map((article) => article.publishedDate));
        setPublishers(res.data.map((article) => article.publisher));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const heading = [
    "Title",
    "Journal Name",
    "Volume",
    "Pages",
    "DOI",
    "Practice",
    "Claim",
    "Research Type",
    "Author",
    "Description",
    "Published Date",
    "Publisher",
  ];

  const tableData = [
    titles,
    journalNames,
    volumes,
    pages,
    dois,
    practices,
    claims,
    researchTypes,
    authors,
    descriptions,
    publishedDates,
    publishers,
  ];
  
  return (
    <body >
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="searchButton" onClick={navigateSubmit}>
        <h6 className="gradient-text">Submit Article</h6>
      </button>
      <div className="container">
        <h1>Search Articles</h1>
        <table>
          <thead>
            <tr>
              {heading.map((head) => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
                <td>
                    {data.map((item) => (
                        <tr><td>{item}</td></tr>
                    ))}
                </td>
            ))}
          </tbody>
        </table>
        <button id="searchButton" onClick={searchArticle}>
          <h6 className="gradient-text">Search</h6>
        </button>
      </div>
    </body>
  );
};
