import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./ModerateArticle.css";

export const ModerateArticle = () => {
  const [articleList, setArticleList] = useState([]);
  const [articleSelected, setArticleSelected] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const navigateSearch = () => {
    navigate("/search");
  };
  const getData = async () => {
    const url = new URL("http://localhost:8082/api/articles/filter"); //change to /api/articles
    url.searchParams.append("approvalStatus", "pending");

    await axios
      .get(url)
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const columns = [
    {
      field: "approvalStatus",
      headerName: "Approval Status",
      type: "string",
      width: 110,
      editable: false,
    },
    {
      field: "relevancyStatus",
      headerName: "Relevancy Status",
      type: "string",
      width: 150,
      editable: false,
    },
    {
      field: "credibility",
      headerName: "Credibility",
      type: "string",
      width: 110,
      editable: false,
    },
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
      width: 80,
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
      width: 120,
      editable: false,
    },
    {
      field: "claim",
      headerName: "Claim",
      width: 200,
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
      width: 250,
      editable: false,
    },
    {
      field: "publishedDate",
      headerName: "Published Date",
      type: "string",
      width: 150,
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

  const rows =
    articleList.length > 0 &&
    articleList.map((row) => ({
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
      approvalStatus: row.approvalStatus,
      relevancyStatus: row.relevancyStatus,
      credibility: row.credible,
    }));

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
      <div id="contentContainer">
        <Box sx={{ height: 400, width: "80%", marginTop: "5%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
            disableColumnMenu
            onRowClick={(row) => {
              setCurrentSelection(row.id);
            }}
            onSelectionModelChange={(selection) => {
              let current = currentSelection;
              if (selection[0] !== current) {
                setArticleSelected(true);
              } else {
                setArticleSelected(!articleSelected);
              }
            }}
          />
        </Box>
        {articleSelected && (
          <FormGroup
            row
            sx={{
              backgroundColor: "rgba(255, 95, 109,0.5)",
              borderRadius: 5,
              width: "40%",
              marginTop: "5%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 10px 5px 10px",
              border: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Credibility"
              sx={{ color: "white", marginTop: "1%" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Relevancy"
              sx={{ color: "white", marginTop: "1%" }}
            />
            <Button
              sx={{
                backgroundColor: "#50c878",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#50c878",
                },
              }}
              variant="contained"
            >
              Approve
            </Button>
            <Button
              sx={{
                backgroundColor: "#e84746",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#e84746",
                },
              }}
              variant="contained"
            >
              Reject
            </Button>
          </FormGroup>
        )}
      </div>
    </body>
  );
};
