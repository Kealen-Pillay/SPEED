import React from "react";
import "./SearchArticle.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export const SearchArticle = (props) => {
  const { articles } = props;

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: false,
    },
    {
      field: "journal",
      headerName: "Journal",
      width: 150,
      editable: false,
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 150,
      editable: false,
    },
    {
      field: "pages",
      headerName: "Pages",
      width: 150,
      editable: false,
    },
    {
      field: "doi",
      headerName: "DOI",
      width: 150,
      editable: false,
    },
    {
      field: "practice",
      headerName: "Practice",
      width: 150,
      editable: false,
    },
    {
      field: "claim",
      headerName: "Claim",
      width: 150,
      editable: false,
    },
    {
      field: "researchType",
      headerName: "Research",
      width: 150,
      editable: false,
    },
    {
      field: "author",
      headerName: "Author",
      type: "string",
      width: 110,
      editable: false,
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      width: 110,
      editable: false,
    },
    {
      field: "publishedDate",
      headerName: "Published Date",
      type: "string",
      width: 110,
      editable: false,
    },
    {
      field: "publishers",
      headerName: "Publishers",
      type: "string",
      width: 110,
      editable: false,
    },
  ];

  const rows = articles.map((row) => ({
    id: row._id,
    title: row.title,
    journal: row.journalName,
    volume: row.volume,
    pages: row.pages,
    doi: row.doi,
    practice: row.practice,
    claim: row.claim,
    researchType: row.researchType,
    author: row.author,
    description: row.description,
    publishedDate: row.published_date,
    publishers: row.publisher,
  }));

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
        <Box sx={{ height: 400, width: "80%", marginTop: "5%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
        <button id="searchButton">
          <h6 className="gradient-text">Search</h6>
        </button>
      </div>
    </body>
  );
};
