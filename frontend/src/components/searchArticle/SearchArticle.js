import React, { useState, useEffect } from "react";
import "./SearchArticle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SearchArticle = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const ProductTable = () => {
    const [sortedField, setSortedField] = useState(null);
    if (sortedField !== null) {
      rows.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("title")}
              >
                Title
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("journalName")}
              >
                Journal Name
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("volume")}
              >
                Volume
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("pages")}
              >
                Pages
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("doi")}
              >
                DOI
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("practice")}
              >
                Practice
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("claim")}
              >
                Claim
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("researchType")}
              >
                Research Type
              </button>{" "}
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("author")}
              >
                Author
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("description")}
              >
                Description
              </button>
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("published_date")}
              >
                Published Date
              </button>{" "}
            </th>
            <th>
              <button
                type="button"
                id="sortButton"
                onClick={() => setSortedField("publishers")}
              >
                Publishers
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.journalName}</td>
              <td>{article.volume}</td>
              <td>{article.pages}</td>
              <td>{article.doi}</td>
              <td>{article.practice}</td>
              <td>{article.claim}</td>
              <td>{article.researchType}</td>
              <td>{article.author}</td>
              <td>{article.description}</td>
              <td>{article.published_date}</td>
              <td>{article.publishers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getData = () => {
    axios
      .get("http://localhost:8082/api/articles/")
      .then((res) => {
        res.data.map((article) => {
          let newArticle = {
            title: article.title,
            journalName: article.journalName,
            volume: article.volume,
            pages: article.pages,
            doi: article.doi,
            practice: article.practice,
            claim: article.claim,
            researchType: article.researchType,
            author: article.author,
            description: article.description,
            published_date: article.published_date,
            publishers: article.publisher,
          };
          rows.push(newArticle);
        });
        console.log(rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <body>
      <button id="homeButton" onClick={navigateHome}>
        <h6 className="gradient-text">Home</h6>
      </button>
      <button id="submitButton" onClick={navigateSubmit}>
        <h6 className="gradient-text">Submit Article</h6>
      </button>
      <div id="contentContainer">
        <div id="selectionContainer">
          <select>
            <option disabled selected>
              SE Practice
            </option>
            <option>TDD</option>
            <option>BDD</option>
          </select>
          <select>
            <option disabled selected>
              Claim
            </option>
            <option>a</option>
            <option>b</option>
          </select>
          <select>
            <option disabled selected>
              Start Publication Year
            </option>
            <option>2000</option>
            <option>2001</option>
          </select>
          <select>
            <option disabled selected>
              End Publication Year
            </option>
            <option>2000</option>
            <option>2001</option>
          </select>
        </div>
        <ProductTable />
        <button id="searchButton" onClick={getData}>
          <h6 className="gradient-text">Search</h6>
        </button>
      </div>
    </body>
  );
};
