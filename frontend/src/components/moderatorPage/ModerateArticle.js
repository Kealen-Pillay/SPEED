import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./ModerateArticle.css";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

export const ModerateArticle = () => {
  const [articleList, setArticleList] = useState([]);
  const [articleSelected, setArticleSelected] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");
  const [credibilityChecked, setCredibilityChecked] = useState(false);
  const [relevancyChecked, setRelevancyChecked] = useState(false);
  const [approveClicked, setApproveClicked] = useState(false);
  const [rejectClicked, setRejectClicked] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState("Show All");
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

  const handleSearch = async () => {
    const url = new URL("http://localhost:8082/api/articles/filter"); //change to /api/articles
    if (approvalStatus !== "Show All") {
      url.searchParams.append("approvalStatus", approvalStatus);
    } else {
      url.searchParams.append("approvalStatus", "Rejected");
      url.searchParams.append("approvalStatus", "Pending");
    }

    await axios
      .get(url)
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const getData = async () => {
    const url = new URL("http://localhost:8082/api/articles/filter"); //change to /api/articles
    url.searchParams.append("approvalStatus", "Pending");
    url.searchParams.append("approvalStatus", "Rejected");

    await axios
      .get(url)
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const handleApprove = async () => {
    const url = "http://localhost:8082/api/articles/" + currentSelection;
    await axios
      .put(url, {
        approvalStatus: "Approved",
        credible: "Credible",
        relevancyStatus: "Relevant",
      })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const handleReject = async () => {
    const url = "http://localhost:8082/api/articles/" + currentSelection;
    await axios
      .put(url, {
        approvalStatus: "Rejected",
        credible: credibilityChecked ? "Credible" : "Not Credible",
        relevancyStatus: relevancyChecked ? "Relevant" : "Not Relevant",
      })
      .then(() => {
        getData();
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
      width: 150,
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
      width: 200,
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
      width: 350,
      editable: false,
      renderCell: (doi) => (
        <Link href={`${doi.value}`} target="_blank">
          {doi.value}
        </Link>
      ),
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
      width: 220,
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
      width: 180,
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
      width: 110,
      editable: false,
    },
    {
      field: "publishers",
      headerName: "Publishers",
      type: "string",
      width: 150,
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
        <h1>Moderator Page</h1>
        <Box
          sx={{
            display: "flex",
            width: "20%",
            justifyContent: "space-between",
            marginTop: "1%",
            backgroundColor: "white",
            padding: "0.5% 0.5% 0.5% 0.5%",
            borderRadius: 5,
          }}
        >
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={approvalStatus}
              label="Status"
              onChange={(text) => setApprovalStatus(text.target.value)}
            >
              <MenuItem value={"Show All"}>Show All</MenuItem>
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Rejected"}>Rejected</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              backgroundColor: "#ff5f6d",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ff5f6d",
              },
            }}
          >
            Show Results
          </Button>
        </Box>
        <Box sx={{ height: 400, width: "80%", marginTop: "2%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
            disableColumnMenu
            onRowClick={(row) => {
              setCurrentSelection(row.id);
              setRelevancyChecked(false);
              setCredibilityChecked(false);
              setApproveClicked(false);
              setRejectClicked(false);
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
              backgroundColor: "white",
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
              checked={credibilityChecked}
              onChange={(event) => {
                setCredibilityChecked(event.target.checked);
              }}
              control={<Checkbox defaultChecked />}
              label="Credibility"
              sx={{ color: "black", marginTop: "1%" }}
            />
            <FormControlLabel
              checked={relevancyChecked}
              onChange={(event) => {
                setRelevancyChecked(event.target.checked);
              }}
              control={<Checkbox defaultChecked />}
              label="Relevancy"
              sx={{ color: "black", marginTop: "1%" }}
            />
            <Button
              onClick={handleApprove}
              disabled={credibilityChecked && relevancyChecked ? false : true}
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
              onClick={handleReject}
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
